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

  const addMessage = (title: string) => {
    let newMessage = { message: title }
    setMessage([newMessage, ...message])
  }
  const callbackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }
  return (
    <div className={'App'}>
    
      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  )
}





export default App;