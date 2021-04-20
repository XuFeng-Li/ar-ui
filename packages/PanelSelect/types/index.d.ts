import React, { ReactNode } from 'react';

interface ARPanelSelectOption {
    value: string;
    label: string;
}
interface ARPanelSelectProps {
    /**
     * 选填参数，自定义前缀
     * */
    addonAfter?: string;
    /**
     * 选填参数，自定义后缀
     * */
    addonBefore?: string;
    /**
     * 选填参数，自定义子选项。自选项的优先级高于 children，如果自选项有值，则只显示自选项的内容
     * */
    dataSource?: ARPanelSelectOption[];
    /**
     * 选填参数，自定义子组件
     * */
    children?: ReactNode;
    /**
     * 是否禁用
     * */
    disabled?: boolean;
    /**
     * 被选中时调用，参数为选中项的 value (或 key) 值
     * */
    onSelect?: (value: string) => void;
    /**
     * 	选中 option，或 input 的 value 变化时，调用此函数
     * */
    onChange?: (value: string) => void;
}
declare const ARPanelSelect: React.FC<ARPanelSelectProps>;

export { ARPanelSelect, ARPanelSelectOption, ARPanelSelectProps };
