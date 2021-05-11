import React from "react";
import {Story,Meta} from "@storybook/react";
import ARListSelect,{ARListSelectProps} from "../components/ListSelect";

export default {
  title: "AR/ListSelect/ARListSelect",
  component: ARListSelect,
} as Meta;

const Template:Story<ARListSelectProps> = (args) => {
  return (
    <div>
      <div>
        <span>ARListSelect</span>
      </div>
      <br />
      <ARListSelect {...args} />
    </div>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  value:{
    itemInfo: {
      img:'https://asman-client.oss-cn-hangzhou.aliyuncs.com/dev/family/BSC-CB-0002/BSC-CB-0002.png',
      name:'乳胶漆天花',
      id:'100001',
    }
  },
  api:'/admin/scheme/family/family_query',
  propsParams:{
    categoryId:'861',
    categoryName:'踢脚线'
  }
};