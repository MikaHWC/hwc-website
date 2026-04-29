// /api/checkout.js
// Creates a Stripe Checkout session for a subscription
// Accelerate gets capped at 3 cycles via webhook handler after checkout completes

const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRODUCTS = {
  accelerate: {
    priceId: 'price_1TRLcfGewDN2FYAvsN2O8VnB',
    cycleLimit: 3,
  },
  scale: {
    priceId: 'price_1TRLfNGewDN2FYAv6lZOhaSO',
    cycleLimit: null,
  },
  ai: {
    priceId: 'price_1TRLg1GewDN2FYAvKtUBZ0SC',
    cycleLimit: null,
  },
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { product } = req.body || {};
    const config = PRODUCTS[product];
    if (!config) return res.status(400).json({ error: 'Invalid product' });

    const origin = req.headers.origin || 'https://www.howweconvert.com.au';

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: config.priceId, quantity: 1 }],
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancelled`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      subscription_data: {
        metadata: {
          product,
          cycle_limit: config.cycleLimit ? String(config.cycleLimit) : '',
        },
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Checkout error:', err);
    return res.status(500).json({ error: err.message });
  }
};
