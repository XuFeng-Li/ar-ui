
import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {Field} from "@formily/react";
import {Form,FormItem} from "@formily/antd";

import {ARInputNumber,ARInputNumberProps} from "../components/ARInputNumber";
export default {
  title:"Formily/InputNumber",
  component:ARInputNumber
} as Meta;

const normalForm = createForm({
  validateFirst:true,
})
const Template:Story<ARInputNumberProps> = (args) => {
  return (
    <Form form={normalForm}>
      <Field
        name="InputNumber"
        title="InputNumber"
        decorator={[FormItem]}
        component={[
          ARInputNumber,
          {...args}
        ]}
      />
    </Form>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  addonBefore:'before',
  addonAfter:'after'
}
