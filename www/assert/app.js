(function (document, window, alert, navigator) {
    function hasTouch() {
        return (('ontouchstart' in window) ||       // html5 browsers
                (navigator.maxTouchPoints > 0) ||   // future IE
                (navigator.msMaxTouchPoints > 0));  // current IE10
    }

    var $copy = document.getElementById('copy');
    var clipboard = new window.Clipboard($copy, {
        text: function(trigger) {
            return $copy.href;
        }
    });

    $copy.addEventListener('click', function (e) {
        e.preventDefault();
    });

    clipboard.on('success', function () {
        alert('复制成功!');
    }).on('error', function () {
        var action = hasTouch() ? '长按' : '右键';
        alert('复制失败，请' + action + '该链接然后选择复制！');
    });
})(document, window, alert, navigator);