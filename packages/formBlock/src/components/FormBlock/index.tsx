import React, {CSSProperties, ReactNode} from "react";

// @ts-ignore
import styles from './index.module.scss';

export interface ARFormBlockProps {
  style?:CSSProperties,
  title?:string,
  children?:ReactNode,
}

export const ARFormBlock:React.FC<ARFormBlockProps> = ({...props})=> {
  const {style = {},title,children} = props;
  console.log("ar form block - ",children);
  return (
    <div
      className={styles.blockIndex}
      style={{
        ...style,
      }}
    >
      <div className={styles.blockHeader}>
        {title}
      </div>
      <div className={styles.blockBody}>
        {children}
      </div>
    </div>
  )
}