import React from "react";
import {Story,Meta} from "@storybook/react";
import {createForm} from "@formily/core";
import {createSchemaField} from "@formily/react";
import {FormItem,Form} from "@formily/antd";

import {ARImgRadio,ARImgRadioProps} from "../index";

import "antd/dist/antd.css";
import "@formily/antd/dist/antd.css";

export default {
  title: "Formily/ARImgRadio/MarkupSchema",
  component: ARImgRadio,
} as Meta;

const form = createForm({
  validateFirst: true,
});
const SchemaField = createSchemaField({
  components: {
    FormItem,
    ARImgRadio,
  }
});

const Template:Story<ARImgRadioProps> = (args)=>{
  return (
    <Form
      form={form}
      labelWidth={100}
      layout="horizontal"
      size="large"
    >
      <SchemaField>
        <SchemaField.String
          title="瓷砖"
          name="imgRadio_select01"
          x-decorator="FormItem"
          x-component="ARImgRadio"
          x-component-props={{...args}}
        />
      </SchemaField>
    </Form>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  dataSource:[
    {
      img: 'https://img.asman.com.cn/assets/1567159387205_15543.png',
      key: 1,
      name: '瓷砖',
      needOssProcess:true,
      value: 'BM-XT-SM-0004',
    },
    {
      img: 'https://img.asman.com.cn/assets/1567159401605_51882.png',
      key: 2,
      name: '木地板',
      needOssProcess:true,
      value: 'BM-XT-SM-0003'
    },
    {
      img: 'https://img.asman.com.cn/assets/1567159401568_64748.png',
      key: 3,
      name: '大理石',
      needOssProcess:true,
      value: 'BM-XT-SM-0010'
    },
    {
      img: 'https://img.asman.com.cn/assets/1567159401568_64748.png',
      key: 4,
      name: '大理石',
      needOssProcess:true,
      value: 'BM-XT-SM-0011'
    }
  ],
  initialValue:'BM-XT-SM-0004',
}