'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var util = require('@ar/util');

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

const isZero = (val) => {
    if (val === undefined)
        return false;
    return `${val}` === '0';
};
const SquareMeterInfo = (_a) => {
    var props = __rest(_a, []);
    const { info } = props;
    return (React__default['default'].createElement("span", null,
        info || '---',
        "\u00A0",
        info && '㎡'));
};
const defaultKayMap = {
    bedroomNum: 'bedroomNum',
    livingRoomNum: 'livingRoomNum',
    kitchenNum: 'kitchenNum',
    bathroomNum: 'bathroomNum',
    balconyNum: 'balconyNum'
};
const HouseType = (_a) => {
    var props = __rest(_a, []);
    const { data, map = {} } = props;
    if (!data || typeof data === 'object') {
        return (React__default['default'].createElement("span", null));
    }
    const keyMap = Object.assign(Object.assign({}, defaultKayMap), map);
    const bedroom = data[keyMap.bedroomNum] || isZero(data[keyMap.bedroomNum]) ? data[keyMap.bedroomNum] : '--';
    const livingRoom = data[keyMap.livingRoomNum] || isZero(data[keyMap.livingRoomNum]) ? data[keyMap.livingRoomNum] : '--';
    const kitchen = data[keyMap.kitchenNum] || isZero(data[keyMap.kitchenNum]) ? data[keyMap.kitchenNum] : '--';
    const bathroom = data[keyMap.bathroomNum] || isZero(data[keyMap.bathroomNum]) ? data[keyMap.bathroomNum] : '--';
    const balconyNum = data[keyMap.balconyNum] || isZero(data[keyMap.balconyNum]) ? data[keyMap.balconyNum] : '--';
    return (React__default['default'].createElement("span", null, `${bedroom}室${livingRoom}厅${kitchen}厨${bathroom}卫${balconyNum}阳台`));
};
const defaultAreaKayMap = {
    provinceName: 'provinceName',
    cityName: 'cityName',
    districtName: 'districtName'
};
const defaultAreaKayMapTwo = {
    provinceName: 'province',
    cityName: 'city',
    districtName: 'district'
};
const AreaInfo = (_a) => {
    var props = __rest(_a, []);
    const { data, map = {}, address, mode = 'keyNoName' } = props;
    let keyMap = Object.assign(Object.assign({}, defaultAreaKayMap), map);
    if (mode === 'keyNoName') {
        keyMap = Object.assign(Object.assign({}, defaultAreaKayMapTwo), map);
    }
    const province = data[keyMap.provinceName] ? data[keyMap.provinceName] : '--';
    const city = data[keyMap.cityName] ? data[keyMap.cityName] : '--';
    const district = data[keyMap.districtName] ? data[keyMap.districtName] : ''; // 区可能没有
    return (React__default['default'].createElement("span", null,
        `${province}${city}${district}`,
        "\u00A0\u00A0",
        address || ''));
};
const UpLoadInfo = (_a) => {
    var props = __rest(_a, []);
    const { noHref, style = {} } = props;
    let { data } = props;
    if (!data || !data.length)
        return null;
    if (typeof data === 'string')
        data = [data];
    return (React__default['default'].createElement(React.Fragment, null, data.map((ele, i) => {
        let extendStyle = Object.create({});
        if (i) {
            extendStyle.marginLeft = '15px';
        }
        extendStyle = Object.assign(Object.assign({}, extendStyle), style);
        if (noHref) {
            extendStyle.target = '_blank';
        }
        return (React__default['default'].createElement("a", { href: noHref ? 'javascript:void(0);' : ele, key: -i, rel: "noopener noreferrer" },
            React__default['default'].createElement("img", { src: ele, alt: 'pic', width: '86px', style: Object.assign({}, extendStyle) })));
    })));
};
const VideoList = (_a) => {
    var props = __rest(_a, []);
    const { style = {} } = props;
    let { list } = props;
    if (!list || !list.length)
        return null;
    if (typeof list === 'string')
        list = [list];
    return (React__default['default'].createElement(React.Fragment, null, list.map((ele, i) => {
        let extendStyle = Object.create({});
        extendStyle.width = 160;
        extendStyle.height = 120;
        extendStyle.style = Object.create({});
        if (i) {
            extendStyle.style.marginLeft = '15px';
        }
        extendStyle = Object.assign(Object.assign({}, extendStyle), style);
        return (React__default['default'].createElement("video", { key: ele, style: Object.assign({ display: 'inline-block' }, extendStyle), src: ele, controls: true }));
    })));
};
const MainPic = (_a) => {
    var props = __rest(_a, []);
    const { style = {}, url, isPrivate } = props;
    const { width = 100, height = 86 } = style;
    const w = `${width}`.replace(/px/, '');
    const h = `${height}`.replace(/px/, '');
    if (url && isPrivate) {
        return (React__default['default'].createElement("a", { href: url, rel: "noopener noreferrer", target: "_blank" },
            React__default['default'].createElement("img", { src: `${url}`, alt: 'pic', height: '100px', width: '86px', style: Object.assign({}, style) })));
    }
    if (url) {
        return (React__default['default'].createElement("a", { href: url, rel: "noopener noreferrer", target: "_blank" },
            React__default['default'].createElement("img", { src: `${url}?x-oss-process=image/resize,m_fixed,h_${h},w_${w}`, alt: 'pic', height: '100px', width: '86px', style: Object.assign({}, style) })));
    }
    return (React__default['default'].createElement("a", { href: 'javascript:void(0);', rel: "noopener noreferrer", target: "_blank" },
        React__default['default'].createElement("img", { src: 'https://asman-img.oss-cn-hangzhou.aliyuncs.com/noPic_0e7bffac7958f603a8b37fe3cda07499.png', alt: 'pic', height: '100px', width: '86px', style: Object.assign({}, style) })));
};
const UploadPreview = (_a) => {
    var props = __rest(_a, []);
    const { value, height } = props;
    // eslint-disable-next-line prefer-const
    let { list = [], params = {}, style = {}, innerStyle = {} } = props, rest = __rest(props, ["list", "params", "style", "innerStyle"]);
    if (!list || !list.length) {
        list = value;
    }
    if (!list)
        return null;
    const showImagePreview = () => {
        const tempWindow = window;
        // eslint-disable-next-line no-underscore-dangle
        tempWindow['g_app']['_store'].dispatch({
            type: 'global/showImagePreviewVisiable',
            payload: { list, params }
        });
        // eslint-disable-next-line no-underscore-dangle
        // window.g_app._store.dispatch({
        //   type: 'global/showImagePreviewVisiable',
        //   payload: {list, params}
        // });
    };
    innerStyle = height == null ? Object.assign({}, innerStyle) : Object.assign(Object.assign({}, innerStyle), { height });
    return (React__default['default'].createElement("div", Object.assign({}, rest, { style: Object.assign({}, style), className: 'poi tc', onClick: () => {
            showImagePreview();
        } }),
        params.type === 'video' ? React__default['default'].createElement(VideoList, { list: list[0], style: Object.assign({}, innerStyle) }) :
            React__default['default'].createElement(UpLoadInfo, { style: Object.assign({}, innerStyle), noHref: true, data: list[0] }),
        React__default['default'].createElement("div", { className: 'bc tc' },
            "\u5171",
            list.length,
            params.type === 'video' ? '个视频' : '张图片')));
};
const UrlLink = (_a) => {
    var props = __rest(_a, []);
    let { list } = props;
    if (!list || list.length <= 0)
        return null;
    if (typeof list === 'string') {
        list = [list];
    }
    // eslint-disable-next-line consistent-return
    return (React__default['default'].createElement(React.Fragment, null, list.map(ele => {
        const url = util.simplifyFileName(ele, 1);
        return React__default['default'].createElement("div", null,
            React__default['default'].createElement("a", { href: ele, rel: "noopener noreferrer", target: "_blank" }, url));
    })));
};
const BlankLink = (_a) => {
    var props = __rest(_a, []);
    const { href, title } = props;
    return React__default['default'].createElement("a", { href: href, rel: "noopener noreferrer", target: "_blank" }, title || href);
};
const TitleInfo = (_a) => {
    var props = __rest(_a, []);
    const { len, info } = props, rest = __rest(props, ["len", "info"]);
    let tit = info;
    if (info.length && len && info.length >= len) {
        tit = `${tit.substring(0, len)}...`;
    }
    return React__default['default'].createElement("span", Object.assign({}, rest, { title: info }), tit);
};
const BuleWrapper = (_a) => {
    var props = __rest(_a, []);
    const { info, text, color = '#0066FF' } = props;
    if (!info)
        return null;
    return React__default['default'].createElement("span", null,
        React__default['default'].createElement("span", { style: { color } }, info),
        text);
};
const Bule = (_a) => {
    var props = __rest(_a, []);
    const { info, color = '#0066FF' } = props;
    if (!info)
        return null;
    return React__default['default'].createElement("span", { style: { color } }, info);
};
const Red = (_a) => {
    var props = __rest(_a, []);
    const { info, color = '#FF0000' } = props;
    if (!info)
        return null;
    return React__default['default'].createElement("span", { style: { color } }, info);
};
const getColorWrapper = (props) => {
    const { info } = props;
    return info ? React__default['default'].createElement(BuleWrapper, Object.assign({}, props)) : null;
};
const ShowMoreInfo = (props) => {
    const { info, len } = props;
    let initValue = '';
    let needSubstring = false;
    if (info && info.length > len) {
        initValue = `${info.substring(0, len)}...`;
        needSubstring = true;
    }
    else {
        initValue = info || '';
    }
    const [showInfo, setShowInfo] = React.useState(initValue);
    const isShowAll = () => showInfo === info;
    const showMore = () => {
        setShowInfo(isShowAll() ? initValue : (info || ''));
    };
    return (React__default['default'].createElement("span", null,
        showInfo,
        " ",
        needSubstring ?
            React__default['default'].createElement("span", { className: 'likeA', onClick: () => showMore() }, isShowAll() ? '收起' : '更多') : null,
        " "));
};
/**
 * xx幢xxx单元xxxx
 * @param {*} props
 */
const HouseDesc = (_a) => {
    var props = __rest(_a, []);
    const { buildingNo, unitNo, roomNo } = props;
    return (React__default['default'].createElement("span", null, `${buildingNo || '--'}幢${unitNo || '--'}单元${roomNo || '--'}室`));
};
const SomeRed = (props) => {
    const { info, keyWord } = props;
    if (!info || !keyWord)
        return info;
    const aTrimkey = util.trimSpace(keyWord);
    const subIndex = info.indexOf(aTrimkey);
    if (subIndex === -1)
        return info;
    const start = info.substring(0, subIndex);
    const end = info.substring(subIndex + aTrimkey.length);
    return (React__default['default'].createElement("span", null,
        start,
        React__default['default'].createElement("span", { style: { color: 'red' } }, keyWord),
        end));
};
const LRInfo = (_a) => {
    var props = __rest(_a, []);
    const { title, info, width, hasColon = true, onClick, len } = props;
    let { titleStyle = {} } = props;
    if (len) {
        titleStyle = Object.assign(Object.assign({}, titleStyle), { width: `${30 + 12 * len}px`, textAlign: 'right' });
    }
    const titleProps = {
        style: width ? Object.assign(Object.assign({}, titleStyle), { width, textAlign: 'right' }) : Object.assign({}, titleStyle)
    };
    let infoProps = {};
    if (util.isFn(onClick)) {
        infoProps = { onClick };
    }
    if (!title) {
        return React__default['default'].createElement("div", Object.assign({}, infoProps), info);
    }
    return (React__default['default'].createElement("div", { className: 'df' },
        React__default['default'].createElement("div", Object.assign({ className: 'g0' }, titleProps),
            title || ' -- ',
            "\u00A0",
            hasColon ? ':' : '',
            " \u00A0"),
        React__default['default'].createElement("div", Object.assign({ className: 'df flex1' }, infoProps), info !== 0 ? info || '---' : info)));
};
const BuildingArea = (_a) => {
    var props = __rest(_a, []);
    const { data } = props;
    const { buildingName, houseCode, buildingNo, unitNo, roomNo } = data || {};
    return React__default['default'].createElement("span", null,
        `${buildingName || '--'}${houseCode ? `${houseCode}户型` : ''}`,
        React__default['default'].createElement("br", null),
        " ",
        buildingNo ? `${buildingNo || '--'}栋${unitNo || '--'}单元${roomNo || '--'}室` : '');
};

exports.AreaInfo = AreaInfo;
exports.BlankLink = BlankLink;
exports.BuildingArea = BuildingArea;
exports.Bule = Bule;
exports.BuleWrapper = BuleWrapper;
exports.HouseDesc = HouseDesc;
exports.HouseType = HouseType;
exports.LRInfo = LRInfo;
exports.MainPic = MainPic;
exports.Red = Red;
exports.ShowMoreInfo = ShowMoreInfo;
exports.SomeRed = SomeRed;
exports.SquareMeterInfo = SquareMeterInfo;
exports.TitleInfo = TitleInfo;
exports.UpLoadInfo = UpLoadInfo;
exports.UploadPreview = UploadPreview;
exports.UrlLink = UrlLink;
exports.VideoList = VideoList;
exports.getColorWrapper = getColorWrapper;
