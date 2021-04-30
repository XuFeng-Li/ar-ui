
import React, {CSSProperties} from 'react'
import { createForm } from '@formily/core'
import {Field} from "@formily/react";
import { Form, FormItem, Input, Submit } from '@formily/antd'
import { Tabs, Card } from 'antd'
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons'
import {VerifyCode} from "../../../component/VerifyCode";
import "antd/dist/antd.css";
import "@formily/antd/dist/antd.css";

const {TabPane} = Tabs;

const normalForm = createForm({
  validateFirst:true
});
const phoneForm = createForm({
  validateFirst:true
});

export interface LoginDemoProps {
  styles?:CSSProperties,
}

export const LoginDemo:React.FC<LoginDemoProps> = ({...props}) => {

  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:'40px 0',
        background:'#eee',
        ...props.styles || {}
      }}
    >
      <Card style={{width:'400px'}}>
        <Tabs
          defaultActiveKey="1"
          style={{
            overflow:'visible',
            marginTop:'-10px'
          }}
        >
          <TabPane key="1" tab="密码登陆">
            <Form
              form={normalForm}
              layout="horizontal"
              size="large"
              onAutoSubmit={console.log}
            >
              <Field
                name="input_uname"
                title="用户名"
                required
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    prefix:<UserOutlined />
                  }
                ]}
              />
              <Field
                name="input_pwd"
                title="密&nbsp;&nbsp;&nbsp;&nbsp;码"
                required
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    prefix:<LockOutlined />
                  }
                ]}
              />
              <Submit block size="large" onSubmit={console.log}>登陆</Submit>
            </Form>
          </TabPane>
          <TabPane key="2" tab="手机登陆">
            <Form
              form={phoneForm}
              layout="horizontal"
              size="large"
            >
              <Field
                name="input_phone"
                title="手机号"
                required
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    prefix:<PhoneOutlined />
                  }
                ]}
              />
              <Field
                name="input_verifyCode"
                title="验证码"
                required
                decorator={[FormItem]}
                component={[
                  VerifyCode,
                  {
                    prefix:<LockOutlined />
                  }
                ]}
                reactions={(field)=>{
                  const phone = field.query('.input_phone');
                  const readyPost = phone.get('value') && phone.get('valid');
                  const phoneNumber = phone.get('value');
                  field.setComponentProps({
                    readyPost: readyPost,
                    phoneNumber: phoneNumber,
                  })
                }}
              />
              <Submit block size="large" onSubmit={console.log}>登陆</Submit>
            </Form>
          </TabPane>
        </Tabs>
        <div style={{display:'flex', justifyContent:"space-between"}}>
          <a href="#新用户注册">新用户注册</a>
          <a href="#忘记密码">忘记密码</a>
        </div>
      </Card>
    </div>
  )
}
