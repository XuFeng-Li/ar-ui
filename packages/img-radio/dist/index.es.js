import React, { useState } from 'react';
import { ARCustomImg } from '@ar/customimg';
import cs from 'classnames';

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

var styles = {"radioList":"index-module_radioList__2ZIkJ","radioItem":"index-module_radioItem__31ZUB","radioItemImg":"index-module_radioItemImg__2Bl_-","radioItemDesc":"index-module_radioItemDesc__3-9cz","radioItem--active":"index-module_radioItem--active__NkNwe"};

const ARImgRadio = (_a) => {
    var props = __rest(_a, []);
    const [value, setValue] = useState(props.initialValue);
    const { style = {}, dataSource, onChanged } = props;
    const handleRadioClicked = (radioItem, index) => () => {
        if (radioItem.value === value)
            return;
        setValue(radioItem.value);
        if (onChanged) {
            onChanged(radioItem, index);
        }
    };
    return (React.createElement("ul", { className: styles.radioList, style: Object.assign({}, style) }, dataSource.map((item, index) => {
        const { img, needOssProcess = false, name } = item;
        const radioItemClass = cs({
            [styles['radioItem']]: true,
            [styles['radioItem--active']]: value && value === item.value
        });
        const ossProcess = needOssProcess ? "x-oss-process=image/resize,m_fixed,h_72,w_72" : undefined;
        return (React.createElement("li", { key: (10000 + index).toString(), className: radioItemClass, onClick: handleRadioClicked(item, index) },
            React.createElement("div", { className: styles.radioItemImg },
                React.createElement(ARCustomImg, { src: img, ossProcess: ossProcess })),
            React.createElement("div", { className: styles.radioItemDesc },
                React.createElement("span", { key: name }, name))));
    })));
};

export { ARImgRadio };
