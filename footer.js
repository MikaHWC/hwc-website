(function () {
  var css =
    '.footer{background:var(--ink);color:rgba(255,255,255,0.7);padding:56px 20px 28px;border-top:1px solid rgba(255,255,255,0.08);}' +
    '.footer a{text-decoration:none;}' +
    '.footer .logo{display:flex;align-items:center;gap:10px;}' +
    '.footer .logo-mark{width:30px;height:30px;background:var(--accent);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:12px;letter-spacing:-0.02em;}' +
    '.footer .logo-word{font-size:15px;font-weight:500;color:#F8FAFC;letter-spacing:-0.01em;white-space:nowrap;}' +
    '.footer-inner{max-width:1200px;margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center;gap:36px;padding-bottom:36px;border-bottom:1px solid rgba(255,255,255,0.08);}' +
    '.footer-brand p{margin-top:16px;font-size:14px;color:rgba(255,255,255,0.6);line-height:1.7;max-width:320px;}' +
    '.footer-resources h4{font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:16px;}' +
    '.footer-links{list-style:none;padding:0;display:flex;flex-direction:column;gap:12px;align-items:center;}' +
    '.footer-links a{color:rgba(255,255,255,0.8);font-size:14px;}' +
    '.footer-links a:hover{color:#fff;}' +
    '.footer-bottom{max-width:1200px;margin:24px auto 0;display:flex;flex-direction:column;gap:12px;align-items:center;font-family:var(--font-mono);font-size:11px;letter-spacing:1.5px;text-transform:uppercase;}' +
    '.footer-bottom .copyright{color:rgba(255,255,255,0.4);}' +
    '.footer-bottom-links{display:flex;gap:20px;}' +
    '.footer-bottom-links a{color:rgba(255,255,255,0.5);}' +
    '.footer-bottom-links a:hover{color:#fff;}' +
    '@media (min-width:768px){.footer{padding:72px 32px 40px;}.footer-inner{display:grid;grid-template-columns:1.4fr 1fr;gap:64px;align-items:start;text-align:left;padding-bottom:48px;}.footer-links{align-items:flex-start;}.footer-bottom{flex-direction:row;justify-content:space-between;padding-top:24px;}}' +
    '@media (max-width:767px){.footer-brand .logo{justify-content:center;}}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  var footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML =
    '<div class="footer-inner">' +
      '<div class="footer-brand">' +
        '<a href="/" class="logo"><div class="logo-mark">hwc</div><div class="logo-word">how we convert</div></a>' +
        '<p>Paid social consultancy for Australian businesses ready to take it in house.</p>' +
      '</div>' +
      '<div class="footer-resources">' +
        '<h4>Resources</h4>' +
        '<ul class="footer-links">' +
          '<li><a href="/audit">Paid Social Audit</a></li>' +
          '<li><a href="https://app.howweconvert.com.au" target="_blank" rel="noopener">Ad Idea Generator</a></li>' +
          '<li><a href="https://learn.howweconvert.com.au/pre-flight-checklist/" target="_blank" rel="noopener">Pre-Flight Checklist</a></li>' +
          '<li><a href="https://learn.howweconvert.com.au/" target="_blank" rel="noopener">Insights</a></li>' +
          '<li><a href="/partners">Partner Program</a></li>' +
          '<li><a href="https://www.linkedin.com/in/michaelgayet/" target="_blank" rel="noopener">LinkedIn</a></li>' +
          '<li><a href="https://www.instagram.com/howweconvert/" target="_blank" rel="noopener">Instagram</a></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<div class="copyright">\u00A9 2026 How We Convert</div>' +
      '<div class="footer-bottom-links">' +
        '<a href="/terms">Terms</a>' +
        '<a href="/privacy">Privacy</a>' +
      '</div>' +
    '</div>';
  document.body.appendChild(footer);
})();
