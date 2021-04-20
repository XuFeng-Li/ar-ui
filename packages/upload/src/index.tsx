import React, {Fragment, ReactElement, useState} from "react";
import {
  fileListTourlMap,
  simplifyUrlMapToFileList,
  urlMapToFileList
} from "@ar/util";

import 'antd/dist/antd.css';
import {Property} from "csstype";
import {Upload, message} from "antd";
import {
  RcFile,
  ShowUploadListInterface,
  UploadChangeParam,
  UploadFile,
  UploadFileStatus,
  UploadListType
} from "antd/lib/upload/interface";

type  ARMessageType = "warning" | "success" | "error";
const showMessage = (type: ARMessageType, content: string, onClose?: Function) => {
  if (type === "warning") {
    message.warning(content, 1.5, () => onClose && onClose()).then(() => {
    });
  } else if (type === "success") {
    message.success(content, 1.5, () => onClose && onClose()).then(() => {
    });
  } else if (type === "error") {
    message.error(content, 1.5, () => onClose && onClose()).then(() => {
    });
  }
}

export interface UploadFormProps {
  /**
   *  上传成功后得到的资源路径列表
   *  */
  value: string[],
  /**
   * 目前 4为普通图片(上传即可查看), 1,2,3为加密图片
   * */
  fileTypeCode: number,
  /**
   * 上传状态发生改变的回调
   * */
  handleChange?: (pathResult?: string[] | string) => void,
  /** 这个函数是用来做什么的？ */
  valueChange?: (pathResult?: string[] | string) => void,
  /** 上传的文件数 */
  fileLength?: number,
  /** 是否支持覆盖操作,不需要手动删除文件，直接覆盖所有 */
  isSupportCover?: boolean,
  /** 上传成功的回调 */
  successDo?: Function,
  /** 上传失败的回调 */
  fail?: Function,

  outDisplay: Property.Display,
  /** 是否支持多图上传 */
  multiple: boolean,
  showUploadList?: boolean | ShowUploadListInterface,
  disabled: boolean,
  accept: string,
  data: object | ((file: UploadFile<UploadFile>) => object),
  beforeUpload: (file: RcFile, FileList: RcFile[]) => boolean | {} | Promise<void | Blob | File>,
  listType?: UploadListType;
  actionTexts: string[],
  customShow: boolean,
  /** Upload 的属性，用于获取扩展头 */
  getExtendHeaders: Function,
  /** 文件大小，单位 M */
  fileSize?: number,
  children?: ReactElement,
  getPolicy?: Function | null,
  getSignedUrl?: Function | null,
  fileType?: string,
  type?: string,
  actionPath?: string | null,
  dealResponseData?: Function,
  queryPolicyParams?: any,
  /** 校验name的正则 */
  checkNameExp?: string,
  /**
   * 期望的文件名开头
   * */
  expName?: string,
  getPolicyUrl?: Function | null,
}

const UploadForm: React.FC<UploadFormProps> = ({...props}) => {
  const [filesList, setFilesList] = useState<UploadFile<any>[]>(() => {
    const tempValue: string[] = props.value || [];
    return urlMapToFileList(tempValue).map((ele)=>{
      return Object.create({...ele})
    });
  });
  // 获取派生属性。当props变化后，使用新的props和当前的state生产新的state
  const derivedStateFromProps = (nextProps: UploadFormProps, oldFilesList: UploadFile[]) => {
    const {value, fileTypeCode} = nextProps;
    if (!value || value.length <= 0) {
      return [];
    }
    const tempFileList: UploadFile[] = simplifyUrlMapToFileList(value, fileTypeCode) || [];
    if (!tempFileList || tempFileList.length <= 0) {
      return;
    }
    const validFilesList = oldFilesList.filter((element) => element.status === 'uploading');
    setFilesList([...tempFileList, ...validFilesList]);
  }
  derivedStateFromProps(props, filesList);

  const handleChange = (fileArr: UploadFile[]) => {
    const {handleChange, valueChange, fileLength} = props;
    const validFileArr = fileArr
      .filter((ele)=>(ele.url && ele.url.length >= 1))
      .map((ele)=>({url:ele.url || ''}));
    let uploadResult: string[] | string | undefined = fileListTourlMap(validFileArr) || [];
    if (uploadResult && uploadResult.length > 0) {
      uploadResult = fileLength === 1 ? uploadResult[0] : uploadResult;
    } else {
      uploadResult = undefined;
    }
    if (handleChange) {
      handleChange(uploadResult);
    }
    if (valueChange) {
      valueChange(uploadResult);
    }
  };
  const beyondFileLength = () => {
    const {fileLength} = props;
    const tempFilesList = filesList || [];
    if (undefined === fileLength) {
      return true;
    }
    return tempFilesList.length >= fileLength;
  }

  const onChange = (data: UploadChangeParam) => {
    const {isSupportCover, fileLength, successDo, fail} = props;
    let {file, fileList} = data;
    if (beyondFileLength()) {
      fileList = fileList.filter((ele) => ele.uid !== file.uid);
    }
    if (isSupportCover) {
      fileList = fileList.slice(-(fileLength || 0));
    }
    if (file && file.status && "done" === file.status) {
      const {response} = file;
      const {success} = response;
      if (response && success) {
        successDo && successDo(response["result"]);
      } else {
        fail && fail(response);
      }
    }
    if (file && file.status && 'error' === file.status) {
      fileList.pop();
      showMessage("error", "文件上传失败");
    }
    if (!file.status) {
      fileList = fileList.filter((ele) => ele.url);
    }
    setFilesList(fileList);
    handleChange(fileList);
  }

  const getChangingData = (file: UploadFile, imgUrl: string | undefined, status: UploadFileStatus) => {
    const currentFile = filesList.filter((ele) => ele.uid === file.uid);
    if (currentFile[0]) {
      currentFile[0].status = status;
      currentFile[0].url = imgUrl;
    }
    let changingData = Object.create({});
    changingData["fileList"] = filesList;
    changingData["file"] = {
      status: status,
      response: {
        success: true,
        result: {
          url: imgUrl,
        },
      }
    }
    return changingData;
  }

  const uploadSuccess = (file: UploadFile, imgUrl: string) => {
    const uccessData = getChangingData(file, imgUrl, 'done');
    onChange(uccessData);
  }
  const uploadError = (file: UploadFile, _?: Error) => {
    const errorData = getChangingData(file, undefined, 'error');
    onChange(errorData);
  }

  const getFileTypeByName = (name: string) => {
    const index = name.lastIndexOf('.');
    return name.slice(index);
  }
  const noMatchUpperOrLower = (matchArr: string[], fileType: string) => {
    const lower = fileType.toLowerCase();
    const upper = fileType.toUpperCase();
    return matchArr.indexOf(lower) > -1 || matchArr.indexOf(upper) > -1;
  };

  const beforeUpload = async (file: UploadFile) => {
    const {fileSize = 2, accept} = props;
    if (beyondFileLength()) return false;
    const acceptTypes = (accept && accept.split(',')) || [];
    const acceptAll = !acceptTypes.filter(ele => ele).length;
    const fileType = getFileTypeByName(file.name);
    const canAccept = acceptAll || noMatchUpperOrLower(acceptTypes, fileType);

    if (!canAccept) {
      await showMessage("warning", "上传的文件格式不正确");
    }

    const isPass = file.size / 1024 / 1024 < fileSize;
    if (!isPass && canAccept) {
      await showMessage('warning', `文件上传不能超过${fileSize}MB`);
    }
    return isPass && canAccept;
  }
  const setFirstPic = (info: UploadFile) => {
    const list = filesList.filter((ele) => ele !== info) || [];
    handleChange(list)
  }
  const deletePic = (info: UploadFile) => {
    const list = filesList.filter((ele) => ele !== info) || [];
    handleChange(list);
  }

  const renderButton = () => {
    const {children, fileLength} = props;
    const loading = filesList.filter((ele) => "uploading" === ele.status).length;
    let renderDom = (
      <div>
        <div className="ant-upload-text">上传</div>
      </div>
    );
    if (children) {
      renderDom = React.cloneElement(children, {loading: !!loading});
    }
    return filesList.length >= (fileLength || 0) ? null : renderDom;
  }
  const policyUpload = (file: UploadFile, queryParams: Object) => () => {
    const objcProps = JSON.parse(JSON.stringify(props || {}));
    const {checkNameExp, expName, getPolicyUrl, dealResponseData, getPolicy, getSignedUrl} = objcProps;
    let fileName = file.name;
    if (checkNameExp && Object.prototype.toString.call(checkNameExp).slice(8, -1) === 'RegExp') {
      if (!checkNameExp.test(file.name) && expName) {
        fileName = `${expName}${file.name}`
      }
    }
    getPolicy({fileName, ...queryParams}, getPolicyUrl).then((response: any) => {
      if (!response) {
        uploadError(file, new Error("error"));
        return;
      }
      // 获取后台签名上传oss
      const fd = new FormData();
      const {OSSAccessKeyId, host, policy, signature, objectName} = dealResponseData(response);
      fd.append('OSSAccessKeyId', OSSAccessKeyId);
      fd.append('policy', policy);
      fd.append('signature', signature);
      fd.append('key', `${objectName}`);
      fd.append('success_action_status', "10000");
      fd.append('file', JSON.stringify(file), objectName);
      const xhr = new XMLHttpRequest();
      xhr.open('post', host, true);
      xhr.upload.addEventListener(
        'progress',
        (evt) => {
          const progressPercent = Math.round((evt.loaded * 100) / evt.total);
          const currentFile = filesList.filter((ele) => ele.uid === file.uid);
          if (currentFile[0]) {
            currentFile[0].percent = progressPercent;
          }
          setFilesList(filesList);
        },
        false
      );
      xhr.addEventListener(
        'load',
        (e) => {
          const target: any = e.target;
          const {status} = target;
          if (status === undefined || JSON.stringify(status) !== "10000") {
            return;
          }
          const imgUrl = `${host}/${objectName}`;
          const {fileTypeCode} = props;
          if (fileTypeCode !== 4) {
            // 私有桶查看文件
            getSignedUrl({url: imgUrl}).then((res: any) => {
              uploadSuccess(file, dealResponseData(res));
            });
          } else {
            uploadSuccess(file, imgUrl);
          }
        },
        false
      );

      xhr.addEventListener('error', _ => {
        uploadError(file, new Error("error"));
      });
      xhr.send(fd);
    });
  }
  const customRequest = async (info: any) => {
    if (beyondFileLength()) return false;
    const objcProps = JSON.parse(JSON.stringify(props || {}));
    const objcData = JSON.parse(JSON.stringify(info || {}));
    const {fileTypeCode, queryPolicyParams = {}} = objcProps;
    const {file} = objcData;
    await policyUpload(file, {fileTypeCode, ...queryPolicyParams});
  }

  const baseProps = () => {
    let tempBaseProps = Object.create({});
    tempBaseProps['multiple'] = props.multiple;
    tempBaseProps['showUploadList'] = props.showUploadList;
    tempBaseProps['onRemove'] = () => !props.disabled;
    tempBaseProps['accept'] = props.accept;
    tempBaseProps['data'] = props.data;
    tempBaseProps['beforeUpload'] = props.beforeUpload || beforeUpload;
    tempBaseProps['headers'] = {...(props.getExtendHeaders ? props.getExtendHeaders() : {})};
    tempBaseProps['listType'] = props.listType;
    tempBaseProps['fileList'] = filesList;
    tempBaseProps['onChange'] = onChange;
    tempBaseProps['disabled'] = props.disabled;
    return tempBaseProps;
  }
  const extendProps = () => {
    let tempExtendProps = Object.create({});
    // TODO 这里对组件的入参进行了Object转换，是否有必要为属性添加字段替换调此转换
    let objcProps = JSON.parse(JSON.stringify(props || {}));
    const {actionPath} = objcProps;
    if (actionPath) {
      tempExtendProps["action"] = actionPath;
    } else {
      tempExtendProps["customRequest"] = customRequest;
    }
    return tempExtendProps;
  };
  const [mainPicText, setMainPicText] = props.actionTexts || [];
  return (
    <Fragment>
      <span
        style={{
          color: "red",
          display: props.outDisplay || 'inline-block'
        }}
      >
        上传文字
        <Upload
          {...baseProps()}
          {...extendProps()}
        >
          {renderButton()}
        </Upload>
      </span>
      {
        !!!props.showUploadList && props.customShow &&
        <div
          className="ant-upload-list ant-upload-list-picture-card custom"
        >
          {
            (filesList || [])
              .filter((ele) => "done" === ele.status)
              .map((ele, index) => {
                return (
                  <div
                    key={-index}
                    className="ant-upload-list-item ant-upload-list-item-done"
                  >
                    <div className="ant-upload-list-item-info">
                      <a
                        className="ant-upload-list-item-thumbnail"
                        href={ele.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img src={ele.url} alt={ele.name}/>
                      </a>
                    </div>
                    <span className="ant-upload-list-item-actions">
                    <a href={ele.url} target="_blank" rel="noopener noreferrer" title="预览文件">
                      {/* <Icon style={{ color: 'rgba(255, 255, 255, 0.85)' }} type="eye" /> */}
                    </a>
                  </span>
                    <span
                      className="ant-upload-list-item-extend-actions"
                      style={{fontSize: '12px', color: '#fff', zIndex: 10}}
                    >
                    {0 === index ? (
                      <span>{mainPicText || '主图'}</span>
                    ) : (
                      <span
                        onClick={() => setFirstPic(ele)}
                        className="pointer"
                      >
                        {setMainPicText || '设为主图'}
                      </span>
                    )}
                      <span
                        style={{marginLeft: '8px'}}
                        onClick={() => deletePic(ele)}
                        className="pointer"
                      >
                      删除
                    </span>
                  </span>
                  </div>
                )
              })
          }
        </div>
      }
    </Fragment>
  );
};

export default UploadForm;
