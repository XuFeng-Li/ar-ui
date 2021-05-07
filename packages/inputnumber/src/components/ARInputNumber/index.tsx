import React, {CSSProperties} from 'react';
import {InputNumber} from 'antd';

import 'antd/dist/antd.css';

// @ts-ignore
import styles from './index.module.scss';

export type ARSizeType = 'small' | 'middle' | 'large' | undefined;
export interface ARInputNumberProps {
  /**
   * 样式参数
   * */
  style?:CSSProperties,
  /**
   * 	自动获取焦点
   * */
  autoFocus?:boolean,
  /**
   * 输入框是否有边框
   * */
  bordered?:boolean,
  /**
   * 是否禁用交互
   * */
  disabled?:boolean,
  /**
   * 默认值
   * */
  defaultValue?:number,
  /**
   * 当前值
   * */
  value?:number,
  /**
   * 最大值
   * */
  max?:number,
  /**
   * 最小值
   * */
  min?:number,
  /**
   * 每次改变步数，可以为小数
   * */
  step?:number,
  /**
   * 解析显示值以验证数字
   * */
  parser?: (displayValue: string | undefined) => number,
  /**
   * 转换“值”以显示在输入中显示的值
   * */
  formatter?: (value: number | undefined) => string,
  /**
   * `formatter`的语法糖。显示的配置精度。
   * */
  precision?: number,
  /**
   * `formatter`的语法糖。配置显示的小数点分隔符。
   * */
  decimalSeparator?: string,
  /**
   * 输入框的高度类型，如果是 undefined ，则为 middle: 32px； small:24px middle:32px large:40px
   * */
  size?:ARSizeType,
  /**
   * 输入内容发生变化的回调
   * */
  onInput?: (text: string) => void,
  /**
   * 值发生变化的回调
   * */
  onChange?: (value: number) => void,
  /**
   * 按下回车的回调
   * */
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>,
  /**
   * 点击上下箭头的回调
   * */
  onStep?: (value: number, info: {
    offset: number;
    type: 'up' | 'down';
  }) => void,
  /**
   * 自定义前缀
   * */
  addonBefore?:string,
  /**
   * 自定义后缀
   * */
  addonAfter?:string,
}

export const ARInputNumber:React.FC<ARInputNumberProps> = ({...props}) => {

  const {style = {},addonBefore,addonAfter,onStep,...other} = props;
  console.log(other);
  const {size = 'middle'} = other;

  return (
    <div
      className={styles.index}
      style={{
        ...style,
        height:'small' === size ? '24px' : (('large' === size) ? '40px' : '32px')
      }}
    >
      {
        !!addonBefore &&
        <div
          className={styles.addonBefore}
          style={{
            fontSize: 'small' === size ? '14px' : (('large' === size) ? '16px' : '14px'),
            fontWeight:400,
          }}
        >
          {addonBefore}
        </div>
      }
      <InputNumber<number>
        style={{
          width:'100%'
        }}
        {...other}
        onStep={(value:number, info)=>{
          if (onStep) {
            const infoRes = Object.create({});
            infoRes['type'] = info.type;
            infoRes['offset'] = info.offset;
            onStep(value,infoRes);
          }
        }}
      />
      {
        !!addonAfter &&
        <div
          className={styles.addonBefore}
          style={{
            fontSize: 'small' === size ? '14px' : (('large' === size) ? '16px' : '14px'),
            fontWeight:400,
          }}
        >
          {addonAfter}
        </div>
      }
    </div>
  )
}
