// import React from 'react';
import React from 'react';
import {Switch} from 'antd';

export type ARSwitchSize = 'small' | 'default';

export type ARSwitchChangeEventHandler = (checked: boolean, event: MouseEvent) => void;
export type ARSwitchClickEventHandler = ARSwitchChangeEventHandler;

export interface ARPanelSwitchProps {
  /**
   *  Switch 组件类名
   */
  className?: string,
  /**
   *  开关大小，可选值：default small
   */
  size?: ARSwitchSize,
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
  onChange?: ARSwitchChangeEventHandler,
  /**
   *  点击时回调函数
   */
  onClick?: ARSwitchClickEventHandler,
  /**
   *  是否禁用
   */
  disabled?: boolean,
  /**
   *  加载中的开关
   */
  loading?: boolean,
}

/**
 *  这是一个 Switch 按钮组件
 */
export const PanelSwitch: React.FC<ARPanelSwitchProps> =
  ({...props}) => {
    return (
      <div>
        <Switch
          {...props}
          autoFocus={false}
          checkedChildren={""}
          unCheckedChildren={""}
        />
      </div>
    )
  }