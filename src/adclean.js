;(function (document, window, hostname, blankFunction, addEventListener, each) {
  addEventListener('DOMContentLoaded', removeAd);
  addEventListener('Load', removeAd);

  // 根据当前访问域名判定要使用的代码
  function removeAd () {
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

      case 'yimuhe.com':
      case 'www.yimuhe.com':
        showYimuheCode();
        break;
    }
  }

  function showYimuheCode () {
    var yzm = document.getElementById('yzm');
    if (yzm) yzm.style.display = 'block';
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

  function appendStyle (cssText) {
    var s = document.createElement('style');
    s.textContent = cssText;
    document.head.appendChild(s);
  }

  // 移除谷歌广告的空格
  function removeGoogleAds () {
    appendStyle('.adsbygoogle{display:none !important}');
    each.call(document.getElementsByClassName('adsbygoogle'), function (b) {
      b.parentNode.removeChild(b);
    });
  }
})(document, window, location.hostname,
  function /* blank function */() {},
  addEventListener, Array.prototype.forEach
);
