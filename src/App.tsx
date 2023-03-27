import React, { MouseEvent, useState } from 'react';
import './App.css';
import Button from './Button';
import Input from './Input';


const App = () => {
  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' }
  ])
  let [title, setTitle] = useState('')


  return (
    <div className={'App'}>
      <input type="text" />
      <button>+</button>
    
      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  )
}





export default App;