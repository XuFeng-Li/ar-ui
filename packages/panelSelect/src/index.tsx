import React, {ReactNode} from 'react';
import {Select} from "antd";

export interface ARPanelSelectOption {
  value: string,
  label: string,
}

export interface ARPanelSelectProps {
  /**
   * 选填参数，自定义前缀
   * */
  addonAfter?: string,
  /**
   * 选填参数，自定义后缀
   * */
  addonBefore?: string,
  /**
   * 选填参数，自定义子选项。自选项的优先级高于 children，如果自选项有值，则只显示自选项的内容
   * */
  dataSource?: ARPanelSelectOption[],
  /**
   * 选填参数，自定义子组件
   * */
  children?: ReactNode,
  /**
   * 是否禁用
   * */
  disabled?:boolean,
  /**
   * 被选中时调用，参数为选中项的 value (或 key) 值
   * */
  onSelect?: (value: string) => void;
  /**
   * 	选中 option，或 input 的 value 变化时，调用此函数
   * */
  onChange?: (value: string) => void;
}

export const ARPanelSelect: React.FC<ARPanelSelectProps> = ({...props}) => {
  let tempChildren = props.children;
  if (props.dataSource && props.dataSource.length >= 1) {
    tempChildren = props.dataSource.map((ele, index) => {
      return <Select.Option
        key={index.toString()}
        value={ele.value}
      >
        {ele.label}
      </Select.Option>;
    });
  }
  return (
    <div
      style={{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:"flex-start"
      }}
    >
      {
        props.addonBefore &&
        <div
          style={{
            padding:"0 5px",
            flex:"0 0 auto"
          }}
        >
          {props.addonBefore}
        </div>
      }
      <div style={{width:'100%'}}>
        <Select
          disabled={props.disabled}
          style={{width:'100%'}}
          onSelect={props.onSelect}
          onChange={props.onChange}
        >{tempChildren}</Select>
      </div>
      {
        props.addonAfter &&
        <div
          style={{
            padding:"0 5px",
            flex:"0 0 auto"
          }}
        >
          {props.addonAfter}
        </div>
      }
    </div>
  )
}