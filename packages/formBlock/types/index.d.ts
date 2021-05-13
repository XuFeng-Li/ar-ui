import React, { CSSProperties, ReactNode } from 'react';

interface ARFormBlockProps {
    style?: CSSProperties;
    title?: string;
    children?: ReactNode;
}
declare const ARFormBlock: React.FC<ARFormBlockProps>;

export { ARFormBlock, ARFormBlockProps };
