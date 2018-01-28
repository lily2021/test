//兼容处理
;
(function () {
    function o() {
        document.documentElement.style.fontSize = (document.documentElement.clientWidth > 2048 ? 2048 : document.documentElement.clientWidth) / 12 + "px"
    }
    var e = null;
    window.addEventListener("resize", function () {
        clearTimeout(e), e = setTimeout(o, 300)
    }, !1), o()
})(window);

var elementStyle = document.createElement('div').style
var vendor = (function () {
    let transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    }

    for (var key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key
        }
    }

    return false
})()
function prefixStyle(style) {
    if (vendor === false) {
        return false
    }

    if (vendor === 'standard') {
        return style
    }

    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    console.log(val)
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}


