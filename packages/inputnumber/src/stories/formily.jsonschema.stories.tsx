import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {createSchemaField} from "@formily/react";
import {Form,FormItem} from "@formily/antd";

import {ARInputNumber,ARInputNumberProps} from '../index';

import 'antd/dist/antd.css';
import '@formily/antd/dist/antd.css';

export default {
  title: 'Formily/InputNumber/SchemaJson',
  component: ARInputNumber,
} as Meta;

const form = createForm({
  validateFirst:true,
})
const SchemaField = createSchemaField({
  components: {
    FormItem,
    ARInputNumber,
  }
})
const schemaJson = (args:ARInputNumberProps)=>{
  return {
    type: 'object',
    properties: {
      inputnumber: {
        type: 'string',
        title: '数字输入框',
        required: true,
        'x-decorator': 'FormItem',
        'x-component': 'ARInputNumber',
        'x-component-props': {...args}
      }
    }
  }
}
const Template:Story<ARInputNumberProps> = (args) => {
  return (
    <Form
      form={form}
      layout="horizontal"
      size="large"
    >
      <SchemaField schema={schemaJson(args)} />
    </Form>
  )
}

export const Primary = Template.bind({});
Primary.args = {

}