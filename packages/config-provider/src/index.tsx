import React from "react";

export interface ARConfigContextInfo {
  fetcher?:any,
}
const ARConfigContext = React.createContext<ARConfigContextInfo>({});

export interface ARConfigProviderProps {
  children?:any,
  fetcher?:any,
}


const ARConfigProvider:React.FC<ARConfigProviderProps> = ({...props})=>{
  const {children,fetcher} = props;
  const config = { fetcher };
  return (
    <ARConfigContext.Provider value={config}>
      {children}
    </ARConfigContext.Provider>
  )
}

export const ConfigConsumer = ARConfigContext.Consumer;
export default ARConfigProvider;