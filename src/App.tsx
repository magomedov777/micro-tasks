import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';
import { Input } from './Input';

const App: () => JSX.Element = () => {
  let [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' }
  ]);
  const [title, setTitle] = useState('');


  const addMessage = (title: string) => {
    const newMessage = { message: title }
    setMessage([newMessage, ...message])
  };
  const callBackAddMessage = () => {

    addMessage(title)
    setTitle('')
  };

  return (
    <div className={'App'}>
      <Input callBackAddMessage={callBackAddMessage} setTitle={setTitle} title={title} />
      <Button callBackAddMessage={callBackAddMessage} name={'+'} />
      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  )
};





export default App;