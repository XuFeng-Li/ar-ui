'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@tytools/util');

// import { trim, isFn, getFileTypeByName, isStr, isArr } from '@tytool/util';
const checkNum = (value) => {
    return /^[0-9]+.?[0-9]*$/.test(value.toString());
};
const maxlenRule = (value, maxLen) => new Promise(resolve => {
    if (value && value.length > maxLen) {
        resolve(`不能超过${maxLen}个字符`);
    }
    else {
        resolve("");
    }
});
const telphoneValidation = /^[1][0-9]{10}$/;
/**
 * 空校验
 * @param {string} value 待校验的字符串
 * @param {string} mes 校验失败时的提示信息
 * */
const requiredRule = (value, mes) => {
    const trimSpaceRegExp = RegExp('^\s+|\s+$', 'g');
    const trimResult = value.replace(trimSpaceRegExp, '');
    if (!trimResult || trimResult.length <= 0) {
        return `请填写${mes}`;
    }
    return '';
};
const checkNoChinaChar = (_, value, callback) => {
    if (value) {
        if (/[\u4E00-\u9FA5]/g.test(value)) {
            callback('不能输入汉字!');
        }
        else {
            callback();
        }
    }
    callback();
};
const checkNumberOrABC = (_, value, callback) => {
    if (value) {
        if (/^[0-9a-zA-Z]+$/.test(value)) {
            callback();
        }
        else {
            callback('请输入数字或字母');
        }
    }
    callback();
};
const getNumberRuleMessage = (rule) => {
    const [int = 1, dot] = rule;
    return `请填写正数，精度为${int}位整数${dot ? `${dot}位小数` : null}`;
};
// 数字不包含0验证
const numberExcludeZeroRule = (value, rule, callback) => {
    if (!value) {
        return callback && callback();
    }
    const [int = 1, dot, mes] = rule;
    let ruleStr;
    if (!dot) {
        ruleStr = RegExp(`/^[1-9]{1}(\\d){0,${int - 1}}$/`);
    }
    else {
        ruleStr = RegExp(`/^(([1-9]{1}(\\d){0,${int - 1}})(\\.(\\d){0,${dot}})?|[0](\\.(\\d){0,${dot}}))$/`);
    }
    const legal = ruleStr.test(value);
    if (util.isFn(callback)) {
        if (legal) {
            callback();
        }
        else {
            callback(mes || `请填写正数，精度为${int}位整数${dot ? `${dot}位小数` : ''}`);
        }
    }
    else {
        return legal;
    }
};
// 小数位验证 dot位数， value值
const decimalRule = (value, dot) => {
    if (!value)
        return false;
    if (!checkNum(value))
        return '请填写数字';
    const dotLength = `${value}`.split('.')[1];
    if (!dotLength)
        return false;
    if (dotLength.length > dot)
        return `请输入不超过${dot}位小数的数字`;
};
// 范围内的数字判断 range = [[min, max, dot, mes],[contain, contain]]
const rangeNumberRule = (value, range, callback) => {
    if (!value) {
        return callback && callback();
    }
    if (!checkNum(value)) {
        return callback('请填写数字');
    }
    if (!util.isArr(range))
        return callback();
    if (!util.isArr(range[0]))
        return callback();
    let legal = true;
    let message = '';
    const [min, max, dot, mes] = range[0];
    if (!util.isArr(range[1])) {
        legal = min < value && value < max;
    }
    else {
        const [containMin, containMax] = range[1];
        if (containMin && !containMax) {
            legal = (min <= value && value < max);
            message = `请填写大于等于${min}，小于${max}的数`;
        }
        if (!containMin && containMax) {
            legal = (min < value && value <= max);
            message = `请填写大于${min}，小于等于${max}的数`;
        }
        if (containMin && containMax) {
            legal = (min <= value && value <= max);
            message = `请填写大于等于${min}，小于等于${max}的数`;
        }
        if (!containMin && !containMax) {
            legal = (min <= value && value <= max);
            message = `请填写大于${min}，小于${max}的数`;
        }
    }
    const errorMessage = decimalRule(value, dot);
    if (errorMessage) {
        return callback(errorMessage);
    }
    if (util.isFn(callback)) {
        if (legal) {
            callback();
        }
        else {
            callback(mes || message || `请填写${min}~${max}之间的数字`);
        }
    }
    else {
        return legal;
    }
};
// 数字包含0验证
const numberIncludeRule = (value, rule, callback) => {
    if (!value) {
        return callback && callback();
    }
    const [int = 1, dot, mes] = rule;
    let ruleStr;
    if (!dot) {
        ruleStr = RegExp(`/^[0-9]{1}(\\d){0,${int - 1}}$/`);
    }
    else {
        ruleStr = RegExp(`/^(([1-9]{1}(\\d){0,${int - 1}})(\\.(\\d){0,${dot}})?|[0](\\.(\\d){0,${dot}})?)$/`);
    }
    const legal = ruleStr.test(value.toString() || "");
    if (util.isFn(callback)) {
        if (legal) {
            callback();
        }
        else {
            callback(mes || `请填写0 或 正整数，精度为${int}位整数${dot ? `${dot}位小数` : ''}`);
        }
    }
    else {
        return legal;
    }
};
const isImageByUrl = (url) => {
    if (!url || typeof url !== 'string') {
        return;
    }
    const imageTypes = ['.jpg', '.jpeg', '.png', '.svg', '.gif'];
    const index = url.lastIndexOf(".");
    const suffixStr = url.slice(index);
    return imageTypes.includes(suffixStr.toLocaleLowerCase());
};
//
const isVideoByUrl = (url) => {
    if (!url || typeof url !== 'string') {
        return;
    }
    const videoTypes = ['.weba', '.3gp', '.wav', '.mp3', '.mp4', '.avi', '.aac'];
    const index = url.lastIndexOf(".");
    const suffixStr = url.slice(index);
    return videoTypes.includes(suffixStr.toLocaleLowerCase());
};

exports.checkNoChinaChar = checkNoChinaChar;
exports.checkNum = checkNum;
exports.checkNumberOrABC = checkNumberOrABC;
exports.decimalRule = decimalRule;
exports.getNumberRuleMessage = getNumberRuleMessage;
exports.isImageByUrl = isImageByUrl;
exports.isVideoByUrl = isVideoByUrl;
exports.maxlenRule = maxlenRule;
exports.numberExcludeZeroRule = numberExcludeZeroRule;
exports.numberIncludeRule = numberIncludeRule;
exports.rangeNumberRule = rangeNumberRule;
exports.requiredRule = requiredRule;
exports.telphoneValidation = telphoneValidation;
