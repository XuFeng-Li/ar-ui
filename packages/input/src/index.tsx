
import React from 'react';
import {Input} from 'antd';

export interface ARInputProps {

}

export const ARInput:React.FC<ARInputProps> = ({...props}) => {
  return (
    <Input {...props} />
  )
}