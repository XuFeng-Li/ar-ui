import {Story,Meta} from "@storybook/react";

import UploadForm,{UploadFormProps} from "../index";

export default {
  title:'AR/UploadForm',
  component:UploadForm,
} as Meta;

const Template: Story<UploadFormProps> = (args) => <UploadForm {...args} />
export const Default = Template.bind({});
Default.args = {
  getPolicy: null,
  getSignedUrl: null,
  getExtendHeaders: () => {},
  listType: 'picture-card',
  fileType: 'img',
  type: '',
  fileSize: 999, // 文件大小，单位 M
  fileLength: 999, // 上传的文件数
  actionPath: null,
  // dealResponseData: (response) => response.result,
  isSupportCover: false, // 是否支持覆盖操作,不需要手动删除文件，直接覆盖所有
  disabled: false,
  fileTypeCode: 4, // 目前 4为普通图片(上传即可查看), 1,2,3为加密图片
  queryPolicyParams: {},
  checkNameExp: '', // 校验name的正则
  expName: '', // 期望的文件名开头
  multiple: false,
  getPolicyUrl: null,
};