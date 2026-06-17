(function () {
  var css =
    '.nav{position:sticky;top:0;z-index:50;background:rgba(250,250,250,0.92);backdrop-filter:saturate(140%) blur(12px);-webkit-backdrop-filter:saturate(140%) blur(12px);border-bottom:1px solid var(--border);}' +
    '.nav a{text-decoration:none;}' +
    '.nav-inner{max-width:1200px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;gap:16px;}' +
    '.logo{display:flex;align-items:center;gap:10px;flex-shrink:0;}' +
    '.logo-mark{width:30px;height:30px;background:var(--accent);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:12px;letter-spacing:-0.02em;}' +
    '.logo-word{font-size:15px;font-weight:500;color:var(--ink);letter-spacing:-0.01em;white-space:nowrap;}' +
    '.nav-links{margin-left:24px;display:flex;gap:4px;align-items:center;}' +
    '.nav-link{padding:8px 12px;border-radius:6px;font-size:14px;color:var(--muted);display:inline-flex;align-items:center;gap:8px;white-space:nowrap;}' +
    '.nav-link:hover{color:var(--ink);}' +
    '.nav-link.active{color:var(--ink);font-weight:500;}' +
    '.nav-gen{color:var(--accent-dark);background:var(--accent-bg);}' +
    '.nav-gen-pill{font-family:var(--font-mono);font-size:9px;letter-spacing:1px;text-transform:uppercase;padding:1px 5px;border:1px solid var(--accent);border-radius:10px;color:var(--accent);}' +
    '.nav-right{margin-left:auto;display:flex;align-items:center;gap:14px;}' +
    '.nav-members{font-size:14px;color:var(--muted);white-space:nowrap;}' +
    '.nav-members:hover{color:var(--ink);}' +
    '.nav-cta{padding:10px 18px;background:var(--ink);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;white-space:nowrap;}' +
    '.nav-cta:hover{background:var(--ink-soft);}' +
    '.hamburger{display:none;background:none;border:none;width:38px;height:38px;align-items:center;justify-content:center;margin-left:auto;cursor:pointer;}' +
    '.hamburger span{display:block;width:22px;height:1.5px;background:var(--ink);position:relative;}' +
    '.hamburger span::before,.hamburger span::after{content:"";position:absolute;left:0;width:22px;height:1.5px;background:var(--ink);}' +
    '.hamburger span::before{top:-7px;}' +
    '.hamburger span::after{top:7px;}' +
    '.mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:var(--bg);z-index:100;padding:80px 24px 32px;flex-direction:column;gap:4px;}' +
    '.mobile-menu.open{display:flex;}' +
    '.mobile-menu-close{position:absolute;top:18px;right:18px;background:none;border:none;width:38px;height:38px;font-size:24px;color:var(--ink);cursor:pointer;}' +
    '.mobile-menu .nav-link{padding:14px 16px;font-size:16px;border-radius:8px;}' +
    '.mobile-menu .nav-cta{margin-top:20px;padding:14px 18px;text-align:center;font-size:15px;}' +
    '.mobile-menu .nav-members{padding:14px 16px;font-size:15px;}' +
    '@media (min-width:768px){.nav-inner{padding:16px 32px;gap:32px;}}' +
    '@media (max-width:767px){.nav-links,.nav-right{display:none;}.hamburger{display:flex;}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var path = window.location.pathname;
  function active(p) {
    return (path === p || path === p + '/' || path === p + '.html') ? ' active' : '';
  }

  var linksMarkup =
    '<a href="https://app.howweconvert.com.au" target="_blank" rel="noopener" class="nav-link nav-gen">Ad Generator <span class="nav-gen-pill">Free</span></a>' +
    '<a href="https://learn.howweconvert.com.au/" target="_blank" rel="noopener" class="nav-link">Insights</a>' +
    '<a href="/creative" class="nav-link' + active('/creative') + '">Creative Production</a>' +
    '<a href="/about" class="nav-link' + active('/about') + '">About</a>';

  var header = document.createElement('header');
  header.className = 'nav';
  header.innerHTML =
    '<div class="nav-inner">' +
      '<a href="/" class="logo">' +
        '<div class="logo-mark">hwc</div>' +
        '<div class="logo-word">how we convert</div>' +
      '</a>' +
      '<nav class="nav-links">' + linksMarkup + '</nav>' +
      '<div class="nav-right">' +
        '<a href="https://portal.howweconvert.com.au/" target="_blank" rel="noopener" class="nav-members">Members login</a>' +
        '<a href="https://calendly.com/michael-howweconvert/book-your-introduction-call" target="_blank" rel="noopener" class="nav-cta">Book an intro call</a>' +
      '</div>' +
      '<button class="hamburger" aria-label="Open menu"><span></span></button>' +
    '</div>';

  var menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.innerHTML =
    '<button class="mobile-menu-close" aria-label="Close menu">\u00D7</button>' +
    linksMarkup +
    '<a href="https://portal.howweconvert.com.au/" target="_blank" rel="noopener" class="nav-members">Members login</a>' +
    '<a href="https://calendly.com/michael-howweconvert/book-your-introduction-call" target="_blank" rel="noopener" class="nav-cta">Book an intro call</a>';

  document.body.insertBefore(header, document.body.firstChild);
  header.parentNode.insertBefore(menu, header.nextSibling);

  header.querySelector('.hamburger').addEventListener('click', function () {
    menu.classList.add('open');
  });
  menu.querySelector('.mobile-menu-close').addEventListener('click', function () {
    menu.classList.remove('open');
  });
  Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) {
    a.addEventListener('click', function () { menu.classList.remove('open'); });
  });
})();
