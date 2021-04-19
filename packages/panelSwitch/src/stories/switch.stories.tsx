
import {Meta,Story} from "@storybook/react/types-6-0";

import {ARPanelSwitchProps,PanelSwitch} from '../index';

export default {
  title: "AR/PanelSwitch",
  component: PanelSwitch,
} as Meta;

// <Meta title="AR/PanelSwitch" component={PanelSwitch} />

const Template:Story<ARPanelSwitchProps> = (args) => <PanelSwitch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size:'default',
  defaultChecked:undefined,
  checked:true,
  disabled:true,
  loading:false,
  onClick:undefined,
  onChange:(checked)=>{
    alert(`switch to ${checked}`);
  },
}

export const Disable = Template.bind({});
Disable.args = {
  defaultChecked:true,
  disabled:true,
  size:'default'
}