import {Story,Meta} from '@storybook/react';
import React from 'react';

import {ARImgRadio,ARImgRadioProps} from '../index';

export default {
  title: 'AR/ARImgRadio',
  component: ARImgRadio,
} as Meta;

const Template:Story<ARImgRadioProps> = (args) => {
  return <ARImgRadio {...args} />
}

export const Primary = Template.bind({});
Primary.args = {
  dataSource:[
    {
      img: 'https://img.asman.com.cn/assets/1567159387205_15543.png',
      key: 1,
      name: '瓷砖',
      needOssProcess:true,
      value: 'BM-XT-SM-0004',
    },
    {
      img: 'https://img.asman.com.cn/assets/1567159401605_51882.png',
      key: 2,
      name: '木地板',
      needOssProcess:true,
      value: 'BM-XT-SM-0003'
    },
    {
      img: 'https://img.asman.com.cn/assets/1567159401568_64748.png',
      key: 3,
      name: '大理石',
      needOssProcess:true,
      value: 'BM-XT-SM-0010'
    },
    {
      img: 'https://img.asman.com.cn/assets/1567159401568_64748.png',
      key: 4,
      name: '大理石',
      needOssProcess:true,
      value: 'BM-XT-SM-0011'
    }
  ]
}