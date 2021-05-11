import React from 'react';

interface ARConfigContextInfo {
    fetcher?: any;
}
interface ARConfigProviderProps {
    children?: any;
    fetcher?: any;
}
declare const ARConfigProvider: React.FC<ARConfigProviderProps>;
declare const ConfigConsumer: React.Consumer<ARConfigContextInfo>;

export default ARConfigProvider;
export { ARConfigContextInfo, ARConfigProviderProps, ConfigConsumer };
