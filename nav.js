(function () {
  var style = document.createElement('style');
  style.textContent = [
    '#hwc-nav{position:sticky;top:0;z-index:50;background:rgba(250,250,250,0.95);backdrop-filter:saturate(140%) blur(12px);-webkit-backdrop-filter:saturate(140%) blur(12px);border-bottom:1px solid #E2E8F0;font-family:"Geist",-apple-system,"Segoe UI",sans-serif;}',
    '#hwc-nav-inner{max-width:1280px;margin:0 auto;padding:0 32px;height:64px;display:flex;align-items:center;gap:8px;}',
    '#hwc-logo{display:inline-flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;margin-right:16px;}',
    '#hwc-logo-mark{width:32px;height:32px;background:#0F172A;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:12px;letter-spacing:-0.02em;flex-shrink:0;}',
    '#hwc-logo-word{font-size:15px;font-weight:500;color:#0F172A;letter-spacing:-0.01em;white-space:nowrap;}',
    '.hwc-nav-link{padding:8px 12px;border-radius:6px;font-size:14px;color:#64748B;text-decoration:none;white-space:nowrap;transition:color 0.15s;}',
    '.hwc-nav-link:hover{color:#0F172A;}',
    '.hwc-nav-free{display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border-radius:8px;font-size:14px;color:#1D4ED8;background:#EFF6FF;text-decoration:none;white-space:nowrap;border:1px solid #BFDBFE;}',
    '.hwc-nav-free-pill{font-size:10px;letter-spacing:0.5px;text-transform:uppercase;color:#2563EB;padding:1px 6px;border:1px solid #BFDBFE;border-radius:10px;font-weight:500;font-family:inherit;}',
    '#hwc-nav-right{margin-left:auto;display:flex;align-items:center;gap:12px;flex-shrink:0;}',
    '#hwc-members-link{font-size:14px;color:#64748B;text-decoration:none;padding:8px 12px;white-space:nowrap;}',
    '#hwc-members-link:hover{color:#0F172A;}',
    '#hwc-cta-btn{padding:10px 18px;background:#0F172A;color:#fff;border:none;border-radius:8px;font-family:"Geist",-apple-system,sans-serif;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;text-decoration:none;display:inline-block;}',
    '#hwc-cta-btn:hover{background:#1E293B;}',
    '#hwc-nav-links{display:flex;align-items:center;gap:4px;}',
    '@media(max-width:768px){.hwc-nav-link,#hwc-members-link{display:none!important;}#hwc-nav-inner{padding:0 20px;}}'
  ].join('');
  document.head.appendChild(style);

  var nav = document.createElement('header');
  nav.id = 'hwc-nav';
  nav.innerHTML = '<div id="hwc-nav-inner">' +
    '<a id="hwc-logo" href="/">' +
      '<div id="hwc-logo-mark">hwc</div>' +
      '<div id="hwc-logo-word">how we convert</div>' +
    '</a>' +
    '<nav id="hwc-nav-links">' +
      '<a class="hwc-nav-free" href="https://app.howweconvert.com.au">' +
        'Ad Generator <span class="hwc-nav-free-pill">FREE</span>' +
      '</a>' +
      '<a class="hwc-nav-link" href="https://learn.howweconvert.com.au">Insights</a>' +
      '<a class="hwc-nav-link" href="/about">About</a>' +
    '</nav>' +
    '<div id="hwc-nav-right">' +
      '<a id="hwc-members-link" href="https://learn.howweconvert.com.au/#/portal">Members login</a>' +
      '<a id="hwc-cta-btn" href="https://calendly.com/michael-howweconvert/book-your-introduction-call" target="_blank" rel="noopener">Book an intro call</a>' +
    '</div>' +
  '</div>';

  document.body.insertBefore(nav, document.body.firstChild);
})();
