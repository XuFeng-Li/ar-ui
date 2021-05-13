'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');

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

const ARPanelSelect = (_a) => {
    var props = __rest(_a, []);
    let tempChildren = props.children;
    if (props.dataSource && props.dataSource.length >= 1) {
        tempChildren = props.dataSource.map((ele, index) => {
            return React__default['default'].createElement(antd.Select.Option, { key: index.toString(), value: ele.value }, ele.label);
        });
    }
    return (React__default['default'].createElement("div", { style: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "flex-start"
        } },
        props.addonBefore &&
            React__default['default'].createElement("div", { style: {
                    padding: "0 5px",
                    flex: "0 0 auto"
                } }, props.addonBefore),
        React__default['default'].createElement("div", { style: { width: '100%' } },
            React__default['default'].createElement(antd.Select, { disabled: props.disabled, style: { width: '100%' }, onSelect: props.onSelect, onChange: props.onChange }, tempChildren)),
        props.addonAfter &&
            React__default['default'].createElement("div", { style: {
                    padding: "0 5px",
                    flex: "0 0 auto"
                } }, props.addonAfter)));
};

exports.ARPanelSelect = ARPanelSelect;
