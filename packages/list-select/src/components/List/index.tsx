import React, {CSSProperties} from "react";
import {Pagination} from "antd";

import {ARItem,ARItemInfo} from "../Item";

// @ts-ignore
import styles from "./index.module.scss"

export interface ARListInfo {
  list:ARItemInfo[],
}

export interface ARListProps {
  style?:CSSProperties,
  data:ARListInfo,
}

export const ARList:React.FC<ARListProps> = ({...props}) => {
  return (
    <section
      className={styles.cloudRaceList}
      style={{
        ...props.style || {},
      }}
    >
      <div
        className={styles.filters}
      >
        {/*<Form>*/}
        {/*  <Form.Item>*/}

        {/*  </Form.Item>*/}
        {/*</Form>*/}
      </div>
      <div
        className={styles.listWrap}
      >
        <ul className={styles.list}>
          {
            props.data && props.data.list && props.data.list.length >= 1 &&
              props.data.list.map((item,_)=>{
                return (
                  <li key={item.id}>
                    <ARItem item={item}/>
                  </li>
                )
              })
          }
        </ul>
      </div>
      <div
        className={styles.pager}
      >
        <Pagination
          simple
          defaultCurrent={1}
          current={1}
          total={10}
          onChange={()=>{

          }}
        />
      </div>
    </section>
  )
}