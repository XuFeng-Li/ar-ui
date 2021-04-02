import {parse, stringify} from 'qs';

export interface Person {
  name: string | undefined;
  age: number | undefined;
}

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

/**
 * @param num 待处理的值
 * @param roundType  取整类型
 * @param numCount
 * */
export function fixedZero(
  num: number,
  numCount: number,
  roundType: UtilRoundType = UtilRoundType.Round,
) {
  const tempNumCount = Math.ceil(numCount);
  let newValue;
  if (roundType === UtilRoundType.Up) {
    newValue = Math.ceil(num);
  } else if (roundType === UtilRoundType.Down) {
    newValue = Math.floor(num);
  } else {
    newValue = Math.round(num);
  }
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

export function logPerson(person: Person) {
  console.log("***********************");
  console.log("persion name is : ", person.name);
  console.log("persion age is : ", person.age);
}