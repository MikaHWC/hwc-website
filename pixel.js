/* HWC Meta Pixel. Single source of truth, loaded in <head> of every page.
   Dataset ID 1562607642265051. Client side events only.
   Server side events (Lead, Purchase, Schedule) fire via CAPI from hwc-webhook2.
   No event fires on both sides, so no deduplication is required here. */
(function () {
  var PIXEL_ID = '1562607642265051';

  // Meta pixel bootstrap
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');

  function eid() {
    try { return crypto.randomUUID(); }
    catch (e) { return 'e-' + Date.now() + '-' + Math.random().toString(36).slice(2); }
  }

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView', {}, { eventID: eid() });

  var path = (location.pathname || '').toLowerCase();

  // Audit offer viewed
  if (path.indexOf('/audit') === 0) {
    fbq('track', 'ViewContent', {
      content_name: 'Paid Social Audit',
      content_category: 'audit'
    }, { eventID: eid() });
  }

  // Off domain CTA clicks (delegated, capture phase)
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a') : null;
    if (!a || !a.href) return;
    var href = a.href.toLowerCase();

    // Audit intake and payment on Tally (form LZNEKy)
    if (href.indexOf('tally.so/r/lzneky') !== -1) {
      fbq('track', 'InitiateCheckout', {
        content_name: 'Paid Social Audit',
        value: 950,
        currency: 'AUD'
      }, { eventID: eid() });
    }

    // Intro call click on Calendly. Audience signal only.
    // The real Schedule conversion fires server side from the Calendly webhook.
    if (href.indexOf('calendly.com/michael-howweconvert') !== -1) {
      fbq('trackCustom', 'ClickBookCall', {}, { eventID: eid() });
    }
  }, true);
})();
