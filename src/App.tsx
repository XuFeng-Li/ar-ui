import { PanelSwitch } from "@ar/panelSwitch";
import {useState} from "react";
import {Button} from "./stories/Button";

function App() {
  const [displaySwitch,setDisplaySwitch] = useState(false);
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
          console.log("panelSwitch",<PanelSwitch />);
          if (!displaySwitch) {
            setDisplaySwitch(true);
          }
        }}
      >
        button action
      </button>
      {
        displaySwitch &&
          <PanelSwitch
            disabled={false}
            loading
          />
      }
      <Button
        label={"按钮"}
      />
    </div>
  );
}

export default App;
