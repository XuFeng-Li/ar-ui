import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { Form, FormItem, Input, Password, Submit } from '@formily/antd';
import { Tabs, Card } from 'antd';
import * as ICONS from '@ant-design/icons';
import {VerifyCode} from '../../../component/VerifyCode';
import "antd/dist/antd.css";
import "@formily/antd/dist/antd.css";

const {TabPane} = Tabs;

const normalForm = createForm({
  validateFirst:true,
});

const phontForm = createForm({
  validateFirst:true,
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode
  },
  scope: {
    icon(name:string) {
      // @ts-ignore
      const Icon = ICONS[name];
      return <Icon />
    },
  },
});
export interface LoginDemoProps {

}
export const LoginDemo:React.FC<LoginDemoProps> = ({...props})=>{
  console.log(props);
  return (
    <div
      style={{
        display:'flex',
        flexDirection:"column",
        justifyContent:'flex-start',
        alignItems:'center',
        background:'#eee',
        padding:'40px 0',
      }}
    >
      <Card
        style={{
          width:'400px'
        }}
      >
        <Tabs
          defaultActiveKey="1"
          style={{
            overflow:'visible',
            marginTop:'-10px'
          }}
        >
          <TabPane
            key="1"
            tab="密码登陆"
            tabKey="1"
          >
            <Form
              form={normalForm}
              layout="horizontal"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField>
                <SchemaField.String
                  name="input_uname"
                  title="用户名"
                  required
                  x-decorator="FormItem"
                  x-component="Input"
                  x-validator={{
                    required:true,
                  }}
                  x-component-props={{
                    prefix: "{{icon('UserOutlined')}}",

                  }}
                />
                <SchemaField.String
                  name="input_pwd"
                  title="密&nbsp;&nbsp;&nbsp;&nbsp;码"
                  required
                  x-decorator="FormItem"
                  x-component="Input"
                  x-validator={{
                    required:true,
                  }}
                  x-component-props={{
                    prefix: "{{icon('LockOutlined')}}",
                  }}
                />
              </SchemaField>
              <Submit
                block
                size="large"
              >
                登陆
              </Submit>
            </Form>
          </TabPane>
          <TabPane
            key="2"
            tabKey="2"
            tab="手机登陆"
          >
            <Form
              form={phontForm}
              layout="horizontal"
              size="large"
              onAutoSubmit={console.log}
            >
              <SchemaField>
                <SchemaField.String
                  name="input_phone"
                  title="手机号"
                  required
                  x-decorator="FormItem"
                  x-component="Input"
                  x-validator={{
                    required:true
                  }}
                  x-component-props={{
                    prefix: "{{icon('PhoneOutlined')}}",
                  }}
                />
                <SchemaField.String
                  name="input_verifyCode"
                  title="验证码"
                  required
                  x-decorator="FormItem"
                  x-component="VerifyCode"
                  x-component-props={{
                    prefix: "{{icon('LockOutlined')}}",
                  }}
                  x-reactions={[
                    {
                      dependencies:['.input_phone#value','.input_phone#valid'],
                      fulfill: {
                        state: {
                          // @ts-ignore
                          '.input_verifyCode.readyPost': '{{$deps[0] && $deps[1]}}',
                          '.input_verifyCode.phoneNumber': '{{$deps[0]}}',
                        },
                      }
                    }
                  ]}
                />
              </SchemaField>
              <Submit block size="large">登陆</Submit>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  )
}