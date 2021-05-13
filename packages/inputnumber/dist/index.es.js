import React from 'react';
import { InputNumber } from 'antd';

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

var styles = {"index":"index-module_index__2mBCy","addonBefore":"index-module_addonBefore__1htmI","inputSelf":"index-module_inputSelf__3gPqZ","addonAfter":"index-module_addonAfter__3nkoT"};

const ARInputNumber = (_a) => {
    var props = __rest(_a, []);
    const { style = {}, addonBefore, addonAfter, onStep } = props, other = __rest(props, ["style", "addonBefore", "addonAfter", "onStep"]);
    const { size = 'middle' } = other;
    return (React.createElement("div", { className: styles.index, style: Object.assign(Object.assign({}, style), { height: 'small' === size ? '24px' : (('large' === size) ? '40px' : '32px') }) },
        !!addonBefore &&
            React.createElement("div", { className: styles.addonBefore },
                React.createElement("span", { style: {
                        fontSize: 'small' === size ? '14px' : (('large' === size) ? '16px' : '14px'),
                        fontWeight: 400,
                    } }, addonBefore)),
        React.createElement(InputNumber, Object.assign({ style: {
                width: '100%'
            } }, other, { onStep: (value, info) => {
                if (onStep) {
                    const infoRes = Object.create({});
                    infoRes['type'] = info.type;
                    infoRes['offset'] = info.offset;
                    onStep(value, infoRes);
                }
            } })),
        !!addonAfter &&
            React.createElement("div", { className: styles.addonBefore },
                React.createElement("span", { style: {
                        fontSize: 'small' === size ? '14px' : (('large' === size) ? '16px' : '14px'),
                        fontWeight: 400,
                    } }, addonAfter))));
};

export { ARInputNumber };
