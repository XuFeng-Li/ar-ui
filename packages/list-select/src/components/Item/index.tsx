import React, {CSSProperties} from "react";
import {ARCustomImg} from "@ar/customimg";

// @ts-ignore
import styles from "./index.module.scss";

export interface ARItemInfo {
  img:string,
  name:string,
  id:string,
}

export interface ARItemProps {
  style?:CSSProperties,
  item:ARItemInfo,
  onClick?:(item:ARItemInfo)=>void,
}
export const ARItem:React.FC<ARItemProps> = ({...props}) => {

  return (
    <div
      className={styles.cloudRaceItem}
      style={{
        ...props.style || {},
      }}

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