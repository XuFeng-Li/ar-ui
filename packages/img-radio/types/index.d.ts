import React, { CSSProperties } from 'react';

interface ARImgRadioProps {
    /**
     * 组件样式
     * */
    style?: CSSProperties;
    /**
     * 组件数据列表
     * */
    dataSource: ARImgRadioItemProps[];
    /**
     * 选择对象发生改变的回调函数
     * */
    onChanged?: (radioItem: ARImgRadioItemProps, index?: number) => void;
    /**
     * 默认值
     * */
    initialValue?: string;
}
interface ARImgRadioItemProps {
    img: string;
    key: string | number | undefined;
    name: string;
    value: string;
    needOssProcess?: boolean;
}
declare const ARImgRadio: React.FC<ARImgRadioProps>;

export { ARImgRadio, ARImgRadioItemProps, ARImgRadioProps };
