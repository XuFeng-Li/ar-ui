import React, {CSSProperties, Fragment, useState} from 'react';
import {simplifyFileName, isFn, trimSpace} from '@ar/util'

/**
 * 参数是否为 0
 * @param {number} val 传入的参数
 * */
const isZero = (val?: number) => {
  if (val === undefined) return false;
  return `${val}` === '0'
}

/**
 * @typedef {object} SquareMeterInfoProps 定义平方米信息的组件参数
 * @property {string} info 平方米信息
 * */
export interface SquareMeterInfoProps {
  /**
   * 平方米数据
   * @property {string} info
   * */
  info?: string
}

/**
 * @typedef {React.FC<SquareMeterInfoProps>>} 定义平方米信息的组件
 * @param {SquareMeterInfoProps} props 平方米信息参数
 * */
export const SquareMeterInfo: React.FC<SquareMeterInfoProps> = ({...props}) => {
  const {info} = props;
  return (<span>{info || '---'}&nbsp;{info && '㎡'}</span>)
}

export interface ARHouseTypeKeyMap {
  bedroomNum?: string,
  livingRoomNum?: string,
  kitchenNum?: string,
  bathroomNum?: string,
  balconyNum?: string
}

const defaultKayMap: ARHouseTypeKeyMap = {
  bedroomNum: 'bedroomNum',
  livingRoomNum: 'livingRoomNum',
  kitchenNum: 'kitchenNum',
  bathroomNum: 'bathroomNum',
  balconyNum: 'balconyNum'
};

export interface HouseTypeProps {
  data?: any,
  map?: ARHouseTypeKeyMap
}

export const HouseType: React.FC<HouseTypeProps> = ({...props}) => {
  const {data, map = {}} = props;
  if (!data || typeof data === 'object') {
    return (<span/>);
  }
  const keyMap: ARHouseTypeKeyMap = {...defaultKayMap, ...map};
  const bedroom = data[keyMap.bedroomNum!] || isZero(data[keyMap.bedroomNum!]) ? data[keyMap.bedroomNum!] : '--'
  const livingRoom = data[keyMap.livingRoomNum!] || isZero(data[keyMap.livingRoomNum!]) ? data[keyMap.livingRoomNum!] : '--'
  const kitchen = data[keyMap.kitchenNum!] || isZero(data[keyMap.kitchenNum!]) ? data[keyMap.kitchenNum!] : '--'
  const bathroom = data[keyMap.bathroomNum!] || isZero(data[keyMap.bathroomNum!]) ? data[keyMap.bathroomNum!] : '--'
  const balconyNum = data[keyMap.balconyNum!] || isZero(data[keyMap.balconyNum!]) ? data[keyMap.balconyNum!] : '--'
  return (<span>{`${bedroom}室${livingRoom}厅${kitchen}厨${bathroom}卫${balconyNum}阳台`}</span>)
}

export interface ARAreaKeyMap {
  provinceName?: string,
  cityName?: string,
  districtName?: string
}

const defaultAreaKayMap: ARAreaKeyMap = {
  provinceName: 'provinceName',
  cityName: 'cityName',
  districtName: 'districtName'
};
const defaultAreaKayMapTwo: ARAreaKeyMap = {
  provinceName: 'province',
  cityName: 'city',
  districtName: 'district'
};

export interface AreaInfoProps {
  data?: any,
  map?: ARAreaKeyMap,
  address?: string,
  mode?: 'keyNoName' | string,
}

export const AreaInfo: React.FC<AreaInfoProps> = ({...props}) => {
  const {data, map = {}, address, mode = 'keyNoName'} = props;
  let keyMap = {...defaultAreaKayMap, ...map};
  if (mode === 'keyNoName') {
    keyMap = {...defaultAreaKayMapTwo, ...map}
  }
  const province = data[keyMap.provinceName!] ? data[keyMap.provinceName!] : '--'
  const city = data[keyMap.cityName!] ? data[keyMap.cityName!] : '--'
  const district = data[keyMap.districtName!] ? data[keyMap.districtName!] : ''  // 区可能没有
  return (<span>{`${province}${city}${district}`}&nbsp;&nbsp;{address || ''}</span>)
}

export interface UpLoadInfoProps {
  noHref: boolean,
  style?: CSSProperties,
  data?: string | string[],
}

export const UpLoadInfo: React.FC<UpLoadInfoProps> = ({...props}) => {
  const {noHref, style = {}} = props;
  let {data} = props;
  if (!data || !data.length) return null;
  if (typeof data === 'string') data = [data]
  return (
    <Fragment>
      {
        data.map((ele, i) => {
          let extendStyle = Object.create({});
          if (i) {
            extendStyle.marginLeft = '15px'
          }
          extendStyle = {...extendStyle, ...style}
          if (noHref) {
            extendStyle.target = '_blank'
          }
          return (
            <a
              href={noHref ? 'javascript:void(0);' : ele}
              key={-i}
              rel="noopener noreferrer">
              <img
                src={ele}
                alt='pic'
                width='86px'
                style={{...extendStyle}}
              />
            </a>)
        })
      }
    </Fragment>)
}

export interface VideoListProps {
  style?: CSSProperties,
  list?: string | string[]
}

export const VideoList: React.FC<VideoListProps> = ({...props}) => {
  const {style = {}} = props;
  let {list} = props;
  if (!list || !list.length) return null;
  if (typeof list === 'string') list = [list]
  return (
    <Fragment>
      {
        list.map((ele, i) => {
          let extendStyle = Object.create({});
          extendStyle.width = 160;
          extendStyle.height = 120;
          extendStyle.style = Object.create({});
          if (i) {
            extendStyle.style.marginLeft = '15px'
          }
          extendStyle = {...extendStyle, ...style}
          return (
            <video
              key={ele}
              style={{display: 'inline-block', ...extendStyle}}
              src={ele}
              controls
            />
          )
        })
      }
    </Fragment>)
}

export interface MainPicProps {
  style?: CSSProperties,
  url?: string,
  isPrivate?: boolean,
}

export const MainPic: React.FC<MainPicProps> = ({...props}) => {
  const {style = {}, url, isPrivate} = props;
  const {width = 100, height = 86} = style;
  const w = `${width}`.replace(/px/, '');
  const h = `${height}`.replace(/px/, '');
  if (url && isPrivate) {
    return (
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank">
        <img
          src={`${url}`}
          alt='pic'
          height='100px'
          width='86px'
          style={{...style}}
        />
      </a>
    )
  }
  if (url) {
    return (
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank">
        <img
          src={`${url}?x-oss-process=image/resize,m_fixed,h_${h},w_${w}`}
          alt='pic'
          height='100px'
          width='86px'
          style={{...style}}
        />
      </a>
    )
  }
  return (
    <a
      href='javascript:void(0);'
      rel="noopener noreferrer"
      target="_blank">
      <img
        src='https://asman-img.oss-cn-hangzhou.aliyuncs.com/noPic_0e7bffac7958f603a8b37fe3cda07499.png'
        alt='pic'
        height='100px'
        width='86px'
        style={{...style}}
      />
    </a>
  )
}

export interface UploadPreviewProps {
  style?: CSSProperties,
  innerStyle?: CSSProperties,
  params?: any,
  height: number,
  value: any,
  list?: any[],
}

export const UploadPreview: React.FC<UploadPreviewProps> = ({...props}) => {
  const {value, height} = props;
  // eslint-disable-next-line prefer-const
  let {list = [], params = {}, style = {}, innerStyle = {}, ...rest} = props;

  if (!list || !list.length) {
    list = value;
  }
  if (!list) return null;
  const showImagePreview = () => {
    const tempWindow: any = window;
    // eslint-disable-next-line no-underscore-dangle
    tempWindow['g_app']['_store'].dispatch({
      type: 'global/showImagePreviewVisiable',
      payload: {list, params}
    })
    // eslint-disable-next-line no-underscore-dangle
    // window.g_app._store.dispatch({
    //   type: 'global/showImagePreviewVisiable',
    //   payload: {list, params}
    // });
  }

  innerStyle = height == null ? {...innerStyle} : {...innerStyle, height}

  return (
    <div {...rest} style={{...style}} className='poi tc' onClick={() => {
      showImagePreview()
    }}>
      {params.type === 'video' ? <VideoList list={list[0]} style={{...innerStyle}}/> :
        <UpLoadInfo style={{...innerStyle}} noHref data={list[0]}/>}
      <div className='bc tc'>共{list.length}{params.type === 'video' ? '个视频' : '张图片'}</div>
    </div>
  )
}

export interface UrlLinkProps {
  list?: string[] | string
}

export const UrlLink: React.FC<UrlLinkProps> = ({...props}) => {
  let {list} = props;
  if (!list || list.length <= 0) return null;
  if (typeof list === 'string') {
    list = [list]
  }
  // eslint-disable-next-line consistent-return
  return (
    <Fragment>
      {
        list.map(ele => {
          const url = simplifyFileName(ele, 1);
          return <div><a href={ele} rel="noopener noreferrer" target="_blank">{url}</a></div>
        })
      }
    </Fragment>
  )
}

export interface BlankLinkProps {
  title?: string,
  href: string,
}

export const BlankLink: React.FC<BlankLinkProps> = ({...props}) => {
  const {href, title} = props;
  return <a href={href} rel="noopener noreferrer" target="_blank">{title || href}</a>
}

export interface TitleInfoProps {
  info: string,
  len?: number,
}

export const TitleInfo: React.FC<TitleInfoProps> = ({...props}) => {
  const {len, info, ...rest} = props;
  let tit = info;
  if (info.length && len && info.length >= len) {
    tit = `${tit.substring(0, len)}...`;
  }
  return <span {...rest} title={info}>{tit}</span>
}

export interface BuleWrapperProps {
  info?: string,
  text?: string,
  color?: string
}

export const BuleWrapper: React.FC<BuleWrapperProps> = ({...props}) => {
  const {info, text, color = '#0066FF'} = props;
  if (!info) return null;
  return <span><span style={{color}}>{info}</span>{text}</span>
}

export interface BuleProps {
  info?: string,
  color?: string
}

export const Bule: React.FC<BuleProps> = ({...props}) => {
  const {info, color = '#0066FF'} = props;
  if (!info) return null;
  return <span style={{color}}>{info}</span>
}

export interface RedProps {
  info?: string,
  color?: string
}

export const Red: React.FC<RedProps> = ({...props}) => {
  const {info, color = '#FF0000'} = props;
  if (!info) return null;
  return <span style={{color}}>{info}</span>
}


export const getColorWrapper = (props: { info: any }) => {
  const {info} = props;
  return info ? <BuleWrapper {...props} /> : null;
}

export const ShowMoreInfo = (props: { info?: string, len: number }) => {
  const {info, len} = props;
  let initValue = '';
  let needSubstring = false;
  if (info && info.length > len) {
    initValue = `${info.substring(0, len)}...`;
    needSubstring = true;
  } else {
    initValue = info || '';
  }
  const [showInfo, setShowInfo] = useState(initValue);

  const isShowAll = () => showInfo === info

  const showMore = () => {
    setShowInfo(isShowAll() ? initValue : (info || ''))
  }

  return (
    <span>{showInfo} {needSubstring ?
      <span className='likeA' onClick={() => showMore()}>{isShowAll() ? '收起' : '更多'}</span> : null} </span>
  )
}

export interface HouseDescProps {
  buildingNo?: string,
  unitNo?: string,
  roomNo?: string,
}

/**
 * xx幢xxx单元xxxx
 * @param {*} props
 */
export const HouseDesc: React.FC<HouseDescProps> = ({...props}) => {
  const {buildingNo, unitNo, roomNo} = props;
  return (<span>{`${buildingNo || '--'}幢${unitNo || '--'}单元${roomNo || '--'}室`}</span>)
}


export const SomeRed = (props: { info: string, keyWord: string }) => {
  const {info, keyWord} = props;
  if (!info || !keyWord) return info;
  const aTrimkey = trimSpace(keyWord);
  const subIndex = info.indexOf(aTrimkey);
  if (subIndex === -1) return info;
  const start = info.substring(0, subIndex);
  const end = info.substring(subIndex + aTrimkey.length);
  return (<span>{start}<span style={{color: 'red'}}>{keyWord}</span>{end}</span>)
}

export interface LRInfoProps {
  title?: string,
  info?: number,
  width?: number,
  hasColon?: boolean,
  len?: number,
  onClick?: Function,
  titleStyle?: CSSProperties,

}

export const LRInfo: React.FC<LRInfoProps> = ({...props}) => {
  const {title, info, width, hasColon = true, onClick, len} = props;
  let {titleStyle = {}} = props;
  if (len) {
    titleStyle = {...titleStyle, width: `${30 + 12 * len}px`, textAlign: 'right'}
  }
  const titleProps: any = {
    style: width ? {...titleStyle, width, textAlign: 'right'} : {...titleStyle}
  }
  let infoProps = {}
  if (isFn(onClick)) {
    infoProps = {onClick}
  }
  if (!title) {
    return <div {...infoProps}>{info}</div>
  }
  return (
    <div className='df'>
      <div className='g0' {...titleProps}>
        {title || ' -- '}&nbsp;{hasColon ? ':' : ''} &nbsp;
      </div>
      <div className='df flex1' {...infoProps}>{info !== 0 ? info || '---' : info}</div>
    </div>
  )
}

export interface BuildingAreaProps {
  data?: {
    buildingName?: string,
    houseCode?: string,
    buildingNo?: string,
    unitNo?: string,
    roomNo?: string
  }
}

export const BuildingArea: React.FC<BuildingAreaProps> = ({...props}) => {
  const {data} = props;
  const {buildingName, houseCode, buildingNo, unitNo, roomNo} = data || {}
  return <span>{`${buildingName || '--'}${houseCode ? `${houseCode}户型` : ''}`}
    <br/> {buildingNo ? `${buildingNo || '--'}栋${unitNo || '--'}单元${roomNo || '--'}室` : ''}</span>
}