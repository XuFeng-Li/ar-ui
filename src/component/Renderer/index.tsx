import {FC,useMemo,useState,useEffect} from 'react';
import {FormProvider,createSchemaField,Schema} from '@formily/react';
import {createForm} from '@formily/core';
import {Card} from 'antd';
import {Form,Input,FormItem,ArrayTable,Password} from '@formily/antd';
import {VerifyCode} from '../VerifyCode';

import 'antd/lib/tabs/style';
import 'antd/lib/button/style';

const phoneSchema = {
  type:'object',
  properties: {
    phone: {
      type:'string',
      title:'手机后',
      require:true,
      'x-validator':"phone",
      'x-decorator':"FormItem",
      'x-component':"Input",
      'x-component-props':{
        prefix:"{{icon('PhoneOutlined')}}"
      }
    },
    verifyCode:{
      type:"string",
      title: "验证码",
      require: true,
      "x-decorator": "FormItem",
      "x-component": "VerifyCode",
      "x-component-props": {
        prefix: "{{icon('LockOutlined')}}"
      },
      "x-reactions": [
        {
          dependencies: [".phone#value", ".phone#valid"],
          fulfill: {
            state: {
              "component[1].readyPost": "{{$deps[0] && $deps[1]}}",
              "component[1].phoneNumber": "{{$deps[0]}}"
            }
          }
        }
      ]
    }
  }
}

function getComponents() {
  return {
    FormItem,
    Input,
    ArrayTable,
    Password,
    VerifyCode,
    SubForm:()=>{
      return (
        <Card title="子表单">
          <FormRender
            schema={phoneSchema}
            // scope={scope}
            // onInit={(f)=>{
            //   window["_subform"] = f;
            // }}
          />
        </Card>
      )
    }
  }
}

export interface FormRenderProps {
  children?:any,
  schema?:any,
  scope?:any,
  onInit?:Function
}

export const FormRender:FC<FormRenderProps> = ({...props})=>{
  const {children,schema,scope,onInit} = props;
  const [current, setCurrent] = useState({});
  const _form = useMemo(() => {
    return createForm({});
  }, [current]);
  useEffect(() => {
    let schemaData = {};
    if (
      typeof schema === "object" &&
      schema &&
      Object.keys(schema).length > 0
    ) {
      schemaData = new Schema(schema);
    }
    setCurrent(schemaData);
  }, [schema]);
  let SchemaField = useMemo(() => {
    return createSchemaField({
      components: getComponents(),
      scope: scope
    });
  }, [current]);
  typeof onInit === "function" && onInit(_form);

  // window["_form"] = _form;
  return (
    <div>
      <FormProvider form={_form}>
        <Form form={_form}>
          <SchemaField schema={current}>
            {children}
          </SchemaField>
        </Form>
      </FormProvider>
    </div>
  );
}