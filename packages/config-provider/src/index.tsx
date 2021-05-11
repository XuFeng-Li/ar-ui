import React from "react";

const ARConfigContext = React.createContext({});

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