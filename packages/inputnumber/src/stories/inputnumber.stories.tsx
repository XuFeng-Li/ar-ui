import {Story,Meta} from "@storybook/react";
import {ARInputNumber,ARInputNumberProps} from "../index";

export default {
  title: "AR/InputNumber",
  component: ARInputNumber,
} as Meta;

const Template:Story<ARInputNumberProps> = (args)=> {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems:'center',
        justifyContent:'flex-start',
      }}
    >
      <div style={{marginRight:'20px'}}>数字输入框</div>
      <ARInputNumber {...args} />
    </div>
  )
}

export const Primary = Template.bind({});
Primary.args = {

};