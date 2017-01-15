;(function (document, window, hostname, blankFunction, addEventListener, each) {
  addEventListener('Load', removeAd);
  addEventListener('DOMContentLoaded', removeAd);
  if (document.readyState == 'complete') {
    removeAd();
  }


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

      // 怀疑网站被人搞了
      case 'mianhuatang.la':
        location.host = 'www.mianhuatang.la';
        break;

      // 电脑版
      case 'www.mianhuatang.la':
        mianhuatang();
        break;

      // 手机版
      case 'm.mianhuatang.la':
        mianhuatang_mobile();
        break;
    }
  }

  function mianhuatang_content () {
    var $content = document.getElementsByClassName('content')[0];
    each.call($content.getElementsByTagName('script'), removeElement);
    $content.innerHTML = $content.innerHTML
      .replace(/[\[\(（].*?(广告|棉花糖|mianhuatang).*?[\]\)）]/gi, '')
      .replace(/『(.)』/gi, '$1');
    return $content;
  }

  function mianhuatang () {
    each.call(document.querySelectorAll('.top_ad, .tuijian, .footer_link, .readshujia'), removeElement);
    each.call(mianhuatang_content().querySelectorAll('a,p,div,strong'), removeElement);
  }

  function mianhuatang_mobile () {
    mianhuatang_content();
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
      if (parentStyle.cssText.indexOf('margin') != -1) {
        parentStyle.display = "none";
      } else {
        removeElement(t);
      }
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
    each.call(document.getElementsByClassName('adsbygoogle'), removeElement);
  }

  function removeElement (el) {
    if (el) el.parentNode.removeChild(el);
  }
})(document, window, location.hostname,
  function /* blank function */() {},
  addEventListener, Array.prototype.forEach
);
