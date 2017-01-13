;(function (document, window, hostname, blankFunction) {
  var each = Array.prototype.forEach;

  // 根据当前访问域名判定要使用的代码
  switch (hostname) {
    case 'm.lwxs.com':
      removeTanx();
      removeMethods(['qijixs_top', 'qijixs_middle', 'qijixs_bottom']);
      break;

    case 'm.33yq.com':
      removeTanx();
      removeMethods(['nryhf', 'qijixs_middle', 'qijixs_bottom', 'qijixs_dingbuxuanfu']);
      break;

    case 'm.69shu.com':
      removeGoogleAds();
      break;
  }

  // 移除 tanx.com 广告的展位块
  function removeTanx () {
    document.body.style.marginTop = 0;
    var tanx = document.querySelectorAll('div>a[id^="tanx"]');
    each.call(tanx, function (t) {
      var parentStyle = t.parentNode.style;
      if (parentStyle.cssText.indexOf('margin') != -1)
        parentStyle.display = "none";
    });

    window.qijixs_bottom = function () {};
  }

  // 移除函数，或禁止建立
  function removeMethods (methods, obj) {
    obj = obj || window;

    each.call(methods, function (method) {
      if (method in obj) {
        obj[method] = blankFunction;
      } else {
        Object.defineProperty(obj, method, {
          value: blankFunction
        });
      }
    });
  }

  // 移除谷歌广告的空格
  function removeGoogleAds () {
    var s = document.createElement('style');
    s.textContent = '.adsbygoogle{display:none !important}';
    document.head.appendChild(s);

    each.call(document.getElementsByClassName('adsbygoogle'), function (b) {
      b.parentNode.removeChild(b);
    });
  }
})(document, window, location.hostname,
  function /* blank function */() {}
);
