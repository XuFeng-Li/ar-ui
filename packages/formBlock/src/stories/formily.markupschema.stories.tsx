import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {createSchemaField} from "@formily/react";
import {Form,FormItem} from "@formily/antd";

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
    FormItem,
    ARFormBlock,
  }
});

const Template:Story<ARFormBlockProps> = (args)=> {
  return (
    <Form
      form={form}
      layout="horizontal"
      size="large"
    >
      <SchemaField>
        <SchemaField.String
          name="ARInputNumber"
          title="数字输入框"
          required
          x-decorator="FormItem"
          x-component="ARFormBlock"
          x-component-props={{...args}}
        />
      </SchemaField>
    </Form>
  )
}

export const Primary = Template.bind({});
Primary.args = {
}