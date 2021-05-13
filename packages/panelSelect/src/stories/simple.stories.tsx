import {Meta,Story} from "@storybook/react";
import React from "react";

import {ARPanelSelect,ARPanelSelectProps} from "../index";
export default {
  title:'AR/panelSelect',
  component:ARPanelSelect,
} as Meta;

const Template:Story<ARPanelSelectProps> = (args) => <ARPanelSelect {...args} />

export const Primary = Template.bind({});
Primary.args = {
  addonBefore:'自定义前缀',
  addonAfter:'自定义后缀',
  dataSource:[
    {value:"value01",label:"label01"},
    {value:"value02",label:"label02"},
    {value:"value03",label:"label03"},
    {value:"value04",label:"label04"},
    {value:"value05",label:"label05"},
  ],
  onChange:(value)=>{
    alert(`select - ${value}`);
  }
};