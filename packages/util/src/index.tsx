export * from "tools/index.tsx";
/**
 * UtilRoundType 取整类型
 * Up 向上取整
 * Down 向下取整
 * Round 四舍五入
 * */
import {parse, stringify} from "qs";

export enum UtilRoundType {
  Up = 1,
  Down,
  Round
}

export function arRoundNum(num: number,roundType: UtilRoundType = UtilRoundType.Round,) {
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
  const newValue = arRoundNum(num,roundType);
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
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path: string) {
  return reg.test(path);
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
          top:-2,
          fontSize:14,
          fontStyle:'normal',
          marginLeft:2,
        }}
      >
        万
      </span>
    </span>
  )
}

