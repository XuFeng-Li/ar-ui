import React from 'react';
import { Card, Avatar } from 'antd';

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

var styles = {};

const { Meta } = Card;
const ARCard = (_a) => {
    var props = __rest(_a, []);
    const { style, children, meta } = props, other = __rest(props, ["style", "children", "meta"]);
    const _b = meta || {}, { avatar } = _b, metaProps = __rest(_b, ["avatar"]);
    return (React.createElement("div", { className: styles.cardIndex, style: Object.assign({}, style) },
        React.createElement(Card, Object.assign({}, other, { cover: React.createElement("img", { alt: "example", src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" }) }),
            meta &&
                React.createElement(Meta, Object.assign({ avatar: React.createElement(Avatar, { src: avatar }) }, metaProps)),
            children)));
};

export { ARCard };