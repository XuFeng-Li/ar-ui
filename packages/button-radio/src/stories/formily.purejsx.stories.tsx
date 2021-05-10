import React from "react";
import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {Field} from "@formily/react";
import {FormItem,Form} from "@formily/antd";
import {ARButtonRadio,ARButtonRadioProps} from "../index";

import "antd/dist/antd.css";
import "@formily/antd/dist/antd.css";

export default {
  title: "Formily/ARButtonRadio/PureJsx",
  component: ARButtonRadio,
} as Meta;

const form = createForm({
  validateFirst: true,
});

const Template:Story<ARButtonRadioProps> = (args) => {
  return (
    <Form
      form={form}
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

export const Primary = Template.bind({});
Primary.args = {
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
    alert(`label: ${option.label}  value: ${option.value}`)
  }
}