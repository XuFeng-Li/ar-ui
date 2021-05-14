import React, {useEffect, useState} from "react";
import {Story, Meta} from "@storybook/react";
import ARConfigProvider from "@ar/config-provider";
import {ARPanelSelect} from "@ar/panelselect";
import {ARFormExmaple} from "../index";
import mockFetcher from "../fetcher/fetch";
import {ISchema} from "@formily/json-schema";

export default {
  title: "AR/FormExmaple",
  component: ARFormExmaple,
} as Meta;

interface ARRaceInfo {
  key: string,
  code: string,
  name: string,
}

const Template: Story = () => {
  const [list, setList] = useState<ARRaceInfo[]>([])
  const [schema, setSchema] = useState<ISchema | undefined>();
  useEffect(() => {
    setList(mockData);
  }, []);
  const selectChangeHandler = (code: string) => {
    const schema = fetchSchema(code);
    if (!schema) return;
    setSchema(schema);
  }
  console.log(schema);
  return (
    <ARConfigProvider fetcher={mockFetcher}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <h2 style={{padding: "20px 0"}}>配置面板</h2>
        <ARPanelSelect
          dataSource={list.map((item) => ({label: item.name, value: item.code}))}
          onSelect={selectChangeHandler}
        />
        {
          schema &&
          (
            <div>
              <h2 style={{padding: "20px 0"}}>配置面板</h2>
              <ARFormExmaple
                schema={schema}
              />
            </div>
          )
        }

      </div>
    </ARConfigProvider>
  )
}

export const Primary = Template.bind({});


const mockData: ARRaceInfo[] = [
  {
    code: "1",
    key: "1",
    name: "族1"
  },
  {
    code: "2",
    key: "2",
    name: "族2"
  }
];

const schemaMapList: { code: string, schema: ISchema }[] = [
  {
    code: "1",
    schema: {
      type: 'object',
      properties: {
        "inputnumber_01": {
          type: "string",
          title: "长度",
          "x-decorator": "FormItem",
          "x-component": "ARInputNumber",
          "x-component-props": {
            addonAfter: "平方米",
            min: 0,
            size: 'large',
            onChange: (value: number) => {
              console.log('change number input 01 - ', value);
            }
          }
        },
        "block_01": {
          type: "object",
          "x-component": "ARFormBlock",
          "x-component-props": {
            title: "block 01",
          },
          properties: {
            "block_01_inputnumber_01": {
              type: "string",
              title: "长度",
              "x-decorator": "FormItem",
              "x-component": "ARInputNumber",
              "x-component-props": {
                addonAfter: "平方米",
                min: 0,
                size: 'large',
                onChange: (value: number) => {
                  console.log('change number input 01 - block 01 - ', value);
                }
              }
            },
            "block_01_radio_01": {
              type: "number",
              title: "颜色",
              "x-decorator": "FormItem",
              "x-component": "Radio.Group",
              enum: [
                {label: "红色", value: 1},
                {label: "天空蓝", value: 2},
                {label: "酱紫色", value: 3},
                {label: "高亮黑", value: 4},
              ]
            }
          }
        },
        block_02: {
          type: "object",
          "x-component": "ARFormBlock",
          "x-component-props":{
            title:"block 02",
          },
          properties:{
            block_02_area:{
              type:"string",
              title: "面积选择",
              required:true,
              "x-decorator":"FormItem",
              "x-component":"ARPanelSelect",
              "x-component-props":{
                addonAfter:"平方米",
                dataSource:[
                  { label:"不大于120", value:"area-level-01" },
                  { label:"120 ~ 140", value:"area-level-02" },
                  { label:"不小于140", value:"area-level-03" },
                ],
                onSelect:(value:string)=>{
                  console.log("on select area level : ",value);
                }
              }
            },
            block_02_putie:{
              type:"string",
              title:"铺贴方式",
              "x-decorator":"FormItem",
              "x-component":"ARImgRadio",
              "x-component-props":{
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
                ],
                initialValue:'BM-XT-SM-0003',
              }
            },
            /*block_02_floorheating:{
              type:"boolean",
              title:"是否有地暖",
              "x-decorator":"FormItem",
              "x-component":"PanelSwitch",
              "x-component-props":{

              }
            },*/
            block_02_startPoint:{
              type:'string',
              title:"起铺点",
              "x-decorator":"FormItem",
              "x-component":"ARSudoku",
              "x-component-props":{

              }
            }
          }
        }
      }
    }
  },
  {
    code: "2",
    schema: {
      type: 'string',
    }
  }
]
const fetchSchema = (code: string) => {
  if (!code || code.length <= 0) return undefined;
  let schema: ISchema | undefined;
  for (let index = 0; index < schemaMapList.length; index++) {
    const map = schemaMapList[index];
    if (code !== map.code) {
      continue;
    }
    schema = map.schema;
    break;
  }
  return schema;
}