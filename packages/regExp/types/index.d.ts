import React, { CSSProperties } from 'react';

interface TempLabelProps {
    text?: string;
    style?: CSSProperties;
}
declare const TempLabel: React.FC<TempLabelProps>;
declare const checkNum: (value: string | number) => boolean;
declare const maxlenRule: (value: string, maxLen: number) => Promise<unknown>;
declare const telphoneValidation: RegExp;
/**
 * 空校验
 * @param {string} value 待校验的字符串
 * @param {string} mes 校验失败时的提示信息
 * */
declare const requiredRule: (value: string, mes: string) => string;
declare const checkNoChinaChar: (_: any[], value: string, callback: Function) => void;
declare const checkNumberOrABC: (_: any[], value: string, callback: Function) => void;
declare const getNumberRuleMessage: (rule: any[]) => string;
declare const numberExcludeZeroRule: (value: string, rule: any[], callback: Function) => any;
declare const decimalRule: (value: string | number, dot: number) => string | false | undefined;
declare const rangeNumberRule: (value: number, range: number[], callback: Function) => any;
declare const numberIncludeRule: (value: string | number, rule: any[], callback: Function) => any;
declare const isImageByUrl: (url: string) => boolean | undefined;
declare const isVideoByUrl: (url: string) => boolean | undefined;

export { TempLabel, TempLabelProps, checkNoChinaChar, checkNum, checkNumberOrABC, decimalRule, getNumberRuleMessage, isImageByUrl, isVideoByUrl, maxlenRule, numberExcludeZeroRule, numberIncludeRule, rangeNumberRule, requiredRule, telphoneValidation };
