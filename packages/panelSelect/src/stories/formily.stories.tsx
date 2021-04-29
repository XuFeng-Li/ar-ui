import {Meta,Story} from "@storybook/react";
// import {SchemaForm,registerFormField,connect} from "@formily/react-schema-renderer";

import {ARPanelSelect,ARPanelSelectProps} from "../index";

export default {
  title:'Formily/panelSelect',
  component:ARPanelSelect,
} as Meta;

// registerFormField(
//   "Formily_ARPanelSelect",
//   connect()(({...props})=><ARPanelSelect {...props} />)
// )

const Template:Story<ARPanelSelectProps> = (args) => {
  return <ARPanelSelect {...args} />
  // return (
  //   <SchemaForm
  //     schema={{
  //       type:'object',
  //       properties: {
  //         Formily_ARPanelSelect: {
  //           type:'object',
  //           'x-component':'Formily_ARPanelSelect',
  //           'x-component-props': { ... args }
  //         }
  //       }
  //     }}
  //   />
  // );
}

export const Primary = Template.bind({});
Primary.args = {
  addonBefore:'自定义前缀',
  addonAfter:'自定义后缀',
  dataSource:[
    {value:"value01",label:"label01"},
    {value:"value02",label:"label02"},
    {value:"value03",label:"label03"},
    {value:"value04",label:"label04"},
    {value:"value05",label:"label05"},
  ],
  onChange:(value)=>{
    alert(`select - ${value}`);
  }
};