import React from "react";
import {Radio} from "antd";
import {RadioChangeEvent} from "antd/lib/radio/interface";

import "antd/dist/antd.css";
// @ts-ignore
import styles from "./index.module.scss";

export type ARRadioButton = 'outline' | 'solid';
export type ARRadioSize = 'large' | 'middle' | 'small';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;


export interface ARButtonRadioProps {
  options: ARButtonRadioOption[],
  buttonStyle?: ARRadioButton,
  disabled?: boolean,
  size?: ARRadioSize,
  value?: string,
  defaultValue?: string,
  onChange?: (option: ARButtonRadioOption) => void,
}

export interface ARButtonRadioOption {
  /**
   * 选项的值标记
   * */
  value: string,
  /**
   * 选项的标签
   * */
  label: string,
  /**
   * 选项是否可交互
   * */
  disabled?: boolean,
}

export const ARButtonRadio: React.FC<ARButtonRadioProps> =
  ({
     options = [],
     buttonStyle = 'outline',
     onChange,
     ...props
   }) => {
    const onChangeHandler = (option:ARButtonRadioOption) => (_: RadioChangeEvent)=>{
      if (onChange) {
        onChange(option);
      }
    }
    return (
      <RadioGroup
        className={styles.index}
        {...props}
        optionType="button"
        buttonStyle={buttonStyle}
      >
        {
          options && options.length >= 1 &&
          options.map((option, index) => {
            const {label: optionLabel, ...otherProps} = option;
            return (
              <RadioButton
                {...otherProps}
                key={`radio-group-value-options-${option.value}-${(10000 + index)}`}
                value={option.value}
                onChange={onChangeHandler(option)}
              >
                {optionLabel}
              </RadioButton>
            )
          })
        }
      </RadioGroup>
    )
  }