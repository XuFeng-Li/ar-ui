import React from 'react';

interface ARCustomImgPorps {
    /**
     *  图片地址
     */
    src: string;
    /**
     *  如果是oss图片，指定oss后缀可以进行 响应的处理
     */
    ossProcess?: string;
    /**
     *  默认图片
     *  */
    defaultImg?: string;
    /**
     * 指定图片的显示宽度
     * */
    width?: number;
    /**
     * 指定图片的显示高度
     * */
    height?: number;
}
declare const ARCustomImg: React.FC<ARCustomImgPorps>;

export { ARCustomImg, ARCustomImgPorps };
