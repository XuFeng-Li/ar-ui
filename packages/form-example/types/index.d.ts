import React from 'react';
import { ISchema } from '@formily/json-schema';

interface ARFormExampleProps {
    schema: ISchema;
    children?: any;
}
declare const ARFormExmaple: React.FC<ARFormExampleProps>;

export { ARFormExampleProps, ARFormExmaple };
