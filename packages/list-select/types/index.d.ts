import { CSSProperties } from 'react';
import { AxiosInstance } from 'axios';

interface ARCloudRaceInfo {
    img: string;
    name: string;
    id: string;
}

declare type ARPlacementType = "top" | "right" | "bottom" | "left";
interface ARPropsParams {
    categoryId: string;
    categoryName: string;
}
interface ARListSelectProps {
    style?: CSSProperties;
    className?: string;
    api: string;
    propsParams: ARPropsParams;
    fetcher?: AxiosInstance;
    value?: ARListSelectValue;
    placement?: ARPlacementType;
    onChange?: (newValue?: ARListSelectValue) => void;
}
interface ARListSelectValue {
    itemInfo: ARCloudRaceInfo;
}

export { ARListSelectProps, ARListSelectValue, ARPlacementType, ARPropsParams };
