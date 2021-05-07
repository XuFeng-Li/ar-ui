// import React from 'react'
import {
  Input,
  DatePicker,
  Editable,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@formily/antd'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'

const SchemaField = createSchemaField({
  components: {
    DatePicker,
    Editable,
    Input,
    FormItem,
  },
})

const form = createForm()

export default () => (
  <FormProvider form={form}>
    <SchemaField>
      <SchemaField.String
        name="date"
        title="日期"
        x-decorator="Editable"
        x-component="DatePicker"
      />
      <SchemaField.String
        name="input"
        title="输入框"
        x-decorator="Editable"
        x-component="Input"
      />
      <SchemaField.Void
        name="void"
        title="虚拟节点容器"
        x-component="Editable.Popover"
        x-reactions={(field) => {
          field.title = field.query('.void.date2').get('value') || field.title
        }}
      >
        <SchemaField.String
          name="date2"
          title="日期"
          x-decorator="FormItem"
          x-component="DatePicker"
        />
        <SchemaField.String
          name="input2"
          title="输入框"
          x-decorator="FormItem"
          x-component="Input"
        />
      </SchemaField.Void>
      <SchemaField.Object
        name="iobject"
        title="对象节点容器"
        x-component="Editable.Popover"
        // x-reactions={(field) => {
        //   field.title = field.value?.date || field.title
        // }}
      >
        <SchemaField.String
          name="date"
          title="日期"
          x-decorator="FormItem"
          x-component="DatePicker"
        />
        <SchemaField.String
          name="input"
          title="输入框"
          x-decorator="FormItem"
          x-component="Input"
        />
      </SchemaField.Object>
    </SchemaField>
    <FormButtonGroup>
      <Submit onSubmit={console.log}>提交</Submit>
    </FormButtonGroup>
  </FormProvider>
)