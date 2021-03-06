import {parse, stringify} from "qs";

/**
 * UtilRoundType 取整类型
 * Up 向上取整
 * Down 向下取整
 * Round 四舍五入
 * */
export enum UtilRoundType {
  Up = 1,
  Down,
  Round
}

export function arRoundNum(num: number, roundType: UtilRoundType = UtilRoundType.Round,) {
  let resNum;
  if (roundType === UtilRoundType.Up) {
    resNum = Math.ceil(num);
  } else if (roundType === UtilRoundType.Down) {
    resNum = Math.floor(num);
  } else {
    resNum = Math.round(num);
  }
  return resNum;
}

/**
 * @param {number} num 待处理的值
 * @param {number} roundType  取整类型
 * @param {UtilRoundType} numCount
 * */
export function fixedZero(
  num: number,
  numCount: number,
  roundType: UtilRoundType = UtilRoundType.Round,
) {
  const tempNumCount = Math.ceil(numCount);
  const newValue = arRoundNum(num, roundType);
  let valueStr = newValue.toString();
  let numLen = valueStr.length;
  if (numLen <= tempNumCount) {
    return valueStr;
  }
  while (numLen < tempNumCount) {
    valueStr = "0" + valueStr;
    numLen++;
  }
  return valueStr;
}


export interface ARNodeItem {
  path: string;
  exact: boolean;
  children: ARNodeItem[];
  component: any;
}

/**
 * @param {ARNodeItem} nodes
 * @param {string} parentPath
 * */
export function getPlainNode(nodes: ARNodeItem[], parentPath: string = '') {
  let arr: ARNodeItem[] = [];
  nodes.forEach((nodeItem) => {
    const item = nodeItem;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && item.children.length >= 1 && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.children.length >= 1 && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

/**
 * 获取两个文件路径的关系
 * @param {string} str1
 * @param {string} str2
 * */
export function getRelation(str1: string, str2: string) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  }
  if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

/**
 * @param {string} routes
 * */
export function getRenderArr(routes: string[]) {
  if (!routes || routes.length <= 0) {
    return [];
  }
  let renderArr: string[] = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {any} routerData  获取动态 key，需要把类型指定为 any
 */
export function getRoutes(path: string, routerData: any) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  return renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    const keyName = `${path}${item}`;
    return {
      exact,
      ...(routerData[keyName]),
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function getQueryPath(path: string = '', query: any = {}) {
  const search = stringify(query);
  if (search && search.length) {
    return `${path}?${search}`;
  }
  return path;
}

/* eslint no-useless-escape:0 */
const defRegExp = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path: string) {
  return defRegExp.test(path);
}

export function formatWan(val: number, roundType: UtilRoundType = UtilRoundType.Round) {
  const resNum = arRoundNum(val, roundType);
  if (!resNum || Number.isNaN(resNum)) return '';
  if (resNum < 10000) {
    return (
      <span>{resNum}</span>
    );
  }
  const result = Math.floor(resNum / 10000);
  return (
    <span>
      {result}
      <span
        style={{
          position: 'relative',
          top: -2,
          fontSize: 14,
          fontStyle: 'normal',
          marginLeft: 2,
        }}
      >
        万
      </span>
    </span>
  )
}

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export function isAntdPro(): boolean {
  return window.location.hostname === "preview.pro.ant.design";
}

// 类型判断
const isType = (type: string) => (obj: any) => obj != null && Object.prototype.toString.call(obj) === `[object ${type}]`;

export const isFn = isType('Function');
export const isArr = Array.isArray || isType('Array');
export const isPlainObj = isType('Object');
export const isStr = isType('String');
export const isBool = isType('Boolean');
export const isNum = isType('Number');
export const isObj = (val: any) => typeof val === 'object';
export const isRegExp = isType('RegExp');

export const isEmpty = (val: any) => {
  return !val && !isNum(val);
}

export const isEmptyArr = (list: any) => {
  if (!isArr(list)) return false;
  return list.every(ele => isEmpty(ele));
}

export const filterRender = (val: any, children: any) => {
  return isEmpty(val) ? '--' : children || val;
}

export const filterEmptyAttr = (obj: any) => {
  if (!isObj(obj)) return obj;
  Object.keys(obj).forEach(ele => {
    if (isEmpty(obj[ele])) delete obj[ele];
  })
  return obj;
}

/**
 * 例如
 * https://XXX/测试文件_6bd8d67918157897f68728b369caaa14.jpeg  ===> 测试文件.jpeg
 * https://XXX/6bd8d67918157897f68728b369caaa14.jpeg  ===> 6bd8d67918157897f68728b369caaa14.jpeg
 */
export function simplifyFileName(url: string, code: number) {
  if (!isStr(url)) {
    return url;
  }
  const index = url.indexOf('_');
  const nameStartIndex = url.lastIndexOf('/');
  if (index < 0) {
    return url.substring(nameStartIndex + 1); // 直接返回文件名
  }
  const extensionName = url.substring(url.lastIndexOf('.')); // 扩展名
  const nameEndIndex = url.lastIndexOf('_');
  const retStr = url.substring(nameStartIndex + 1, nameEndIndex);
  if (code !== 4) {
    return retStr + extensionName.substring(0, extensionName.indexOf('?'));
  }
  return retStr + extensionName;
}

// 后台返回的是 [url], 转化成 {url: '', name: '', status: 'done', uid: ''} 的形式
export function simplifyUrlMapToFileList(arr: string[] | string, code: number) {
  if (!arr || !arr.length) {
    return [];
  }
  if (typeof arr === 'string') {
    arr = [arr];
  }
  const strArr = arr.filter((ele)=>isStr(ele));
  return strArr.map((urlStr, i) => {
    let obj = Object.create({});
    obj.uid = (-i + 10).toString();
    obj.status = 'done';
    obj.name = simplifyFileName(urlStr, code);
    obj.url = urlStr;
    return obj;
  });
}

// 后台返回的是 [url], 转化成 {url: '', name: '', status: 'done', uid: ''} 的形式

export function urlMapToFileList(arr: string[] | string) {
  if (!arr || arr.length <= 0) return [];
  if (typeof arr === 'string') {
    arr = [arr];
  }
  const strArr = arr.filter((ele)=>isStr(ele));
  return strArr.map((urlStr, i) => {
    const index = urlStr.lastIndexOf('/');
    let obj = Object.create({});
    obj.uid = (-i + 10).toString();
    obj.status = 'done';
    obj.name = urlStr.substring(index + 1);
    obj.url = urlStr;
    return obj;
  });
}

// 返回url对应的文件名
export function urlMapToFile(urlStr: string) {
  if (!isStr(urlStr)) return urlStr;
  const index = urlStr.lastIndexOf('/');
  return urlStr.substring(index + 1);
}

/**
 * 从列表中取值
 * @param {{url:string}[]} arr
 * */
export function fileListTourlMap(arr: { url: string }[]) {
  if (!arr || !arr.length) {
    return [];
  }
  const validArr = arr.filter(ele=>(ele.url && ele.url.length >= 1));
  return validArr.map(ele => ele.url || '');
}

export type ARDefaultTreeData = {
  name: string,
  token: string,
  childMenuDefList: ARDefaultTreeData[],
  funList: ARDefaultTreeData[],
};

export type AIServerData = {
  title?: string,
  value?: string,
  key?: string,
  children?: AIServerData[],
}

export function transformServerDataForDefaultTreeData(data: ARDefaultTreeData) {
  const Tdata: AIServerData = {};
  let childMeun: AIServerData[] = [];
  let childFunList: AIServerData[] = [];
  Tdata.title = data.name;
  Tdata.value = data.token;
  Tdata.key = data.token;
  Tdata.children = [];
  if (data.childMenuDefList && data.childMenuDefList.length) {
    childMeun = data.childMenuDefList.map(chidData =>
      transformServerDataForDefaultTreeData(chidData)
    );
  }
  if (data.funList && data.funList.length) {
    childFunList = data.funList.map(chidData => transformServerDataForDefaultTreeData(chidData));
  }
  Tdata.children = Tdata.children.concat(childMeun).concat(childFunList);
  return Tdata;
}

/**
 * 去掉字符串首尾的空格，如果是多行文本，只会去除首行行首与尾行行尾的空格
 * @param {string} str  传入的字符串
 * */
export function trimSpace(str: string = '') {
  if (!isStr(str)) return str;
  return str.replace(/^\s+|\s+$/g, '');
}

/**
 * 去掉字符串首的空格，如果是多行文本，只会去除首行行首的空格
 * @param {string} str  传入的字符串
 * */
export function beforeSpaceTrim(str: string = '') {
  if (!isStr(str)) return str;
  return str.replace(/^\s+/g, '');
}

/**
 * 去掉字符串末尾的空格，如果是多行文本，只会去除尾行行尾的空格
 * @param {string} str 传入的字符串
 * */
export function endSpaceTrim(str: string = '') {
  if (!isStr(str)) return str;
  return str.replace(/^\s+/g, '');
}

export function trimFormValue(formDate: any, excludeArr: string[] = []) {
  const copyFormDate = {...formDate};
  Object.keys(copyFormDate).forEach(ele => {
    if (excludeArr.includes(copyFormDate[ele])) return;
    if (typeof copyFormDate[ele] === 'string') {
      copyFormDate[ele] = trimSpace(copyFormDate[ele]);
    }
  });
  return copyFormDate;
}

export function mapToObject(list: any[], key: string) {
  if (!list || !list.length) return list;
  const data = Object.create({});
  list.forEach(ele => {
    const validKey = ele[key];
    if (validKey && typeof validKey === 'string') {
      data[validKey] = ele;
    }
  });
  return data;
}

export function beforeFieldsToRedux(fields: any, actions: any = undefined) {
  if (!fields) return fields;
  const backData = Object.create({});
  let isOrigin = true;
  const fAction = isArr(actions);
  Object.keys(fields).forEach((ele, i) => {
    const data = fields[ele];
    if (!fAction) {
      if (data.name && isOrigin) {
        backData[ele] = data.value;
      } else {
        isOrigin = false;
        backData[data.name || ele] = beforeFieldsToRedux(backData[ele]);
      }
    } else {
      let toAddAttr = true;
      if (data.name) {
        for (const ac of actions) {
          if (!data[ac]) {
            toAddAttr = false;
            break;
          }
        }
      }
      if (toAddAttr) {
        if (data.name && isOrigin) {
          backData[data.name || ele] = data.value;
        } else if (data.name && !isOrigin) {
          backData[ele] = data.value;
        } else {
          isOrigin = false;
          backData[data.name || ele] = beforeFieldsToRedux(data);
        }
      }
    }
  });
  return backData;
}

// 添加了dirty和touched判断
export function fieldsToRedux(fields: any) {
  return beforeFieldsToRedux(fields, ['touched', 'dirty']);
}

export function assignObj(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export function arrayFilterSame(list: any[]) {
  if (!list || !list.length) return;
  const hasMap = Object.create({});
  const backList: any[] = [];
  list.forEach((ele: any) => {
    if (!hasMap[ele]) {
      backList.push(ele);
    }
    hasMap[ele] = ele;
  });
  return backList;
}

export function arrayDelOne(list: any[], one: any, changeOrigin: any) {
  if (!list || !list.length) return list;
  const index = list.indexOf(one);
  if (index === -1) return list;
  if (changeOrigin) {
    list.splice(index, 1);
    return list;
  }
  const copyList = [...list];
  copyList.splice(index, 1);
  return copyList;
}

export function arrayHasSame(list: any[]) {
  if (!list || !list.length) return false;
  const hasMap = Object.create({});
  let hasSame = false;
  for (let i = 0; i < list.length; i++) {
    const value = list[i];
    if (hasMap[value]) {
      hasSame = true;
      break;
    }
    hasMap[value] = value;
  }
  return hasSame;
}

// 获取深层object指定的值
export function findDataByKey(data: any, key: string) {
  if (!key) return data;
  const keys = key.split('.');
  let backData = data;
  for (let i = 0; i < keys.length; i++) {
    if (!backData[keys[i]]) break;
    backData = data[keys[i]];
  }
  return backData;
}

// 分转化为元
export function MinuteToyuan(value: number) {
  if (value === null) return value;
  return value / 100;
}

export function YuanAndMinuteReverse(data: any, keys: string[], backYuan: any) {
  if (!keys) return data;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let value = null;
    if (backYuan) {
      value = MinuteToyuan(data[key]);
    } else {
      value = yuan2fen(data[key]);
    }
    if (key in data) {
      data[key] = value;
    }
  }
}

export function minuteToyuanStr(minute: number, noText: boolean) {
  const text = noText ? '' : ' 元';
  if (!minute) return `0.00${text}`;
  const yuanStr = `${minute / 100}`;
  const yuans = yuanStr.split('.');
  const yuanPart = yuans[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${yuanPart}.${yuans[1] ? `${yuans[1]}00`.substring(0, 2) : '00'}${text}`;
}

// 分转元
export const fen2yuan = (fen: string, len = 2) => {
  const flag = /[￥¥]/.test(`${fen}`);
  const money = (parseInt(fen, 10) / 100).toFixed(len) || '0';
  return flag ? `¥${money}` : money;
};
// 元转分
export const yuan2fen = (yuan: number) => {
  const flag = /[￥¥]/.test(`${yuan}`);
  const money = (+yuan * 100).toFixed(0) || '0';
  return flag ? `¥${money}` : money;
};

// 分转万
export const fen2wan = (fen: string, len = 1) => {
  const flag = /[￥¥]/.test(`${fen}`);
  const money = (Math.floor((parseInt(fen, 10) / 1000000) * 10) / 10).toFixed(len) || '0';
  return flag ? `¥${money}` : money;
};

export function getYuanStr(yuan: string, noText: boolean) {
  const text = noText ? '' : ' 元';
  if (!yuan) return `0.00${text}`;
  const yuanStr = `${yuan}`;
  const yuans = yuanStr.split('.');
  const yuanPart = yuans[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${yuanPart}.${yuans[1] ? `${yuans[1]}00`.substring(0, 2) : '00'}${text}`;
}

export function valuesToFileds(values: any) {
  if (!values || !isObj(values)) return values;
  const backData = Object.create({});
  Object.keys(values).forEach(ele => {
    backData[ele] = {value: values[ele]};
  });
  return backData;
}

// 选取 object的部分属性
export const pickSomeAttr = (obj: any, attrs: any[] = []) => {
  if (!obj) return obj;
  const backObj = Object.create({});
  const deepCopyObj = assignObj(obj);
  attrs.forEach((ele, i) => {
    backObj[ele] = deepCopyObj[ele];
  });
  return backObj;
};

// eg: mapObj==> {id: 'value', list='children', name: 'title'} 映射一些属性值 **
export const mapSomeAttr = (obj: any, mapObj = Object.create({}), extendObjFn: Function) => {
  if (!obj) return obj;
  let backObj = null;
  const keys = Object.keys(mapObj);
  const mapObjToNew = (data: any, leval: number | undefined = undefined) => {
    let backData = Object.create({});
    if (isFn(extendObjFn)) {
      backData = extendObjFn(leval, data) || {};
    }
    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in data)) continue;
      const key = keys[i];
      const mapKey = mapObj[key];
      const value = data[key];
      if (isArr(value) && key !== 'all_connect') {
        backData[mapKey] = value.map(ele => mapObjToNew(ele, (leval || 0) + 1));
      } else {
        backData[mapKey] = value;
      }
    }
    return backData;
  };
  if (isArr(obj)) {
    backObj = obj.map(ele => mapObjToNew(ele, 1));
  } else {
    backObj = mapObjToNew(obj);
  }
  return backObj;
};

// eg: mapObj==> {id: 'value', list='children', name: 'title'} 映射一些属性值 **
export const mapSomeAttrWithParents = (obj: any, mapObj = Object.create({}), pMap = [], key: string) => {
  if (!obj) return obj;
  let backObj = null;
  const keyMap = Object.create({});
  const keys = Object.keys(mapObj);

  const mapObjToNew = (data: any, leval: number | undefined = undefined, pdata: any = undefined) => {
    const backData = Object.create({});

    const pickObj = pickSomeAttr(data, pMap);
    if (pdata) {
      backData.all_connect = [...pdata, pickObj];
    } else {
      backData.all_connect = [pickObj];
    }
    keyMap[data[key]] = backData.all_connect;

    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in data)) continue;
      const keyValue = keys[i];
      const mapKey = mapObj[keyValue];
      const value = data[keyValue];

      if (isArr(value)) {
        backData[mapKey] = value.map(ele => mapObjToNew(ele, (leval || 0) + 1, backData.all_connect));
      } else {
        backData[mapKey] = `${value}`;
      }
    }
    return backData;
  };

  if (isArr(obj)) {
    backObj = obj.map(ele => mapObjToNew(ele, 1));
  } else {
    backObj = mapObjToNew(obj);
  }
  return {backData: backObj, keyMap};
};

const pickListSomeAttr = (list: any, attrs = []) => {
  if (isArr(list)) {
    return list.map(ele => pickSomeAttr(ele, attrs));
  }
};

export const pickAttr = (obj: any, attrs = []) => {
  let backData = null;
  if (isArr(obj)) {
    backData = pickListSomeAttr(obj, attrs);
  } else {
    backData = pickSomeAttr(obj, attrs);
  }
  return backData;
};

export const getSearchFormProperties = (columns: any[], extendFields = {}, filter: Function) => {
  const columnsFields = columns.filter(ele => {
    if (filter) {
      return filter(ele.fieldProps, ele);
    }
    return ele.fieldProps;
  });
  const jsonSchemaProperties = Object.create({});
  columnsFields.forEach(ele => {
    const data = pickSomeAttr(ele, ['title', 'dataIndex', 'fieldProps']);
    const filed = {
      dataIndex: data.dataIndex,
      name: data.dataIndex,
      title: data.title,
      ...data.fieldProps,
    };
    jsonSchemaProperties[filed.dataIndex] = filed;
  });
  return {...jsonSchemaProperties, ...extendFields};
};

export const validateFormListFields = (formMaps: any) => {
  if (!isPlainObj(formMaps)) {
    return null;
  }
  let error = false;
  const values: any[] = [];
  Object.keys(formMaps).forEach(ele => {
    formMaps[ele].validateFields((hasErr: boolean, value: any) => {
      if (hasErr) {
        error = true;
        values.push({...value, error});
      } else {
        values.push({...value});
      }
    });
  });
  return {
    error,
    values,
  };
};

export const extendXprops = (columns: any[], name: string, extendData: any) => {
  const objMap = mapToObject(columns, 'dataIndex');
  if (objMap[name]) {
    const data = objMap[name].fieldProps['x-props'];
    objMap[name].fieldProps['x-props'] = {...data, ...extendData};
  }
};

export const doneMaxDo = (num: number, callback: Function) => {
  let time = 0;
  const values: any[] = [];
  return (value: any) => {
    time += 1;
    values.push(value);
    if (time === num && callback) {
      callback(values);
    }
  };
};

export const stringifySome = (data: any, keys: string[]) => {
  if (!isObj(data)) return;
  if (isArr(keys)) {
    keys.forEach(ele => {
      if (isObj(data[ele])) {
        data[ele] = JSON.stringify(data[ele]);
      }
    });
  } else {
    Object.keys(data).forEach(ele => {
      const value = data[ele];
      if (isObj(value)) {
        data[ele] = JSON.stringify(value);
      }
    });
  }
  // eslint-disable-next-line consistent-return
  return data;
};

export const dateSplit = (data: any, noTime: boolean) => {
  if (!data) return data;
  const [da, time] = data.split(' ');
  return noTime ? (
    <span>{da}</span>
  ) : (
    <span>
      {da}
      <br/>
      {time}
    </span>
  );
};

export /**
 *
 *
 * @param {*} str 要拆分的string
 * @param {*} number 保留多少个string
 * @param {boolean} [ellipsis=false] 如果大于 number, 是否展示...
 * @returns
 */
const strSplit = (str: any, number: number, ellipsis = true) => {
  if (typeof str !== 'string') return str;
  const {length} = str;
  if (length > number) {
    const formatedStr = `${str.slice(0, number)}...`;
    return formatedStr;
  }
  return str;
};

export const isImage = (value: string) => {
  const exp = /\w(\.gif|\.jpeg|\.png|\.jpg|\.bmp)/i;
  return exp.test(value);
};

export const listPlusByKey = (key: string) => {
  const backList: any[] = [];
  return (list = []) => {
    const backListMap = backList.length ? mapToObject(backList, key) : {};
    for (let i = 0; i < list.length; i++) {
      const data = list[i];
      if (!backListMap[data[key]]) {
        backList.push(data);
      }
    }
    return backList;
  };
};
/**
 * 对象的值进行包装: { name: 'xx'} to { name: { value: 'xx'}}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param {*} obj
 * @param {string} keyName
 */
export const wrapperByKey = (obj: any, keyName: string = 'value') => {
  const result = Object.create({});
  const keys = Object.keys(obj);
  keys.forEach(key => {
    result[key] = {
      [keyName]: obj[key],
    };
  });
  return result;
};

export const isUNaN = (value: any) => `${trimSpace(value)}` === '' || isNaN(value);

function convertBase64ToBlob(base64: any) {
  const base64Arr = base64.split(',');
  const [content, contentTwo] = base64Arr;
  let type = '';
  let base64String = '';
  if (contentTwo) {
    // 如果是图片base64，去掉头信息
    base64String = contentTwo;
    type = base64Arr[0].substring(base64Arr[0].indexOf(':') + 1, base64Arr[0].indexOf(';'));
  } else {
    base64String = content;
    type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  }
  // 将base64解码
  const bytes = atob(base64String);
  // var bytes = base64;
  const uInt8Array = new Uint8Array(bytes.length);

  // 将base64转换为ascii码
  for (let i = 0; i < bytes.length; i++) {
    uInt8Array[i] = bytes.charCodeAt(i);
  }

  // 生成Blob对象（文件对象）
  return new Blob([uInt8Array], {type});
}

export const downLoadFile = (base64: any, fileName: string) => {
  const blob = convertBase64ToBlob(base64);
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  // 按照原组件，此处应该应该添加style，但是添加style总是报错
  // a.style = 'display: none';
  a.href = objectUrl;
  a.download = fileName || '导入excel';
  a.click();
  document.body.removeChild(a);
};

export const downLoadFileByBlob = (blob: any, fileName: string) => {
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  // 按照原组件，此处应该应该添加style，但是添加style总是报错
  // a.style = 'display: none';
  a.href = objectUrl;
  a.download = fileName || '导入excel';
  a.click();
  document.body.removeChild(a);
};

/**
 * 对象的值使用函进行包装: { name: 'xx'} to { name: Form.createFormField({ value: 'xx'})}
 * 主要用于对 formFields 封装
 * @param {*} obj
 * @param {*} func
 */
export const wrapperByFunc = (obj: any, func: Function) => {
  const result = Object.create({});
  const keys = Object.keys(obj);
  keys.forEach(key => {
    result[key] = func(obj[key]);
  });
  return result;
};

/**
 * formFields 转化为普通对象: { name: { value: 'xx'}} to { name: 'xx'}
 * 主要用于把普通对象初始化成 formFields 对象
 * @param fields
 */
export const fieldsToData = (fields: any) => {
  const result = Object.create({});
  const keys = Object.keys(fields);
  keys.forEach(key => {
    result[key] = fields[key].value;
  });
  return result;
};

// 分转万
export const fenToWan = (fen: number, decimal = 2, afterfix = '') => {
  if (!fen) return fen;
  const result = (fen / 1000000).toFixed(decimal);
  return `${result}${afterfix}`;
};

// 获取文件的后缀名
export const getFileTypeByName = (name: string | any[]) => {
  const index = name.lastIndexOf('.');
  return name.slice(index);
}
