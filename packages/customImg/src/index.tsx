import React, { useState } from 'react';

export interface CustomImgPorps {
  src:string,
  ossProcess:string,
  defaultImg:string,
}
const tempDefaultImg = "https://img.asman.com.cn/assets/1567388823451_58545.png?x-oss-process=image/resize,m_fixed,h_114,w_114";
const CustomImg:React.FC<CustomImgPorps> = ({defaultImg = tempDefaultImg,...props}) => {

  const [flag,setFlag] = useState(false);

  const onError = ()=>{
    if (flag) return;
    setFlag(true);
  };

  const { src, ossProcess , ...others } = props;
  const imgSrc = `${src}?${ossProcess}`
  return (
    <img
      src={imgSrc}
      alt="img not found"
      onError={onError}
      {...others}
    />
  );
}

export default CustomImg;