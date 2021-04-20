import * as qs from 'qs';

/**
 * UtilRoundType 取整类型
 * Up 向上取整
 * Down 向下取整
 * Round 四舍五入
 * */
declare enum UtilRoundType {
    Up = 1,
    Down = 2,
    Round = 3
}
declare function arRoundNum(num: number, roundType?: UtilRoundType): number;
/**
 * @param {number} num 待处理的值
 * @param {number} roundType  取整类型
 * @param {UtilRoundType} numCount
 * */
declare function fixedZero(num: number, numCount: number, roundType?: UtilRoundType): string;
interface ARNodeItem {
    path: string;
    exact: boolean;
    children: ARNodeItem[];
    component: any;
}
/**
 * @param {ARNodeItem} nodes
 * @param {string} parentPath
 * */
declare function getPlainNode(nodes: ARNodeItem[], parentPath?: string): ARNodeItem[];
/**
 * 获取两个文件路径的关系
 * @param {string} str1
 * @param {string} str2
 * */
declare function getRelation(str1: string, str2: string): 1 | 2 | 3;
/**
 * @param {string} routes
 * */
declare function getRenderArr(routes: string[]): string[];
/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {any} routerData  获取动态 key，需要把类型指定为 any
 */
declare function getRoutes(path: string, routerData: any): any[];
declare function getPageQuery(): qs.ParsedQs;
declare function getQueryPath(path?: string, query?: any): string;
declare function isUrl(path: string): boolean;
declare function formatWan(val: number, roundType?: UtilRoundType): "" | JSX.Element;
declare function isAntdPro(): boolean;
declare const isFn: (obj: any) => boolean;
declare const isArr: (arg: any) => arg is any[];
declare const isPlainObj: (obj: any) => boolean;
declare const isStr: (obj: any) => boolean;
declare const isBool: (obj: any) => boolean;
declare const isNum: (obj: any) => boolean;
declare const isObj: (val: any) => boolean;
declare const isRegExp: (obj: any) => boolean;
declare const isEmpty: (val: any) => boolean;
declare const isEmptyArr: (list: any) => boolean;
declare const filterRender: (val: any, children: any) => any;
declare const filterEmptyAttr: (obj: any) => any;
/**
 * 例如
 * https://XXX/测试文件_6bd8d67918157897f68728b369caaa14.jpeg  ===> 测试文件.jpeg
 * https://XXX/6bd8d67918157897f68728b369caaa14.jpeg  ===> 6bd8d67918157897f68728b369caaa14.jpeg
 */
declare function simplifyFileName(url: string, code: number): string;
declare function simplifyUrlMapToFileList(arr: string[] | string, code: number): any[];
declare function urlMapToFileList(arr: string[] | string): any[];
declare function urlMapToFile(urlStr: string): string;
/**
 * 从列表中取值
 * @param {{url:string}[]} arr
 * */
declare function fileListTourlMap(arr: {
    url: string;
}[]): string[];
declare type ARDefaultTreeData = {
    name: string;
    token: string;
    childMenuDefList: ARDefaultTreeData[];
    funList: ARDefaultTreeData[];
};
declare type AIServerData = {
    title?: string;
    value?: string;
    key?: string;
    children?: AIServerData[];
};
declare function transformServerDataForDefaultTreeData(data: ARDefaultTreeData): AIServerData;
/**
 * 去掉字符串首尾的空格，如果是多行文本，只会去除首行行首与尾行行尾的空格
 * @param {string} str  传入的字符串
 * */
declare function trimSpace(str?: string): string;
/**
 * 去掉字符串首的空格，如果是多行文本，只会去除首行行首的空格
 * @param {string} str  传入的字符串
 * */
declare function beforeSpaceTrim(str?: string): string;
/**
 * 去掉字符串末尾的空格，如果是多行文本，只会去除尾行行尾的空格
 * @param {string} str 传入的字符串
 * */
declare function endSpaceTrim(str?: string): string;
declare function trimFormValue(formDate: any, excludeArr?: string[]): any;
declare function mapToObject(list: any[], key: string): any;
declare function beforeFieldsToRedux(fields: any, actions?: any): any;
declare function fieldsToRedux(fields: any): any;
declare function assignObj(obj: any): any;
declare function arrayFilterSame(list: any[]): any[] | undefined;
declare function arrayDelOne(list: any[], one: any, changeOrigin: any): any[];
declare function arrayHasSame(list: any[]): boolean;
declare function findDataByKey(data: any, key: string): any;
declare function MinuteToyuan(value: number): number;
declare function YuanAndMinuteReverse(data: any, keys: string[], backYuan: any): any;
declare function minuteToyuanStr(minute: number, noText: boolean): string;
declare const fen2yuan: (fen: string, len?: number) => string;
declare const yuan2fen: (yuan: number) => string;
declare const fen2wan: (fen: string, len?: number) => string;
declare function getYuanStr(yuan: string, noText: boolean): string;
declare function valuesToFileds(values: any): any;
declare const pickSomeAttr: (obj: any, attrs?: any[]) => any;
declare const mapSomeAttr: (obj: any, mapObj: any, extendObjFn: Function) => any;
declare const mapSomeAttrWithParents: (obj: any, mapObj: any, pMap: never[] | undefined, key: string) => any;
declare const pickAttr: (obj: any, attrs?: never[]) => any;
declare const getSearchFormProperties: (columns: any[], extendFields: {} | undefined, filter: Function) => any;
declare const validateFormListFields: (formMaps: any) => {
    error: boolean;
    values: any[];
} | null;
declare const extendXprops: (columns: any[], name: string, extendData: any) => void;
declare const doneMaxDo: (num: number, callback: Function) => (value: any) => void;
declare const stringifySome: (data: any, keys: string[]) => any;
declare const dateSplit: (data: any, noTime: boolean) => any;
declare const strSplit: (str: any, number: number, ellipsis?: boolean) => any;
declare const isImage: (value: string) => boolean;
declare const listPlusByKey: (key: string) => (list?: never[]) => any[];
/**
 * 对象的值进行包装: { name: 'xx'} to { name: { value: 'xx'}}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param {*} obj
 * @param {string} keyName
 */
declare const wrapperByKey: (obj: any, keyName?: string) => any;
declare const isUNaN: (value: any) => boolean;
declare const downLoadFile: (base64: any, fileName: string) => void;
declare const downLoadFileByBlob: (blob: any, fileName: string) => void;
/**
 * 对象的值使用函进行包装: { name: 'xx'} to { name: Form.createFormField({ value: 'xx'})}
 * 主要用于对 formFields 封装
 * @param {*} obj
 * @param {*} func
 */
declare const wrapperByFunc: (obj: any, func: Function) => any;
/**
 * formFields 转化为普通对象: { name: { value: 'xx'}} to { name: 'xx'}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param fields
 */
declare const fieldsToData: (fields: any) => any;
declare const fenToWan: (fen: number, decimal?: number, afterfix?: string) => string | number;
declare const getFileTypeByName: (name: string | any[]) => string | any[];

export { AIServerData, ARDefaultTreeData, ARNodeItem, MinuteToyuan, UtilRoundType, YuanAndMinuteReverse, arRoundNum, arrayDelOne, arrayFilterSame, arrayHasSame, assignObj, beforeFieldsToRedux, beforeSpaceTrim, dateSplit, doneMaxDo, downLoadFile, downLoadFileByBlob, endSpaceTrim, extendXprops, fen2wan, fen2yuan, fenToWan, fieldsToData, fieldsToRedux, fileListTourlMap, filterEmptyAttr, filterRender, findDataByKey, fixedZero, formatWan, getFileTypeByName, getPageQuery, getPlainNode, getQueryPath, getRelation, getRenderArr, getRoutes, getSearchFormProperties, getYuanStr, isAntdPro, isArr, isBool, isEmpty, isEmptyArr, isFn, isImage, isNum, isObj, isPlainObj, isRegExp, isStr, isUNaN, isUrl, listPlusByKey, mapSomeAttr, mapSomeAttrWithParents, mapToObject, minuteToyuanStr, pickAttr, pickSomeAttr, simplifyFileName, simplifyUrlMapToFileList, strSplit, stringifySome, transformServerDataForDefaultTreeData, trimFormValue, trimSpace, urlMapToFile, urlMapToFileList, validateFormListFields, valuesToFileds, wrapperByFunc, wrapperByKey, yuan2fen };
