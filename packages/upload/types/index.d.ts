import React from 'react';
import { Property } from 'csstype';
import { ShowUploadListInterface, UploadFile, RcFile, UploadListType } from 'antd/lib/upload/interface';

interface UploadFormProps {
    /**
     *  上传成功后得到的资源路径列表
     *  */
    value: string[];
    /**
     * 目前 4为普通图片(上传即可查看), 1,2,3为加密图片
     * */
    fileTypeCode: number;
    /**
     * 上传状态发生改变的回调
     * */
    handleChange?: (pathResult?: string[] | string) => void;
    /** 这个函数是用来做什么的？ */
    valueChange?: (pathResult?: string[] | string) => void;
    /** 上传的文件数 */
    fileLength?: number;
    /** 是否支持覆盖操作,不需要手动删除文件，直接覆盖所有 */
    isSupportCover?: boolean;
    /** 上传成功的回调 */
    successDo?: Function;
    /** 上传失败的回调 */
    fail?: Function;
    outDisplay: Property.Display;
    /** 是否支持多图上传 */
    multiple: boolean;
    showUploadList?: boolean | ShowUploadListInterface;
    disabled: boolean;
    accept: string;
    data: object | ((file: UploadFile<UploadFile>) => object);
    beforeUpload: (file: RcFile, FileList: RcFile[]) => boolean | {} | Promise<void | Blob | File>;
    listType?: UploadListType;
    actionTexts: string[];
    customShow: boolean;
    /** Upload 的属性，用于获取扩展头 */
    getExtendHeaders: Function;
    /** 文件大小，单位 M */
    fileSize?: number;
    children?: any;
    getPolicy?: Function | null;
    getSignedUrl?: Function | null;
    fileType?: string;
    type?: string;
    actionPath?: string | null;
    dealResponseData?: Function;
    queryPolicyParams?: any;
    /** 校验name的正则 */
    checkNameExp?: string;
    /**
     * 期望的文件名开头
     * */
    expName?: string;
    getPolicyUrl?: Function | null;
}
declare const UploadForm: React.FC<UploadFormProps>;

export default UploadForm;
export { UploadFormProps };
