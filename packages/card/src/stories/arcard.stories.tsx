import {Story,Meta} from "@storybook/react";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {ARCard,ARCardProps} from "../index";

export default {
  title: "AR/ARCard",
  component: ARCard,
} as Meta;

const Template:Story<ARCardProps> = (args) => {
  return (
    <ARCard {...args} />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  title: "自定义卡片",
  actions:[
    <SettingOutlined
      key="setting"
      onClick={()=>{
        alert('handle setting action');
      }}
    />,
    <EditOutlined
      key="edit"
      onClick={()=>{
        alert('handle edit action');
      }}
    />,
    <div
      key='custom'
      onClick={()=>{
        alert('handle custom action');
      }}
    >
      1234
    </div>,
    <EllipsisOutlined
      key="ellipsis"
      onClick={()=>{
        alert('handle ellipsis action');
      }}
    />,
  ],
  meta: {
    avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    title:'卡片标题',
    description:'卡片描述',
  }
}