import React, { CSSProperties } from 'react';

interface SquareMeterInfoProps {
    /**
     * 平方米数据
     * @param {string} info
     * */
    info?: string;
}
declare const SquareMeterInfo: React.FC<SquareMeterInfoProps>;
interface ARHouseTypeKeyMap {
    bedroomNum?: string;
    livingRoomNum?: string;
    kitchenNum?: string;
    bathroomNum?: string;
    balconyNum?: string;
}
interface HouseTypeProps {
    data?: any;
    map?: ARHouseTypeKeyMap;
}
declare const HouseType: React.FC<HouseTypeProps>;
interface ARAreaKeyMap {
    provinceName?: string;
    cityName?: string;
    districtName?: string;
}
interface AreaInfoProps {
    data?: any;
    map?: ARAreaKeyMap;
    address?: string;
    mode?: 'keyNoName' | string;
}
declare const AreaInfo: React.FC<AreaInfoProps>;
interface UpLoadInfoProps {
    noHref: boolean;
    style?: CSSProperties;
    data?: string | string[];
}
declare const UpLoadInfo: React.FC<UpLoadInfoProps>;
interface VideoListProps {
    style?: CSSProperties;
    list?: string | string[];
}
declare const VideoList: React.FC<VideoListProps>;
interface MainPicProps {
    style?: CSSProperties;
    url?: string;
    isPrivate?: boolean;
}
declare const MainPic: React.FC<MainPicProps>;
interface UploadPreviewProps {
    style?: CSSProperties;
    innerStyle?: CSSProperties;
    params?: any;
    height: number;
    value: any;
    list?: any[];
}
declare const UploadPreview: React.FC<UploadPreviewProps>;
interface UrlLinkProps {
    list?: string[] | string;
}
declare const UrlLink: React.FC<UrlLinkProps>;
interface BlankLinkProps {
    title?: string;
    href: string;
}
declare const BlankLink: React.FC<BlankLinkProps>;
interface TitleInfoProps {
    info: string;
    len?: number;
}
declare const TitleInfo: React.FC<TitleInfoProps>;
interface BuleWrapperProps {
    info?: string;
    text?: string;
    color?: string;
}
declare const BuleWrapper: React.FC<BuleWrapperProps>;
interface BuleProps {
    info?: string;
    color?: string;
}
declare const Bule: React.FC<BuleProps>;
interface RedProps {
    info?: string;
    color?: string;
}
declare const Red: React.FC<RedProps>;
declare const getColorWrapper: (props: {
    info: any;
}) => JSX.Element | null;
declare const ShowMoreInfo: (props: {
    info?: string;
    len: number;
}) => JSX.Element;
interface HouseDescProps {
    buildingNo?: string;
    unitNo?: string;
    roomNo?: string;
}
/**
 * xx幢xxx单元xxxx
 * @param {*} props
 */
declare const HouseDesc: React.FC<HouseDescProps>;
declare const SomeRed: (props: {
    info: string;
    keyWord: string;
}) => string | JSX.Element;
interface LRInfoProps {
    title?: string;
    info?: number;
    width?: number;
    hasColon?: boolean;
    len?: number;
    onClick?: Function;
    titleStyle?: CSSProperties;
}
declare const LRInfo: React.FC<LRInfoProps>;
interface BuildingAreaProps {
    data?: {
        buildingName?: string;
        houseCode?: string;
        buildingNo?: string;
        unitNo?: string;
        roomNo?: string;
    };
}
declare const BuildingArea: React.FC<BuildingAreaProps>;

export { ARAreaKeyMap, ARHouseTypeKeyMap, AreaInfo, AreaInfoProps, BlankLink, BlankLinkProps, BuildingArea, BuildingAreaProps, Bule, BuleProps, BuleWrapper, BuleWrapperProps, HouseDesc, HouseDescProps, HouseType, HouseTypeProps, LRInfo, LRInfoProps, MainPic, MainPicProps, Red, RedProps, ShowMoreInfo, SomeRed, SquareMeterInfo, SquareMeterInfoProps, TitleInfo, TitleInfoProps, UpLoadInfo, UpLoadInfoProps, UploadPreview, UploadPreviewProps, UrlLink, UrlLinkProps, VideoList, VideoListProps, getColorWrapper };
