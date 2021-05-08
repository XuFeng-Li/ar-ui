import {Story,Meta} from "@storybook/react";
import {ARFormBlock,ARFormBlockProps} from "../index";

export default {
  title: "AR/FormBlock",
  component: ARFormBlock,
} as Meta;

const Template:Story<ARFormBlockProps> = (args)=> {
  return (
    <div>
      <ARFormBlock
        style={args.style || {}}
        title={args.title}
      >
        <ul>
          <li key={10001}>10001</li>
          <li key={10002}>10002</li>
          <li key={10003}>10003</li>
          <li key={10004}>10004</li>
          <li key={10005}>10005</li>
          <li key={10006}>10006</li>
        </ul>
      </ARFormBlock>
    </div>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  title: "基本信息"
}