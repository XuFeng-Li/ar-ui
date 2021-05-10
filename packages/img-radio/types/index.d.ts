import React, { CSSProperties } from 'react';

interface ARImgRadioProps {
    style?: CSSProperties;
    dataSource: ARImgRadioItemProps[];
    onChanged?: (radioItem: ARImgRadioItemProps, index?: number) => void;
}
interface ARImgRadioItemProps {
    img: string;
    key: string | number;
    name: string;
    value: string;
    needOssProcess?: boolean;
}
declare const ARImgRadio: React.FC<ARImgRadioProps>;

export { ARImgRadio, ARImgRadioItemProps, ARImgRadioProps };
