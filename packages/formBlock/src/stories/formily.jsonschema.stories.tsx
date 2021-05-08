import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {createSchemaField} from "@formily/react";
import {Form,FormItem} from "@formily/antd";

import {ARFormBlock,ARFormBlockProps} from '../index';

import 'antd/dist/antd.css';
import '@formily/antd/dist/antd.css';

export default {
  title: 'Formily/ARFormBlock/SchemaJson',
  component: ARFormBlock,
} as Meta;

const form = createForm({
  validateFirst:true,
})
const SchemaField = createSchemaField({
  components: {
    FormItem,
    ARFormBlock,
  },
})
const schemaJson = (args:ARFormBlockProps)=>{
  return {
    type: 'object',
    properties: {
      formblock: {
        type: 'object',
        'x-component': 'ARFormBlock',
        'x-component-props': {...args},
        properties: {
          aaa: {
            type: 'string',
            title: '字段aaa'
          }
        }
      }
    }
  }
}
const Template:Story<ARFormBlockProps> = (args) => {
  console.log("ARFormBlock - ",args);
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
  title: "基本信息"
}