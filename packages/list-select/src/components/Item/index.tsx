import React, {CSSProperties} from "react";
import {ARCustomImg} from "@tytools/customimg";

// @ts-ignore
import styles from "./index.module.scss";

export interface ARCloudRaceInfo {
  img:string,
  name:string,
  id:string,
}

export interface ARItemProps {
  style?:CSSProperties,
  item:ARCloudRaceInfo,
  onClick?:(item:ARCloudRaceInfo)=>void,
}
export const ARItem:React.FC<ARItemProps> = ({...props}) => {
  const clickItemHandler = ()=>{
    const {item,onClick} = props;
    onClick && onClick(item);
  }
  return (
    <div
      className={styles.cloudRaceItem}
      style={{
        ...props.style || {},
      }}
      onClick={clickItemHandler}
    >
      <div
        className={styles.itemImg}
      >
        <ARCustomImg
          src={props.item.img}
          ossProcess="x-oss-process=image/resize,m_fixed,h_114,w_114"
        />
      </div>
      <div className={`${styles["itemNameCon"]} ellipsis`} title={props.item.name}>
        <span className={styles.itemName}>{props.item.name}</span>
      </div>
    </div>
  )
}