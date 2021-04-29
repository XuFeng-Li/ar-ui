
import {Tabs} from "antd";
import {LoginDemo as MSLoginDemo} from "./pages/LoginDemo/MarkupSchema";
import {LoginDemo as JSLoginDemo} from "./pages/LoginDemo/JsonSchema";
import {LoginDemo as PJLoginDemo} from "./pages/LoginDemo/PureJsx";
import "antd/dist/antd.less";
const {TabPane} = Tabs;
function App() {
  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
      }}
    >
      <Tabs
        style={{overflow:'visible'}}
        defaultActiveKey="key/tabs/markup_schema"
      >
        <TabPane key="key/tabs/markup_schema" tab="MarkupSchema">
          <MSLoginDemo />
        </TabPane>
        <TabPane key="key/tabs/json_schema" tab="JsonSchema">
          <JSLoginDemo />
        </TabPane>
        <TabPane key="key/tabs/pure_jsx" tab="PureJsx">
          <PJLoginDemo />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
