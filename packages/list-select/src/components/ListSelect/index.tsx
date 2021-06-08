import React, {CSSProperties, useState, Fragment, UIEvent} from "react";
import {ConfigConsumer} from '@tytools/config-provider';
import {AxiosInstance} from "axios";
import {Drawer} from "antd";
import {PlusOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons";
import cs from "classnames";
import {ARList} from "../List";
import {ARCloudRaceInfo} from "../Item";

// @ts-ignore
import styles from "./index.module.scss";

export type ARPlacementType = "top" | "right" | "bottom" | "left";

export interface ARPropsParams {
  categoryId: string,
  categoryName: string,
}

export interface ARListSelectProps {
  style?: CSSProperties,
  className?: string,
  api:string,
  propsParams: ARPropsParams,
  fetcher?: AxiosInstance,
  value?: ARListSelectValue,
  placement?: ARPlacementType,
  onChange?: (newValue?: ARListSelectValue) => void,
}

export interface ARListSelectValue {
  itemInfo: ARCloudRaceInfo,
}
interface SearchFormPredicate {
  keyWords:string
}
interface CloudRaceResult {
  pageSize:number,
  pageNo:number,
  total:number,
  hasNext:boolean,
  list:ARCloudRaceInfo[],
}
const DefaultCloudRaceResult = {
  hasNext: false,
  pageNo: 0,
  pageSize: 10,
  total:0,
  list: [],
}

const ARListSelect: React.FC<ARListSelectProps> = ({...props}) => {

  const [value, setValue] = useState<ARListSelectValue | undefined>(props.value);
  const [isSelecting, setSelecting] = useState(false);
  const [cloudRaceRes,setCloudRaceRes] = useState<CloudRaceResult>(DefaultCloudRaceResult)
  const [_,setCloudRaceResSearchForm] = useState<SearchFormPredicate>({keyWords:""})

  const fetchCloudRaceList = async (params:{pageNo:number,pageSize?:number,keyWords?:string})=>{
    const {fetcher,api,propsParams} = props;
    try {
      if (!fetcher) {
        throw new Error('缺少请求参数，操作无效');
      }
      const res:CloudRaceResult = await fetcher.post(api,{
        ...propsParams,
        ...params
      });
      const {hasNext,pageSize,pageNo,total,list} = res;
      setCloudRaceRes({
        hasNext:hasNext || false,
        pageNo:pageNo || 1,
        pageSize:pageSize || 10,
        total:total || 1,
        list: list || [],
      });
    } catch (e) {
      console.log(e);
    }
  }

  const selectHandler = () => {
    setSelecting(true);
  }
  const editHandler = () => {
    setSelecting(true);
  }
  const deleteHandler = (ele: UIEvent) => {
    ele.stopPropagation();
    setValue(undefined);
    if (props && props.onChange) {
      props.onChange(undefined);
    }
  }
  const closeDrawerHandler = () => {
    setSelecting(false);
  }
  const cloudRaceFormSubmitHandler = async (predicate:SearchFormPredicate)=>{
    const params = {
      ...predicate,
      pageNo:1,
    }
    setCloudRaceResSearchForm(params);
    await fetchCloudRaceList(params);
  }
  const cloudRaceItemClickHandler = (item:ARCloudRaceInfo)=>{
    const {onChange} = props;
    const newValue = {
      itemInfo:item,
    }
    setValue(newValue);
    onChange && onChange(newValue);
    setSelecting(false);
  }
  const cloudRacePageChangeHandler = async (pageNo:number,pageSize?:number)=>{
    await fetchCloudRaceList({ pageNo,pageSize })
  }

  const {...rest} = props;
  const {className = ''} = rest;
  const continerCs = cs({
    [styles["container"]]: true,
    [className]: true,
  })
  const valueCs_empty = cs({
    [styles["item"]]: true,
    [styles["item-empty"]]: true,
  })
  const valueCs_valid = cs({
    [styles["item"]]: true,
    [styles["item--active"]]: true,
  });

  let displayName = props.propsParams.categoryName;
  if (value) {
    displayName = `${displayName}(${value.itemInfo.name})`
  }
  return (
    <div
      className={continerCs}
      style={{
        ...props.style || {}
      }}
    >
      <Fragment>
        {
          value === undefined
            ? (
              <div
                className={valueCs_empty}
                onClick={selectHandler}
              >
                <PlusOutlined/>
              </div>
            )
            : (
              <div
                className={valueCs_valid}
                onClick={selectHandler}
              >
                <div className={styles["item__hover"]}>
                  <EditOutlined className={styles["item__icon"]} onClick={editHandler}/>
                  <DeleteOutlined className={styles["item__icon"]} onClick={deleteHandler}/>
                </div>
                <div className={styles["item__img"]}>
                  <img src={value.itemInfo.img}/>
                </div>
                <p
                  className={styles["item__desc"]}
                  title={displayName}
                >
                  {displayName}
                </p>
              </div>
            )
        }
      </Fragment>
      {
        isSelecting && (
          <Drawer
            width="328px"
            bodyStyle={{paddingTop: 0, height: "calc(100% - 56px)"}}
            title={
              <div style={{textAlign: "center", fontSize: "18px"}}>
                样式选择
              </div>
            }
            placement={props.placement || "left"}
            visible={isSelecting}
            onClose={closeDrawerHandler}
          >
            <ARList
              data={cloudRaceRes}
              onFormSubmit={cloudRaceFormSubmitHandler}
              onPageChange={cloudRacePageChangeHandler}
              onItemClick={cloudRaceItemClickHandler}
            />
          </Drawer>
        )
      }
    </div>
  )
}

export default (props: ARListSelectProps) => {
  return (
    <ConfigConsumer>
      {(config) => {
        return <ARListSelect {...props} fetcher={config.fetcher}/>
      }}
    </ConfigConsumer>
  )
}