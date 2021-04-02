// import React from 'react';
import './App.css';
import {fixedZero,UtilRoundType} from "@ar/util";

function App() {

  return (
    <div className="App">
      <button
        style={{
          background:'#ABCD09',
          color:"#FFFFFF",
          fontSize:"30px"
        }}
        onClick={()=>{
          const str = fixedZero(3.4,10,UtilRoundType.Up);
          console.log(str);
        }}
      >
        button action
      </button>
    </div>
  );
}

export default App;
