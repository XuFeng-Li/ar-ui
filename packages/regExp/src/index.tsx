// import { trim, isFn, getFileTypeByName, isStr, isArr } from '@ar/util';
import {
  isFn as arIsFn,
  isArr as arIsArr
} from "@ar/util";

export const checkNum = (value:string | number) => {
  return /^[0-9]+.?[0-9]*$/.test(value.toString());
}

export const maxlenRule = (value:string, maxLen:number) =>
  new Promise(resolve => {
    if (value && value.length > maxLen) {
      resolve(`不能超过${maxLen}个字符`);
    } else {
      resolve("");
    }
  });

export const telphoneValidation = /^[1][0-9]{10}$/;

/**
 * 空校验
 * @param {string} value 待校验的字符串
 * @param {string} mes 校验失败时的提示信息
 * */
export const requiredRule = (value:string, mes:string) => {
  const trimSpaceRegExp = RegExp('^\s+|\s+$','g');
  const trimResult = value.replace(trimSpaceRegExp,'');
  if (!trimResult || trimResult.length <= 0) {
    return `请填写${mes}`;
  }
  return '';
};

export const checkNoChinaChar = (_:any[], value:string, callback:Function) => {
  if (value) {
    if (/[\u4E00-\u9FA5]/g.test(value)) {
      callback('不能输入汉字!');
    } else {
      callback();
    }
  }
  callback();
};

export const checkNumberOrABC = (_:any[], value:string, callback:Function) => {
  if (value) {
    if (/^[0-9a-zA-Z]+$/.test(value)) {
      callback();
    } else {
      callback('请输入数字或字母');
    }
  }
  callback();
};

export const getNumberRuleMessage = (rule:any[]) => {
  const [int = 1, dot] = rule;
  return `请填写正数，精度为${int}位整数${dot ? `${dot}位小数` : null}`
}

// 数字不包含0验证
export const numberExcludeZeroRule = (value:string, rule:any[], callback:Function) => {
  if (!value) {
    return callback && callback();
  }
  const [int = 1, dot, mes] = rule;
  let ruleStr:RegExp;
  RegExp('abc','i')
  if (!dot) {
    ruleStr = RegExp(`/^[1-9]{1}(\\d){0,${int - 1}}$/`);
  } else {
    ruleStr = RegExp(`/^(([1-9]{1}(\\d){0,${int - 1}})(\\.(\\d){0,${dot}})?|[0](\\.(\\d){0,${dot}}))$/`);
  }
  const legal = ruleStr.test(value);

  if (arIsFn(callback)) {
    if (legal) {
      callback();
    } else {
      callback(mes || `请填写正数，精度为${int}位整数${dot ? `${dot}位小数` : ''}`);
    }
  } else {
    return legal;
  }
};

// 小数位验证 dot位数， value值
export const decimalRule = (value:string | number, dot:number) => {
  if(!value) return false;
  if(!checkNum(value)) return '请填写数字';
  const dotLength = `${value}`.split('.')[1]
  if(!dotLength) return false;
  if(dotLength.length > dot) return `请输入不超过${dot}位小数的数字`
}

// 范围内的数字判断 range = [[min, max, dot, mes],[contain, contain]]
export const rangeNumberRule = (value:number, range:number[], callback:Function) => {
  if (!value) {
    return callback && callback();
  }

  if(!checkNum(value)) {
    return callback('请填写数字');
  }

  if(!arIsArr(range)) return callback()
  if(!arIsArr(range[0])) return callback()

  let legal = true;
  let message = '';
  const [min, max, dot, mes] = range[0];
  if(!arIsArr(range[1])) {
    legal = min < value && value < max
  } else {
    const [containMin, containMax] = range[1]
    if(containMin && !containMax) {
      legal = (min <= value && value < max)
      message = `请填写大于等于${min}，小于${max}的数`
    }
    if(!containMin && containMax) {
      legal = (min < value && value <= max)
      message = `请填写大于${min}，小于等于${max}的数`
    };
    if(containMin && containMax) {
      legal = (min <= value && value <= max)
      message = `请填写大于等于${min}，小于等于${max}的数`
    };
    if(!containMin && !containMax) {
      legal = (min <= value && value <= max)
      message = `请填写大于${min}，小于${max}的数`
    };
  }

  const errorMessage = decimalRule(value, dot)
  if(errorMessage) {
    return callback(errorMessage);
  }

  if (arIsFn(callback)) {
    if (legal) {
      callback();
    } else {
      callback(mes || message || `请填写${min}~${max}之间的数字`);
    }
  } else {
    return legal;
  }
};


// 数字包含0验证
export const numberIncludeRule = (value:string | number, rule:any[], callback:Function) => {
  if (!value) {
    return callback && callback();
  }
  const [int = 1, dot, mes] = rule;
  let ruleStr:RegExp;
  if (!dot) {
    ruleStr = RegExp(`/^[0-9]{1}(\\d){0,${int - 1}}$/`);
  } else {
    ruleStr = RegExp(`/^(([1-9]{1}(\\d){0,${int - 1}})(\\.(\\d){0,${dot}})?|[0](\\.(\\d){0,${dot}})?)$/`);
  }
  const legal = ruleStr.test(value.toString() || "");
  if (arIsFn(callback)) {
    if (legal) {
      callback();
    } else {
      callback(mes || `请填写0 或 正整数，精度为${int}位整数${dot ? `${dot}位小数` : ''}`);
    }
  } else {
    return legal;
  }
};


export const isImageByUrl = (url:string) => {
  if (!url || typeof url !== 'string') {
    return;
  }
  const imageTypes = ['.jpg', '.jpeg', '.png', '.svg', '.gif']
  const index = url.lastIndexOf(".");
  const suffixStr = url.slice(index);
  return imageTypes.includes(suffixStr.toLocaleLowerCase());
}
//
export const isVideoByUrl = (url:string) => {
  if (!url || typeof url !== 'string') {
    return;
  }
  const videoTypes = ['.weba', '.3gp', '.wav', '.mp3', '.mp4', '.avi', '.aac']
  const index = url.lastIndexOf(".");
  const suffixStr = url.slice(index);
  return videoTypes.includes(suffixStr.toLocaleLowerCase());
}