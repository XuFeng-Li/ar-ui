import React, {CSSProperties, ReactNode} from 'react';
import {Card,Avatar} from 'antd';

import 'antd/dist/antd.css';

export type ARCardSize = 'default' | 'small';

// @ts-ignore
import styles from './index.module.scss';

const {Meta} = Card;

export interface ARCardProps {
  /**
   * 卡片外部容器的样式
   * */
  style?:CSSProperties,
  /**
   * 卡片标题
   * */
  title?:string,
  /**
   * 当卡片内容还在加载中时，可以用 loading 展示一个占位
   * */
  loading?:boolean,
  /**
   * card 的尺寸
   * */
  size?:ARCardSize,
  /**
   * 卡片右上角的操作区域
   * */
  extra?:ReactNode,
  /**
   * 鼠标移过时可浮起
   * */
  hoverable?:boolean,
  /**
   * 是否有边框
   * */
  bordered?:boolean,
  /**
   * 卡片操作组，位置在卡片底部
   * */
  actions?:ReactNode[],
  /**
   * 支持封面、头像、标题和描述信息
   * */
  meta?:ARCardMeta,
}

export interface ARCardMeta {
  /**
   * 容器类名
   * */
  classname?:string,
  /**
   * 定义容器类名的样式
   * */
  styles?:CSSProperties,
  /**
   * 头像/图标
   * */
  avatar?:string,
  /**
   * 标题内容
   * */
  title?:string,
  /**
   * 描述内容
   * */
  description?:string,
}

export const ARCard:React.FC<ARCardProps> = ({...props}) => {
  const {style,children,meta,...other} = props;
  const {avatar,...metaProps} = meta || {};
  return (
    <div
      className={styles.cardIndex}
      style={{
        ...style,
      }}
    >
      <Card
        {...other}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        {
          meta &&
          <Meta
            avatar={<Avatar src={avatar} />}
            {...metaProps}
          />
        }
        {children}
      </Card>
    </div>
  )
}