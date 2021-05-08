
import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {Field} from "@formily/react";
import {Form,FormItem} from "@formily/antd";

import {ARFormBlock,ARFormBlockProps} from '../index';

export default {
  title:"Formily/ARFormBlock/PureJsx",
  component:ARFormBlock
} as Meta;

const normalForm = createForm({
  validateFirst:true,
})
const Template:Story<ARFormBlockProps> = (args) => {
  return (
    <Form form={normalForm}>
      <Field
        name="ARFormBlock"
        title="ARFormBlock"
        required
        decorator={[FormItem]}
        component={[
          ARFormBlock,
          {...args}
        ]}
      />
    </Form>
  )
}

export const Primary = Template.bind({});
Primary.args = {
}
