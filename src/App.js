import React from 'react';
import './App.css';
import Hello from './Hello';


function App({name, age}) {
  return <div>
          Hello from App.js updated 
            <div> Another Tree 
              <hr />{name} <br/>Age = {age - 5} </div> 
          <br/>
          <Hello firstname={name}> </Hello>
          </div>   

}

export default App;
