(function () {
  var style = document.createElement('style');
  style.textContent =
    ':root{--ink:#0F172A;--muted:#64748B;--border:#E2E8F0;--accent:#2563EB;--accent-dark:#1D4ED8;--accent-light:#EFF6FF;}' +
    '#hwc-nav{position:sticky;top:0;z-index:30;background:rgba(250,250,250,0.85);backdrop-filter:saturate(140%) blur(12px);-webkit-backdrop-filter:saturate(140%) blur(12px);border-bottom:1px solid var(--border);font-family:"Geist",-apple-system,"Segoe UI",sans-serif;}' +
    '#hwc-nav-inner{max-width:1200px;margin:0 auto;padding:16px 32px;display:flex;align-items:center;gap:32px;}' +
    '#hwc-logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;}' +
    '#hwc-logo-mark{width:30px;height:30px;background:var(--accent);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:12px;letter-spacing:-0.02em;flex-shrink:0;}' +
    '#hwc-logo-word{font-size:15px;font-weight:500;color:var(--ink);letter-spacing:-0.01em;white-space:nowrap;}' +
    '#hwc-nav-links{display:flex;gap:4px;margin-left:32px;align-items:center;flex-shrink:0;}' +
    '.hwc-nav-link{padding:8px 12px;border-radius:6px;font-size:14px;color:var(--muted);font-weight:400;text-decoration:none;display:inline-flex;align-items:center;gap:8px;background:transparent;white-space:nowrap;}' +
    '.hwc-nav-link:hover{color:var(--ink);}' +
    '.hwc-nav-link.active{color:var(--ink);font-weight:500;}' +
    '.hwc-nav-gen{color:var(--accent-dark);background:var(--accent-light);}' +
    '.hwc-nav-gen:hover{color:var(--accent-dark);}' +
    '.hwc-nav-gen-pill{font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--accent);padding:1px 5px;border:1px solid var(--accent);border-radius:10px;font-weight:500;}' +
    '#hwc-nav-right{margin-left:auto;display:flex;align-items:center;gap:14px;flex-shrink:0;}' +
    '#hwc-members-link{font-size:14px;color:var(--muted);text-decoration:none;white-space:nowrap;}' +
    '#hwc-members-link:hover{color:var(--ink);}' +
    '#hwc-cta-btn{padding:10px 18px;background:var(--ink);color:#fff;border:none;border-radius:8px;font-family:inherit;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;text-decoration:none;display:inline-block;}' +
    '#hwc-cta-btn:hover{background:#1E293B;}' +
    '@media(max-width:768px){.hwc-nav-link,#hwc-members-link{display:none!important;}#hwc-nav-inner{padding:14px 20px;gap:16px;}#hwc-nav-links{margin-left:8px;}}';
  document.head.appendChild(style);

  var path = window.location.pathname;
  function active(p) { return path === p || path === p + '.html' ? ' active' : ''; }

  var nav = document.createElement('header');
  nav.id = 'hwc-nav';
  nav.innerHTML =
    '<div id="hwc-nav-inner">' +
      '<a id="hwc-logo" href="https://www.howweconvert.com.au">' +
        '<div id="hwc-logo-mark">hwc</div>' +
        '<div id="hwc-logo-word">how we convert</div>' +
      '</a>' +
      '<nav id="hwc-nav-links">' +
        '<a class="hwc-nav-link hwc-nav-gen" href="https://app.howweconvert.com.au" target="_blank" rel="noopener">' +
          'Ad Generator <span class="hwc-nav-gen-pill">Free</span>' +
        '</a>' +
        '<a class="hwc-nav-link" href="https://how-we-convert.ghost.io" target="_blank" rel="noopener">Insights</a>' +
        '<a class="hwc-nav-link' + active('/about') + '" href="/about">About</a>' +
      '</nav>' +
      '<div id="hwc-nav-right">' +
        '<a id="hwc-members-link" href="https://portal.howweconvert.com.au/" target="_blank" rel="noopener">Members login</a>' +
        '<a id="hwc-cta-btn" href="https://calendly.com/michael-howweconvert/book-your-introduction-call" target="_blank" rel="noopener">Book an intro call</a>' +
      '</div>' +
    '</div>';

  document.body.insertBefore(nav, document.body.firstChild);
})();
