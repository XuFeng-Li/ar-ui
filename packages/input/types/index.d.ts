import React, { ReactNode } from 'react';

declare type ARInputType = 'large' | 'middle' | 'small';
interface ARInputProps {
    /**
     * 输入框的 id
     * @property {string} id
     * */
    id?: string;
    /**
     * 带标签的 input，设置后置标签
     * @property {ReactNode} addonAfter
     * */
    addonAfter?: ReactNode;
    /**
     * 带标签的 input，设置前置标签
     * @property {ReactNode} addonBefore
     * */
    addonBefore?: ReactNode;
    /**
     * 带有前缀图标的 input
     * @property {ReactNode} prefix
     * */
    prefix?: ReactNode;
    /**
     * 带有后缀图标的 input
     * @property {ReactNode} suffix
     * */
    suffix?: ReactNode;
    /**
     * 输入框默认内容
     * @property {string} defaultValue
     * */
    defaultValue?: string;
    /**
     * 输入框内容
     * @property {string} value
     * */
    value?: string;
    /**
     * 输入框内容变化时的回调
     * @property {(value?:string)=>void} onChange
     * */
    onChange?: (value?: string) => void;
    /**
     * 按下回车的回调
     * @property {(value?:string)=>void} onPressEnter
     * */
    onPressEnter?: (value?: string) => void;
    /**
     * 是否有边框
     * @property {boolean} bordered
     * */
    bordered?: boolean;
    /**
     * 是否禁用状态，默认为 false
     * @property {boolean} disabled
     * */
    disabled?: boolean;
    /**
     * 最大长度
     * @property {number} maxLength
     * */
    maxLength?: number;
    /**
     * 控件大小。注：标准表单内的输入框大小限制为 large
     * type ARInputType = 'large' | 'middle' | 'small'
     * @property {ARInputType} size
     * */
    size?: ARInputType;
    type?: string;
    /**
     * 可以点击清除图标删除内容
     * @property {boolean} allowClear
     * */
    allowClear?: boolean;
    /**
     * 当表单控件为空时，控件中显示的内容
     * @property {string} placeholder
     * */
    placeholder?: string;
}
declare const ARInput: React.FC<ARInputProps>;

export { ARInput, ARInputProps };
