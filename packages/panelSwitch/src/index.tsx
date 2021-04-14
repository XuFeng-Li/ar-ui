import React from 'react';
import {Switch, SwitchProps} from 'antd';

const PanelSwitch:React.FC<SwitchProps> = ({...props})=>{
  return (
    <Switch {...props} />
  )
}

export default PanelSwitch;