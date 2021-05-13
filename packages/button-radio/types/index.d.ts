import React from 'react';

declare type ARRadioButton = 'outline' | 'solid';
declare type ARRadioSize = 'large' | 'middle' | 'small';
interface ARButtonRadioProps {
    options: ARButtonRadioOption[];
    buttonStyle?: ARRadioButton;
    disabled?: boolean;
    size?: ARRadioSize;
    value?: string;
    defaultValue?: string;
    onChange?: (option: ARButtonRadioOption) => void;
}
interface ARButtonRadioOption {
    /**
     * 选项的值标记
     * */
    value: string;
    /**
     * 选项的标签
     * */
    label: string;
    /**
     * 选项是否可交互
     * */
    disabled?: boolean;
}
declare const ARButtonRadio: React.FC<ARButtonRadioProps>;

export { ARButtonRadio, ARButtonRadioOption, ARButtonRadioProps, ARRadioButton, ARRadioSize };
