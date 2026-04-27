(function () {
  var style = document.createElement('style');
  style.textContent = [
    '#hwc-nav{position:sticky;top:0;z-index:50;background:rgba(250,250,250,0.92);backdrop-filter:saturate(140%) blur(12px);-webkit-backdrop-filter:saturate(140%) blur(12px);border-bottom:1px solid #E2E8F0;font-family:"Geist",-apple-system,"Segoe UI",sans-serif;}',
    '#hwc-nav-inner{max-width:1100px;margin:0 auto;padding:0 32px;height:60px;display:flex;align-items:center;gap:8px;}',
    '#hwc-logo{display:inline-flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;margin-right:24px;}',
    '#hwc-logo-mark{width:30px;height:30px;background:#0F172A;border-radius:7px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:11px;letter-spacing:-0.02em;flex-shrink:0;}',
    '#hwc-logo-word{font-size:15px;font-weight:500;color:#0F172A;letter-spacing:-0.01em;white-space:nowrap;}',
    '.hwc-nav-link{padding:7px 11px;border-radius:6px;font-size:14px;color:#64748B;text-decoration:none;white-space:nowrap;transition:color 0.15s;}',
    '.hwc-nav-link:hover{color:#0F172A;}',
    '.hwc-nav-link.active{color:#0F172A;font-weight:500;}',
    '.hwc-nav-free{display:inline-flex;align-items:center;gap:7px;padding:7px 11px;border-radius:6px;font-size:14px;color:#1D4ED8;background:#EFF6FF;text-decoration:none;white-space:nowrap;}',
    '.hwc-nav-free-pill{font-family:"Geist Mono",monospace;font-size:9px;letter-spacing:1px;text-transform:uppercase;color:#2563EB;padding:1px 5px;border:1px solid #2563EB;border-radius:10px;font-weight:500;}',
    '#hwc-nav-right{margin-left:auto;display:flex;align-items:center;gap:10px;flex-shrink:0;}',
    '#hwc-members-link{font-size:13px;color:#64748B;text-decoration:none;padding:7px 10px;white-space:nowrap;}',
    '#hwc-members-link:hover{color:#0F172A;}',
    '#hwc-cta-btn{padding:9px 16px;background:#0F172A;color:#fff;border:none;border-radius:7px;font-family:"Geist",-apple-system,sans-serif;font-size:13px;font-weight:500;cursor:pointer;white-space:nowrap;text-decoration:none;display:inline-block;}',
    '#hwc-cta-btn:hover{background:#1E293B;}',
    '#hwc-nav-links{display:flex;align-items:center;gap:2px;}',
    '@media(max-width:768px){.hwc-nav-link,.hwc-nav-free,#hwc-members-link{display:none!important;}#hwc-nav-inner{padding:0 20px;}}'
  ].join('');
  document.head.appendChild(style);

  var path = window.location.pathname;

  function isActive(page) {
    if (page === 'home') return path === '/' || path === '/index.html';
    return path.indexOf(page) !== -1;
  }

  var nav = document.createElement('header');
  nav.id = 'hwc-nav';
  nav.innerHTML = '<div id="hwc-nav-inner">' +
    '<a id="hwc-logo" href="/">' +
      '<div id="hwc-logo-mark">hwc</div>' +
      '<div id="hwc-logo-word">how we convert</div>' +
    '</a>' +
    '<nav id="hwc-nav-links">' +
      '<a class="hwc-nav-link' + (isActive('about') ? ' active' : '') + '" href="/about">About</a>' +
      '<a class="hwc-nav-link" href="https://learn.howweconvert.com.au">Blog</a>' +
      '<a class="hwc-nav-link" href="https://learn.howweconvert.com.au/courses">Courses</a>' +
      '<a class="hwc-nav-link' + (isActive('partner') ? ' active' : '') + '" href="/partners">Partner program</a>' +
      '<a class="hwc-nav-free" href="https://app.howweconvert.com.au">' +
        'Ad Generator <span class="hwc-nav-free-pill">Free</span>' +
      '</a>' +
    '</nav>' +
    '<div id="hwc-nav-right">' +
      '<a id="hwc-members-link" href="https://learn.howweconvert.com.au/#/portal">Members login</a>' +
      '<a id="hwc-cta-btn" href="https://calendly.com/michael-howweconvert/book-your-introduction-call" target="_blank" rel="noopener">Book an intro call</a>' +
    '</div>' +
  '</div>';

  document.body.insertBefore(nav, document.body.firstChild);
})();
