import React from 'react';

export interface ARCustomImgPorps {
  /**
   *  图片地址
   */
  src:string,
  /**
   *  如果是oss图片，指定oss后缀可以进行 响应的处理
   */
  ossProcess?:string,
  /**
   *  默认图片
   *  */
  defaultImg?:string,
  /**
   * 指定图片的显示宽度
   * */
  width?:number,
  /**
   * 指定图片的显示高度
   * */
  height?:number,
}
const tempDefaultImg = "https://img.asman.com.cn/assets/1567388823451_58545.png";

export const ARCustomImg:React.FC<ARCustomImgPorps> = ({defaultImg = tempDefaultImg,...props}) => {

  // const [flag,setFlag] = useState(false);

  const onError = ()=>{
    // if (flag) return;
    // setFlag(true);
  };

  const { src, ossProcess, width, height , ...others } = props;
  let imgSrc = defaultImg;
  if (src) {
    imgSrc = `${src}?${ossProcess}`
  }
  return (
    <img
      src={imgSrc}
      alt="img not found"
      onError={onError}
      defaultValue={defaultImg}
      {...others}
      width={width}
      height={height}
    />
  );
}