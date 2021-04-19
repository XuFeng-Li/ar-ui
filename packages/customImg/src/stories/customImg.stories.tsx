import {Story,Meta} from '@storybook/react'
import {ARCustomImg,ARCustomImgPorps} from '../index';
export default {
  title:'AR/CustomImg',
  component: ARCustomImg,
} as Meta;

const Template:Story<ARCustomImgPorps> = (args) => <ARCustomImg {...args} />;

export const Primary = Template.bind({});
Primary.args = {

}