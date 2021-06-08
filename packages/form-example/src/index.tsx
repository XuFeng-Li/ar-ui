import React from "react";
import {createForm} from "@formily/core";
import {createSchemaField} from "@formily/react";
import {Form,FormItem,Radio} from "@formily/antd";
import {ISchema} from "@formily/json-schema";
import {ARPanelSelect} from "@tytools/panelselect";
import {ARInputNumber} from "@tytools/inputnumber";
import {ARFormBlock} from "@tytools/formblock";
import {ARImgRadio} from "@tytools/img-radio";
import {ARSudoku} from "@tytools/sudoku";
import "antd/dist/antd.css";
import "@formily/antd/dist/antd.css";
import "@tytools/inputnumber/dist/index.css";
import "formblock/dist/index.css";
import "@tytools/img-radio/dist/index.css";
import "@tytools/sudoku/dist/index.css";

const form = createForm({
  validateFirst:true,
})

const SchemaField = createSchemaField({
  components:{
    FormItem,
    ARPanelSelect,
    ARInputNumber,
    ARFormBlock,
    Radio,
    ARImgRadio,
    ARSudoku,
  }
})

export interface ARFormExampleProps {
  schema:ISchema,
  children?:any,
}

export const ARFormExmaple:React.FC<ARFormExampleProps> = ({...props})=>{

  return (
    <Form
      form={form}
      labelCol={4}
      wrapperCol={16}
      labelAlign="left"
      layout="horizontal"
      size="large"
    >
      <SchemaField schema={props.schema}>
        {props.children}
      </SchemaField>
    </Form>
  )
}