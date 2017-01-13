// This file will be placed on:
// https://hosts.jixun.moe/adclean/loader.js
// server will redirect triffic to this file.

(function (window, document) {
  // 15 days in ms: 1296000000
  // Force a new version every 15 days
  if (!window.__AD_CLEAR__) {
    window.__AD_CLEAR__ = 1;

    var script = document.createElement('script');
    script.src = 'https://hosts.jixun.moe/adclean/adclean.js?v' + (~~((+new Date()) / 1296000000));
    document.head.appendChild(script);
  }
})(window, document);
