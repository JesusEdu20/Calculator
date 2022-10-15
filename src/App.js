
import './App.css';
import Boton from './components/button';
import Screen from './components/screen.js';
import ButtonClear from './components/buttonClear';
import {useState} from "react";

function App() {



  const [input, setInput]= useState("");

   const addInput=(val)=>{
      setInput(input+val)
   }

   const clear=()=>{
    setInput("");
  }

  /*const operation=()=>{

    setInput( new Function('return ' + input)());
    
  }*/


  return (
    <div className="App">
      <div className='calculator-container'>
      
        <Screen input={input} />
        
        <div className='fila'>
          <Boton handler={addInput}>1</Boton>
          <Boton handler={addInput}>2</Boton>
          
          <Boton handler={addInput}>3</Boton>
          <Boton handler={addInput}>+</Boton>

        </div>
        
        <div className='fila'>
          <Boton handler={addInput}>4</Boton>
          <Boton handler={addInput}>5</Boton>
          <Boton handler={addInput}>6</Boton>
          <Boton handler={addInput}>-</Boton> 
        </div>

        <div className='fila'>
          <Boton handler={addInput}>7</Boton>
          <Boton handler={addInput}>8</Boton>
          <Boton handler={addInput}>9</Boton>
          <Boton handler={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton handler={addInput}>=</Boton>
          <Boton handler={addInput}>0</Boton>
          <Boton handler={addInput}>.</Boton>
          <Boton handler={addInput}>/</Boton>
        </div>

       <ButtonClear clearHandler={clear}>Clear</ButtonClear>
       
        
      </div>
    </div>
  );
}

export default App;

