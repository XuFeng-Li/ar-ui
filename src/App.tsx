import React,{useState} from "react";
import {Radio} from "antd";
import 'antd/dist/antd.css';
import '@formily/antd/dist/antd.css';
function App() {

  const [radioValue,setRadioValue] = useState<string|undefined>(undefined);
  console.log('render -- value is - ',radioValue);
  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
      }}
    >
      <div
        style={{
          padding:'20px'
        }}
      >
        <span>AR Input Number</span>
        <hr />
        <Radio.Group
          value={radioValue}
          onChange={(event)=>{
            const {target:{value}} = event;
            console.log('on change -- value is - ',value);
            if (value === 'undefined'){
              setRadioValue(undefined);
              return;
            }
            if (value === radioValue)return;
            setRadioValue(value);
          }}
        >
          <Radio value='undefined'>undefined</Radio>
          <Radio value='small'>small</Radio>
          <Radio value='middle'>middle</Radio>
          <Radio value='large'>large</Radio>
        </Radio.Group>
        <br />
        <div>
          {/*<ARInputNumber*/}
          {/*  size={radioValue}*/}
          {/*  addonBefore={'123'}*/}
          {/*  addonAfter={'321'}*/}
          {/*  max={10}*/}
          {/*  min={1}*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
