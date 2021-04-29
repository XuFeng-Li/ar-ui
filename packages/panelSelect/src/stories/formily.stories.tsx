import {Meta,Story} from "@storybook/react";
import {createForm} from "@formily/core";
import {Field} from "@formily/react";
import {Form,FormItem} from "@formily/antd";

import {ARPanelSelect,ARPanelSelectProps} from "../index";

export default {
  title:'Formily/panelSelect',
  component:ARPanelSelect,
} as Meta;

const normalForm = createForm({
  validateFirst:true
});

const Template:Story<ARPanelSelectProps> = (args) => {
  return (
    <Form form={normalForm} size="large">
      <Field
        name="Select"
        title="下拉选择框"
        required
        decorator={[FormItem]}
        component={[
          ARPanelSelect,
          {...args}
        ]}
      />
    </Form>
  )
  // return <ARPanelSelect {...args} />
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