import React, {useState} from "react";
import {Story,Meta} from "@storybook/react";
import {ARButtonRadio,ARButtonRadioProps} from "../index";

import "antd/dist/antd.css";
import "@formily/antd/dist/antd.css";
import {createForm} from "@formily/core";
import {createSchemaField, Field} from "@formily/react";
import {Form, FormItem} from "@formily/antd";

export default {
  title: "AR/ARButtonRadio",
  component: ARButtonRadio,
} as Meta;

const NotmalTemplate:Story<ARButtonRadioProps> = (args) => {
  const {onChange,...otherArgs} = args;
  const {defaultValue,value:defValue,} = otherArgs;
  const [value,setValue] = useState<string|undefined>(defaultValue || defValue);
  return (
    <div>
      <ARButtonRadio
        defaultValue={defaultValue}
        value={value}
        {...otherArgs}
        onChange={(option)=>{
          onChange && onChange(option);
          setValue(option.value);
        }}
      />
      <hr />
      <span>当前的选择：{value}</span>
    </div>
  )
}
export const Normal = NotmalTemplate.bind({});
Normal.args = {
  options: [
    {
      label: '瓷砖',
      value: 'BM-XT-SM-0004',
    },
    {
      label: '木地板',
      value: 'BM-XT-SM-0003'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0010'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0011'
    }
  ],
  defaultValue: 'BM-XT-SM-0010',
  buttonStyle: 'solid',
  onChange:(option)=>{
    console.log(`当前选择了 - ${option.value}`);
  }
}


const SchemaField = createSchemaField({
  components: {
    FormItem,
    ARButtonRadio,
  }
});


const schemaJsonForm = createForm({
  validateFirst: true,
});
const schemaJson = (args: ARButtonRadioProps) => {
  return {
    type: "object",
    properties: {
      buttonRadio: {
        type: 'string',
        name: "ar_button_radio_pure-jsx",
        title: "Radio",
        'x-decorator': "FormItem",
        'x-component': "ARButtonRadio",
        'x-component-props': {...args}
      }
    }
  }
}
const JsonSchemaTemplate:Story<ARButtonRadioProps> = (args) => {
  return (
    <Form
      form={schemaJsonForm}
      labelWidth={100}
      layout="horizontal"
      size="large"
    >
      <SchemaField schema={schemaJson(args)} />
    </Form>
  )
}
export const JsonSchema = JsonSchemaTemplate.bind({});
JsonSchema.args = {
  options: [
    {
      label: '瓷砖',
      value: 'BM-XT-SM-0004',
    },
    {
      label: '木地板',
      value: 'BM-XT-SM-0003'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0010'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0011'
    }
  ],
  defaultValue: 'BM-XT-SM-0010',
  buttonStyle: 'solid',
  onChange:(option)=>{
    // alert(`label: ${option.label}  value: ${option.value}`)
  }
}


const markupSchemaForm = createForm({
  validateFirst: true,
});
const MarkupSchemaTemplate:Story<ARButtonRadioProps> = (args) => {
  return (
    <Form
      form={markupSchemaForm}
      labelWidth={100}
      layout="horizontal"
      size="large"
    >
      <SchemaField>
        <SchemaField.String
          name="ar_button_radio_pure-jsx"
          title="Radio"
          x-decorator="FormItem"
          x-component="ARButtonRadio"
          x-component-props={{...args}}
        />
      </SchemaField>
    </Form>
  )
}
export const MarkupSchema = MarkupSchemaTemplate.bind({});
MarkupSchema.args = {
  options: [
    {
      label: '瓷砖',
      value: 'BM-XT-SM-0004',
    },
    {
      label: '木地板',
      value: 'BM-XT-SM-0003'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0010'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0011'
    }
  ],
  defaultValue: 'BM-XT-SM-0011',
  buttonStyle: 'solid',
  onChange:(option)=>{
    // alert(`label: ${option.label}  value: ${option.value}`)
  }
}


const pureJsxForm = createForm({
  validateFirst: true,
});
const PureJsxTemplate:Story<ARButtonRadioProps> = (args) => {
  return (
    <Form
      form={pureJsxForm}
      labelWidth={100}
      layout="horizontal"
      size="large"
    >
      <Field
        name="ar_button_radio_pure-jsx"
        title="Radio"
        decorator={[FormItem]}
        component={[
          ARButtonRadio,
          {...args}
        ]}
      />
    </Form>
  )
}
export const PureJsx = PureJsxTemplate.bind({});
PureJsx.args = {
  options: [
    {
      label: '瓷砖',
      value: 'BM-XT-SM-0004',
    },
    {
      label: '木地板',
      value: 'BM-XT-SM-0003'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0010'
    },
    {
      label: '大理石',
      value: 'BM-XT-SM-0011'
    }
  ],
  defaultValue: 'BM-XT-SM-0010',
  buttonStyle: 'solid',
  onChange:(option)=>{
    // alert(`label: ${option.label}  value: ${option.value}`)
  }
}