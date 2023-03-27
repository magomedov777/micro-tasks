import { title } from 'process';
import React, { useState } from 'react';
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
  let addMessage = (title: string) => {
    let messNew = { message: title };
    setMessage([messNew, ...message])
  }

  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }
  return (
    <div className={'App'}>
      <Input title={title} setTitle={setTitle} />
      <Button name={'+'} callBack={() => callBackButtonHandler()} />
      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  )
}





export default App;