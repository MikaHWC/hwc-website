// /api/webhook.js
// Listens for Stripe events. When a subscription has a cycle_limit metadata,
// schedule it to auto-cancel after the configured number of cycles.

const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Disable Vercel's default body parser - we need the raw body for Stripe signature verification
module.exports.config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Handle checkout completion - convert subscription to a schedule with cycle limit
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    if (session.mode === 'subscription' && session.subscription) {
      try {
        const subscription = await stripe.subscriptions.retrieve(session.subscription);
        const cycleLimit = parseInt(subscription.metadata?.cycle_limit, 10);

        if (cycleLimit > 0) {
          // Convert this subscription into a schedule that auto-cancels after N iterations
          const schedule = await stripe.subscriptionSchedules.create({
            from_subscription: subscription.id,
          });

          // Update the schedule to enforce the iteration count and end behavior
          await stripe.subscriptionSchedules.update(schedule.id, {
            end_behavior: 'cancel',
            phases: [
              {
                items: schedule.phases[0].items,
                iterations: cycleLimit,
              },
            ],
          });

          console.log(`Subscription ${subscription.id} scheduled to auto-cancel after ${cycleLimit} cycles`);
        }
      } catch (err) {
        console.error('Error creating subscription schedule:', err);
        // Don't return 500 - we still want Stripe to consider the webhook handled
      }
    }
  }

  return res.status(200).json({ received: true });
};
