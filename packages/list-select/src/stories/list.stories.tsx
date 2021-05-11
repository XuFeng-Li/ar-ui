import React from "react";
import {Story,Meta} from "@storybook/react";
import {ARList,ARListProps} from "../components/List";

export default {
  title: "AR/ListSelect/ARList",
  component: ARList,
} as Meta;

const Template:Story<ARListProps> = (args) => {
  return (
    <div>
      <div>
        <span>ARList</span>
      </div>
      <br />
      <ARList {...args} />
    </div>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  data:{
    list:[
      {
        img:'https://asman-client.oss-cn-hangzhou.aliyuncs.com/dev/family/BSC-CB-0002/BSC-CB-0002.png',
        name:'乳胶漆天花',
        id:'100001',
      }
    ]
  }
};