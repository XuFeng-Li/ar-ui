'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const tempDefaultImg = "https://img.asman.com.cn/assets/1567388823451_58545.png";
const ARCustomImg = (_a) => {
    // const [flag,setFlag] = useState(false);
    var { defaultImg = tempDefaultImg } = _a, props = __rest(_a, ["defaultImg"]);
    const onError = () => {
        // if (flag) return;
        // setFlag(true);
    };
    const { src, ossProcess, width, height } = props, others = __rest(props, ["src", "ossProcess", "width", "height"]);
    let imgSrc = defaultImg;
    if (src) {
        imgSrc = `${src}?${ossProcess}`;
    }
    return (React__default['default'].createElement("img", Object.assign({ src: imgSrc, alt: "img not found", onError: onError, defaultValue: defaultImg }, others, { width: width, height: height })));
};

exports.ARCustomImg = ARCustomImg;
