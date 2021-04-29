import {Story,Meta} from '@storybook/react';
import {createForm} from "@formily/core";
import {Field} from "@formily/react";
import {Form,FormItem} from "@formily/antd";
import {ARInputProps,ARInput} from '../index';

const normalForm = createForm({
  validateFirst:true
});

export default {
  title:'Formily/ARInput',
  component:ARInput,
} as Meta;

const Template:Story<ARInputProps> = (args) => {
  return (
    <div>
      <Form form={normalForm} size="large">
        <Field
          name="ARInput"
          title="输入框"
          required
          decorator={[FormItem]}
          component={[
            ARInput,
            {...args}
          ]}
        />
      </Form>
    </div>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  placeholder:'Basic usage',
  size:'middle',
  maxLength:10,
  allowClear: true,
  prefix:(<div>Prefix - </div>),
  suffix:(<div> - suffix</div>),
  addonBefore:'before',
  addonAfter: 'after',
  onChange:(value)=>{
    console.log("********************   onChange ",value);
  },
  onPressEnter:(value)=>{
    console.log("********************    onPressEnter ",value);
  }
}