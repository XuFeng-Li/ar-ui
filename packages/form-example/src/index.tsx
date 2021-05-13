import React from "react";
import {createForm} from "@formily/core";
import {createSchemaField} from "@formily/react";
import {Form,FormItem,Radio} from "@formily/antd";
import {ISchema} from "@formily/json-schema";
import {ARPanelSelect} from "@ar/panelselect";
import {ARInputNumber} from "@ar/inputnumber";
import {ARFormBlock} from "formblock";
import {ARImgRadio} from "@ar/img-radio";
import {PanelSwitch} from "@ar/panelSwitch";
import {ARSudoku} from "@ar/sudoku";
import "antd/dist/antd.css";
import "@formily/antd/dist/antd.css";
import "@ar/inputnumber/dist/dist/css/bundle.css";
import "formblock/dist/dist/css/bundle.css";
import "@ar/img-radio/dist/dist/css/bundle.css";
import "@ar/sudoku/dist/dist/css/bundle.css";

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
    PanelSwitch,
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