import React from 'react';
import {Switch} from 'antd';

export declare interface ARPanelSwitchProps {
  /**
   *  Switch 组件类名
   */
  className?: string,
  /**
   *  开关大小，可选值：default small
   */
  size?: 'small' | 'default',
  /**
   *  指定当前是否选中
   */
  checked?: boolean,
  /**
   *  初始是否选中
   */
  defaultChecked?: boolean,
  /**
   *  变化时回调函数
   */
  onChange?: (checked: boolean, event: MouseEvent) => void,
  /**
   *  点击时回调函数
   */
  onClick?: (checked: boolean, event: MouseEvent) => void,
  /**
   *  是否禁用
   */
  disabled: boolean,
  /**
   *  加载中的开关
   */
  loading: boolean,
}

/**
 *  这是一个 Switch 按钮组件
 */
export const PanelSwitch: React.FC<ARPanelSwitchProps> =
  ({...props}) => {
    return (
      <Switch
        {...props}
        autoFocus={false}
        checkedChildren={""}
        unCheckedChildren={""}
      />
    )
  }
/**
 * 此处组件不要使用默认暴露，否则 Storybook 会无法正确获取对组件属性的注释自动生成文档
 * */
// export default PanelSwitch;
/**
 {
    size='default',
    defaultChecked= undefined,
    checked= true,
    disabled= false,
    loading= false,
    onClick= undefined,
    onChange= undefined,
     ...props
  }
 * */