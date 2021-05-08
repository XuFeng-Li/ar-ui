import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {createSchemaField} from "@formily/react";
import {Form,FormItem,Input} from "@formily/antd";

import {ARFormBlock,ARFormBlockProps} from '../index';

import 'antd/dist/antd.css';
import '@formily/antd/dist/antd.css';

export default {
  title: 'Formily/ARFormBlock/MarkupSchema',
  component: ARFormBlock,
} as Meta;

const form = createForm({
  validateFirst: true,
});
const SchemaField = createSchemaField({
  components: {
    ARFormBlock,
    Input,
    FormItem
  }
});

const Template:Story<ARFormBlockProps> = (args)=> {
  return (
    <Form
      form={form}
      layout="horizontal"
      size="large"
      labelWidth={100}
    >
      <SchemaField>
        <SchemaField.String
          name="ARFormBlock"
          x-component="ARFormBlock"
          x-component-props={{...args}}
        >
        </SchemaField.String>
        <SchemaField.String
          name="input_01"
          title="参数01 -"
          x-decorator="FormItem"
          x-component="Input"
          required
        />
        <SchemaField.String
          name="input_02"
          title="参数02"
          x-decorator="FormItem"
          x-component="Input"
          required
        />
        <SchemaField.String
          name="input_03"
          title="参数03"
          x-decorator="FormItem"
          x-component="Input"
          required
        />
      </SchemaField>
    </Form>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  title: '基本信息'
}