import './App.css';
import Keypad from './Keypad.js';
import {useState} from 'react';
function App() {
  let [input,setInput] = useState("");

  function handleClick(value){
      setInput(input+value);
  } 
  function clearInput(){
    setInput("");
  }
  function calculate(value){
      let output = eval(input);
      setInput(output);
  }
  return (
    <div className='container'>
      <h1>Calculator using ReactJs</h1>
      <div className='calculator'>
        <input type='text' value={input}/>
        <Keypad handleClick={handleClick} clearInput={clearInput} calculate={calculate}></Keypad>
      </div>

    </div>
  );
}

export default App;
