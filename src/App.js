import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Message} from './Message'

function App() {

  let [count, setCount] = useState(2)
  let [isMorning, setMorning] = useState(true)

  return (
    <div className={`box ${isMorning ? 'dayLight' : 'box' } `}>

    <h3>Day Time = { isMorning ? "Morning" : "Night" } </h3>
      <Message counter={count} />
      <br />
    <button onClick={ ()=> setCount(count + 1) } >Update</button>
    <button onClick={ ()=> setMorning(!isMorning)} >Change Daye</button>
    
    </div>
  );
}

export default App;
