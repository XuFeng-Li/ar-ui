import React from "react";
import {Story,Meta} from "@storybook/react";
import {ARButtonRadio,ARButtonRadioProps} from "../index";

import "antd/dist/antd.css";
import "@formily/antd/dist/antd.css";

export default {
  title: "AR/ARButtonRadio",
  component: ARButtonRadio,
} as Meta;

const Template:Story<ARButtonRadioProps> = (args) => {
  return (
    <ARButtonRadio {...args} />
  )
}
export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      label: '瓷砖',
      value: 'BM-XT-SM-0004',
    },
    {
      label: '木地板',
      value: 'BM-XT-SM-0003'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0010'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0011'
    }
  ],
  defaultValue: 'BM-XT-SM-0010',
  buttonStyle: 'solid',
  onChange:(option)=>{
    alert(`label: ${option.label}  value: ${option.value}`)
  }
}