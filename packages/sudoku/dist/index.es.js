import React, { useState } from 'react';

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

var styles = {"sudoku":"index-module_sudoku__3rWAB","sudoku_row":"index-module_sudoku_row__2UrbQ","sudoku_col":"index-module_sudoku_col__2QQ_K"};

const sudokoBoxWH = 44;
const limitRow = 3;
const limitColomn = 3;
const datumPoint = { row: 1, column: 1 };
const ARSudoku = (_a) => {
    var props = __rest(_a, []);
    const [location, setLocation] = useState(() => {
        var _a, _b;
        const pointOjb = Object.create({});
        pointOjb["row"] = ((_a = props.datumPoint) === null || _a === void 0 ? void 0 : _a.row) !== undefined ? props.datumPoint.row : 1;
        pointOjb["column"] = ((_b = props.datumPoint) === null || _b === void 0 ? void 0 : _b.column) !== undefined ? props.datumPoint.column : 1;
        return pointOjb;
    });
    const handleChange = (pointObj) => {
        if (pointObj.row === location.row && pointObj.column === location.column) {
            return;
        }
        setLocation(pointObj);
        if (props.onChange) {
            props.onChange(pointObj);
        }
    };
    const renderNode = () => {
        const { column: colPoint, row: rowPoint } = datumPoint;
        const theVal = location;
        const rowArr = new Array(limitRow).fill(limitRow);
        const colArr = new Array(limitColomn).fill(limitColomn);
        // 根据value中的横列index计算背景图偏移量
        // 0.1是因为bg缩小了92%。所以移动位置也要做调整，0.1是个初略值
        const offsetX = (theVal.column - colPoint + 0.1) * sudokoBoxWH + 'px';
        const offsetY = (theVal.row - rowPoint + 0.1) * sudokoBoxWH + 0.1 * sudokoBoxWH + 'px';
        const bgPos = {
            backgroundPositionX: offsetX,
            backgroundPositionY: offsetY
        };
        return (React.createElement("div", { className: styles.sudoku, style: Object.assign({}, bgPos) }, rowArr.map((item, index) => {
            return (React.createElement("div", { className: styles["sudoku_row"], key: item + index }, colArr.map((itemCol, indexCol) => {
                return (React.createElement("div", { className: styles["sudoku_col"], key: itemCol + indexCol, onClick: () => {
                        const pointObj = Object.create({});
                        pointObj["column"] = indexCol;
                        pointObj["row"] = index;
                        handleChange(pointObj);
                    } }));
            })));
        })));
    };
    return renderNode();
};

export { ARSudoku };
