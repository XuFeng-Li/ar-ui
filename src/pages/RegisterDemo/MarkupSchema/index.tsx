
import React, {CSSProperties} from 'react';
import {createForm} from '@formily/core';
import {createSchemaField} from '@formily/react';
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Password,
  Cascader as ARCascader,
  DatePicker,
  Submit,
  Space,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  FormButtonGroup
} from '@formily/antd';

import {action} from "@formily/reactive";
import {Card, Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import '@formily/antd/dist/antd.css';
import styles from './index.module.scss';

const form = createForm({
  validateFirst: true,
});

const IDUpload = (props: any) => {
  console.log(props);
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined/>}>上传文件</Button>
    </Upload>
  )
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    ARCascader,
    Select,
    Password,
    IDUpload,
    Space,
    ArrayItems,
    Editable,
  },
  scope: {
    fetchAddress: (field: any) => {
      const transform = (data:any) => {
        if (!data) return [];
        const tempData = Object.entries(data);
        if (!tempData) return [];
        return  tempData.reduce((buf, [key, value]) => {
          const tempValue:any = value;
          if (!tempValue) return buf;
          if (typeof tempValue === 'string'){
            const tempItem = Object.create({});
            tempItem["label"] = tempValue;
            tempItem["value"] = key;
            return buf.concat(tempItem)
          }
          const { name, code, cities, districts } = tempValue;
          const _cities = transform(cities)
          const _districts = transform(districts)
          const tempItem = Object.create({});
          tempItem["label"] = name;
          tempItem["value"] = code;
          tempItem["children"] = _cities.length ? _cities  : _districts.length ? _districts : undefined;
          return buf.concat(tempItem)
        }, [])
      }
      field.loading = true
      fetch('//unpkg.com/china-location/dist/location.json')
        .then((res) => res.json())
        .then(
          action((data) => {
            field.dataSource = transform(data)
            field.loading = false
          })
        )
    }
  }
})

export interface RegisterDemoProps {
  styles?: CSSProperties,
}

export const RegisterDemo: React.FC<RegisterDemoProps> = ({...props}) => {
  const handleAutoSubmit = (info: any) => {
    console.log(info);
  }
  const handleSubmit = (info: any) => {
    console.log(info)
  }

  return (
    <div
      className={styles.index}
      style={{...props.styles || {}}}
    >
      <Card
        className={styles.card}
        title="新用户注册"
      >
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={handleAutoSubmit}
        >
          <SchemaField>
            <SchemaField.String
              name="input_uname"
              title="用户名"
              required
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name="input_pwd"
              title="密码"
              required
              x-decorator="FormItem"
              x-component="Password"
              x-component-props={{
                checkStrength: true,
              }}
              x-reactions={[
                {
                  dependencies: ['.input_confirm_pwd'],
                  fulfill: {
                    state: {
                      errors:"{{$deps[0] && $self.value && $self.value !== $deps[0] ? '确认密码不匹配' : ''}}" as any
                    }
                  }
                }
              ]}
            />
            <SchemaField.String
              name="input_confirm_pwd"
              title="确认密码"
              required
              x-decorator="FormItem"
              x-component="Password"
              x-component-props={{
                checkStrength: true
              }}
              x-reactions={[
                {
                  dependencies: ['.input_pwd'],
                  fulfill: {
                    state: {
                      errors: '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "确认密码不匹配" : ""}}' as any
                    }
                  }
                }
              ]}
            />
            <SchemaField.Void
              title="姓名"
              x-decorator="FormItem"
              x-decorator-props={{
                asterisk: true,
                feedbackLayout: 'none',
              }}
              x-component="FormGrid"
            >
              <SchemaField.String
                name="input_fname"
                required
                x-decorator="FormItem"
                x-component="Input"
                x-component-props={{
                  placeholder: '姓'
                }}
              />
              <SchemaField.String
                name="input_sname"
                required
                x-decorator="FormItem"
                x-component="Input"
                x-component-props={{
                  placeholder: "名"
                }}
              />
            </SchemaField.Void>
            <SchemaField.String
              name="input_email"
              title="邮箱"
              required
              x-validator="email"
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              title="性别"
              name="input_gender"
              x-decorator="FormItem"
              x-component="Select"
              required
              enum={[
                {label: '男', value: 1},
                {label: '女', value: 2},
                {label: '第三性别', value: 3}
              ]}
            />
            <SchemaField.String
              title="生日"
              name="input_birthday"
              required
              x-decorator="FormItem"
              x-component="DatePicker"
            />
            <SchemaField.String
              title="地址"
              name="input_address"
              required
              x-decorator="FormItem"
              x-component="ARCascader"
              x-reactions="{{fetchAddress}}"
            />
            <SchemaField.String
              title="身份证复印件"
              name="input_idCard"
              required
              x-decorator="FormItem"
              x-component="IDUpload"
            />
            <SchemaField.Array
              title="联系人信息"
              name="contacts"
              required
              x-decorator="FormItem"
              x-component="ArrayItems"
            >
              <SchemaField.Object
                x-component="ArrayItems.Item"
              >
                <SchemaField.Void
                  x-decorator="FormItem"
                  x-component="ArrayItems.SortHandle"
                />
                <SchemaField.Void
                  title="维护联系人信息"
                  name="popover"
                  x-decorator="Editable.Popover"
                  x-component="FormLayout"
                  x-component-props={{
                    layout: 'vertical',
                  }}
                  x-reactions={[
                    {
                      dependencies: ['.popover.name'],
                      fulfill: {
                        schema: {
                          title: "{{$deps[0]}}"
                        }
                      }
                    }
                  ]}
                >
                  <SchemaField.String
                    title="姓名"
                    name="p_input_name"
                    required
                    x-decorator="FormItem"
                    x-component="Input"
                    x-component-props={{
                      style: {width: 300}
                    }}
                  />
                  <SchemaField.String
                      title="邮箱"
                      name="p_input_email"
                      required
                      x-validator={[{required:true},'email']}
                      x-decorator="FormItem"
                      x-component="Input"
                      x-component-props={{
                        style:{width:300}
                      }}
                    />
                    <SchemaField.String
                      title="手机号"
                      name="p_input_phone"
                      required
                      x-validator="phone"
                      x-decorator="FormItem"
                      x-component="Input"
                      x-component-props={{
                        style:{width:300}
                      }}
                    />
                </SchemaField.Void>
                <SchemaField.Void
                  x-decorator="FormItem"
                  x-component="ArrayItems.Remove"
                />

              </SchemaField.Object>
              <SchemaField.Void
                x-component="ArrayItems.Addition"
                title="新增联系人"
              />
            </SchemaField.Array>
          </SchemaField>
          <FormButtonGroup.FormItem>
            <Submit block size="large" onSubmit={handleSubmit}>
              注册
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  )
}
