import {SchemaForm,registerFormField,connect} from "@formily/react-schema-renderer";
import {PanelSwitch} from "@ar/panelSwitch";
import {ARCustomImg} from "@ar/customimg";

registerFormField(
  'form_input',
  connect()(({value,onChange})=>{
    return <input value={value} onChange={onChange}/>
  })
)
registerFormField(
  'ARCustomImg',
  connect()(({...props})=>{
    console.log("ARCustomImg",props);
    return <ARCustomImg src={props.src || ""} {...props} />
  })
)
registerFormField(
  'PanelSwitch',
  connect()(({...props})=>{
    return <PanelSwitch {...props} />
  })
)

function App() {
  return (
    <div
      className="App"
      style={{
        display:'flex',
        flexDirection:'column'
      }}
    >
      <button
        style={{
          background:'#ABCD09',
          color:"#FFFFFF",
          fontSize:"30px"
        }}
        onClick={()=>{
          console.log("button",<button />)
        }}
      >
        button action
      </button>

      <SchemaForm
        schema={{
          type:'object',
          properties: {
            ARCustomImg: {
              type: 'object',
              'x-component':'ARCustomImg',
              'x-component-props': {
                "src":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F035%2F063%2F726%2F3ea4031f045945e1843ae5156749d64c.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621499403&t=5b58358c15c2ee496010815663524452",
                "width":"200px",
                "height":"200px",
              },
              title:'风景图'
            }
          }
        }}
      />
      <div
        style={{
          width:'100%',
          height:'50px'
        }}
      >
        <PanelSwitch
          size='default'
        />
      </div>

      <SchemaForm
        schema={{
          type:'object',
          properties: {
            ARPanelSwitch: {
              type: 'object',
              'x-component':'PanelSwitch',
              'x-component-props': {
                "loading":false,
                "checked":false,
                "type":"default",
                "style":{
                  "width":"120px",
                  "height":"40px"
                },
                "disabled":true,
                "onChange":(value:boolean)=>{
                  console.log(`switch to ${value}`);
                }
              },
              title:'风景图'
            },
          },
          title:'是否有热地暖'
        }}
      />
    </div>
  );
}

export default App;
