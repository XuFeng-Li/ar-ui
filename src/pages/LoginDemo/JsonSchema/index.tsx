import React, {CSSProperties} from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Form, FormItem, Input, Password, Submit } from '@formily/antd'
import { Tabs, Card } from 'antd'
import * as ICONS from '@ant-design/icons'
import {VerifyCode} from '../../../component/VerifyCode';
import {ISchema} from "@formily/json-schema";
import "antd/dist/antd.css";
import "@formily/antd/dist/antd.css";

const {TabPane} = Tabs;
const normalForm = createForm({
  validateFirst:true,
});
const phoneForm = createForm({
  validateFirst:true,
});
const SchemaField = createSchemaField({
  components:{
    FormItem,
    Input,
    Password,
    VerifyCode,
  },
  scope:{
    icon(name:string) {
      // @ts-ignore
      const Icon = ICONS[name];
      return <Icon />;
    }
  }
})

const normalSchema: ISchema = {
  type:'object',
  properties:{
    input_uname: {
      type: 'string',
      title:'用户名',
      required:true,
      'x-decorator':'FormItem',
      'x-component':'Input',
      'x-component-props':{
        prefix:"{{icon('UserOutlined')}}"
      }
    },
    input_psw:{
      type:'string',
      title: `密 码`,
      required: true,
      'x-decorator':'FormItem',
      'x-component':'Input',
      'x-component-props':{
        prefix: "{{icon('LockOutlined')}}",
      }
    }
  }
}

const phoneSchema: ISchema = {
  type: 'object',
  properties: {
    input_phone: {
      type: 'string',
      title: '手机号',
      required: true,
      'x-decorator':'FormItem',
      'x-component':"Input",
      'x-component-props':{
        prefix:"{{icon('PhoneOutlined')}}",
      }
    },
    input_verifyCode: {
      type: 'string',
      title: '验证码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'VerifyCode',
      'x-component-props': {
        prefix: "{{icon('LockOutlined')}}"
      },
      'x-reactions': [
        {
          dependencies: ['.input_phone#value','.input_phone#valid'],
          fulfill: {
            state: {
              // @ts-ignore
              '.input_verifyCode.readyPost': '{{$deps[0] && $deps[1]}}',
              '.input_verifyCode.phoneNumber': '{{$deps[0]}}',
            },
          }
        }
      ]
    }
  }
}

export interface LoginDemoProps {
  styles?:CSSProperties,
}

export const LoginDemo:React.FC<LoginDemoProps> = ({...props}) => {
  console.log(props);
  return (
    <div
      style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:'flex-start',
        padding:'40px 0',
        background:'#eee',
        ...props.styles || {},
      }}
    >
      <Card
        style={{
          width:"400px",
        }}
      >
        <Tabs
          defaultActiveKey="1"
          style={{
            overflow:"visible",
            marginTop:"-10px",
          }}
        >
          <TabPane
            key="1"
            tab="密码登陆"
          >
            <Form
              form={normalForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField schema={normalSchema} />
              <Submit block size="large" onSubmit={console.log}>登陆</Submit>
            </Form>
          </TabPane>
          <TabPane
            key="2"
            tab="手机登陆"
          >
            <Form
              form={phoneForm}
              layout="vertical"
              size="large"
            >
              <SchemaField schema={phoneSchema} />
              <Submit block size="large" onSubmit={console.log}>登陆</Submit>
            </Form>
          </TabPane>
        </Tabs>
        <div
          style={{
            display:'flex',
            justifyContent:'space-between'
          }}
        >
          <a href="#新用户注册">新用户注册</a>
          <a href="#忘记密码">忘记密码</a>
        </div>
      </Card>
    </div>
  )
}