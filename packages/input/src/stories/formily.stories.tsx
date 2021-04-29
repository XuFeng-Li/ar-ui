import {Story,Meta} from '@storybook/react';
// import {SchemaForm,registerFormField,connect} from '@formily/react-schema-renderer';
import {ARInputProps,ARInput} from '../index';

// registerFormField(
//   "Formily_ARInput",
//   connect()(({...props})=>{
//     return <ARInput {...props} />
//   })
// );

export default {
  title:'Formily/ARInput',
  component:ARInput,
} as Meta;

const Template:Story<ARInputProps> = (args) => {
  return <ARInput {...args} />
  // return (
  //   <SchemaForm
  //     schema={{
  //       type:'object',
  //       properties:{
  //         Formily_ARInput: {
  //           type: 'object',
  //           'x-component':'Formily_ARInput',
  //           'x-component-props': { ...args },
  //           "x-props":{
  //             title:"输入框"
  //           }
  //         },
  //
  //       }
  //     }}
  //   />
  // )
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