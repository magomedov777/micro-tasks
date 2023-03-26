import React, {MouseEvent, useState} from 'react';
import './App.css';
import Fullinput from './Fullinput';


const App = () => {
  let[message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'}

  ])
  const addMessage = (title: string) => {
    let newMessage = {message: title}
    setMessage([newMessage, ...message])
    
  }
  return (
    <div className={'App'}>
   <Fullinput addMessage={addMessage} />
      {message.map((el, index) => {
        return(
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  )
}





export default App;