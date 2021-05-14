
import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {Field} from "@formily/react";
import {Form,FormItem,Input} from "@formily/antd";

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
        required
        component={[
          ARFormBlock,
          {...args}
        ]}
      >
        <Field
          name="aaa"
          title="字段aaa"
          required
          decorator={[FormItem]}
          component={[Input]}
        />
        <Field
          name="bbb"
          title="字段bbb"
          required
          decorator={[FormItem]}
          component={[Input]}
        />
      </Field>
    </Form>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  title: '基本信息'
}
