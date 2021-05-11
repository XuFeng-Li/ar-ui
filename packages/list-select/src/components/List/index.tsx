import React, {CSSProperties} from "react";
import {Pagination,Form,Input} from "antd";

import {ARItem,ARCloudRaceInfo} from "../Item";

// @ts-ignore
import styles from "./index.module.scss"

export interface ARListInfo {
  list:ARCloudRaceInfo[],
  pageNo:number,
  total:number,
}

export interface ARListProps {
  style?:CSSProperties,
  data:ARListInfo,
  form?:any,
  onItemClick?:(item:ARCloudRaceInfo)=>void,
  onFormSubmit?:Function,
  onPageChange?:(pageNo:number,pageSize?:number)=>void
}

export const ARList:React.FC<ARListProps> = ({...props}) => {
  const {data:{list,pageNo,total},onItemClick} = props;
  const [form] = Form.useForm();
  const formChange = ()=>{
    const {onFormSubmit} = props;
    form.validateFields().then((value)=>{
      onFormSubmit && onFormSubmit(value);
    })
  }
  const submitHandler = ()=>{
    formChange();
  }
  const searchHandler = ()=>{
    formChange();
  }
  const pageChangeHandler = (pageNo:number,pageSize?:number)=>{
    const {onPageChange} = props;
    onPageChange && onPageChange(pageNo,pageSize);
  }

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
        <Form form={form} onFinish={submitHandler}>
          <Form.Item name={'keyWords'} rules={[]}>
            <Input.Search
              className={styles["list__search"]}
              placeholder="请输入族库名称"
              allowClear={true}
              onSearch={searchHandler}
            />
          </Form.Item>
        </Form>
      </div>
      <div
        className={styles.listWrap}
      >
        <ul className={styles.list}>
          {
            list && props.data.list.length >= 1 &&
              props.data.list.map((item,_)=>{
                return (
                  <li key={item.id}>
                    <ARItem item={item} onClick={onItemClick}/>
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
          current={pageNo || 1}
          total={total || 1}
          onChange={pageChangeHandler}
        />
      </div>
    </section>
  )
}