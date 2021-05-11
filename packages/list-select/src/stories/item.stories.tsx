import React from "react";
import {Story,Meta} from "@storybook/react";
import {ARItem,ARItemProps} from "../components/Item";

export default {
  title: "AR/ListSelect/ARItem",
  component: ARItem,
} as Meta;

const Template:Story<ARItemProps> = (args) => {
  return (
    <div>
      <div>
        <span>ARItem</span>
      </div>
      <br />
      <ARItem {...args} />
    </div>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  item:{
    img:'https://asman-client.oss-cn-hangzhou.aliyuncs.com/dev/family/BSC-CB-0002/BSC-CB-0002.png',
    name:'乳胶漆天花',
    id:'100001',
  }
};