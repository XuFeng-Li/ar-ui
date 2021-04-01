import React from 'react';
import './App.css';
// @ts-ignore
import {logPerson,Person} from "@ar/util";

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
          const persion:Person = {
            name:"Tom",
            age:22
          };
          logPerson(persion);
        }}
      >
        button action
      </button>
    </div>
  );
}

export default App;
