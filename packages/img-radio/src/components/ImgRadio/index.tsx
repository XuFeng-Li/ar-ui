import React, {CSSProperties, useState} from 'react';
import {ARCustomImg} from '@ar/customimg';
import cs from 'classnames';
import 'antd/dist/antd.css';

// @ts-ignore
import styles from './index.module.scss';

export interface ARImgRadioProps {
  style?:CSSProperties,
  dataSource:ARImgRadioItemProps[],
  onChanged?:(radioItem:ARImgRadioItemProps,index?:number)=>void,
}

export interface ARImgRadioItemProps {
  img:string,
  key:string | number,
  name:string,
  value:string,
  needOssProcess?:boolean,
}

export const ARImgRadio:React.FC<ARImgRadioProps> = ({...props}) => {
  const [value,setValue] = useState<string | undefined>();
  const {style = {},dataSource,onChanged} = props;

  const handleRadioClicked = (radioItem:ARImgRadioItemProps,index:number)=> ()=>{
    if (radioItem.value === value) return;
    setValue(radioItem.value);
    if (onChanged) {
      onChanged(radioItem,index);
    }
  }
  return (
    <ul
      className={styles.radioList}
      style={{
        ...style,
      }}
    >
      {
        dataSource.map((item,index)=>{
          const {img,needOssProcess = false,name} = item;
          const radioItemClass = cs({
            [styles['radioItem']]: true,
            [styles['radioItem--active']]: value && value === item.value
          })
          const ossProcess = needOssProcess ? "x-oss-process=image/resize,m_fixed,h_72,w_72" : undefined;
          return (
            <li
              key={(10000 + index).toString()}
              className={radioItemClass}
              onClick={handleRadioClicked(item,index)}
            >
              <div className={styles.radioItemImg}>
                <ARCustomImg src={img} ossProcess={ossProcess} />
              </div>
              <div className={styles.radioItemDesc}>
                <span key={name}>{name}</span>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}