
// import {Tabs} from "antd";
// import {LoginDemo as MSLoginDemo} from "./pages/LoginDemo/MarkupSchema";
// import {LoginDemo as JSLoginDemo} from "./pages/LoginDemo/JsonSchema";
// import {LoginDemo as PJLoginDemo} from "./pages/LoginDemo/PureJsx";
// import {RegisterDemo as MSRegisterDemo} from './pages/RegisterDemo/MarkupSchema';

import ArrayItemsDemo01 from './component/Formily/ArrayItems/Demo01'
import 'antd/dist/antd.css';
import '@formily/antd/dist/antd.css';
// import 'antd/lib/tabs/style';
// const {TabPane} = Tabs;
function App() {
  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
      }}
    >
      {/*<Tabs*/}
      {/*  style={{overflow:'visible'}}*/}
      {/*  defaultActiveKey="key/tabs/markup_schema"*/}
      {/*>*/}
      {/*  <TabPane key="key/tabs/markup_schema" tab="MarkupSchema">*/}
      {/*    <MSLoginDemo />*/}
      {/*  </TabPane>*/}
      {/*  <TabPane key="key/tabs/json_schema" tab="JsonSchema">*/}
      {/*    <JSLoginDemo />*/}
      {/*  </TabPane>*/}
      {/*  <TabPane key="key/tabs/pure_jsx" tab="PureJsx">*/}
      {/*    <PJLoginDemo />*/}
      {/*  </TabPane>*/}
      {/*  <TabPane key="key/tabs/register/markup_schema" tab="Register/MarkupSchema">*/}
      {/*    <MSRegisterDemo />*/}
      {/*  </TabPane>*/}
      {/*</Tabs>*/}
      <ArrayItemsDemo01 />
    </div>
  );
}

export default App;
