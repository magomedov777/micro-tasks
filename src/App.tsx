import { title } from 'process';
import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';
import { Input } from './Input';


const App = () => {
  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' }
  ])

  const [title, setTitle] = useState('')

  const addMessage = (title: string) => {
    let messNew = { message: title }
      setMessage([messNew, ...message])
  }
  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }

  return (
    <div className={'App'}>
      <Input setTitle={setTitle} title={title} />
      <Button name={'+'} callBack={callBackButtonHandler} />
      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  )
}





export default App;