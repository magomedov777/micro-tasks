import React, {MouseEvent, useState} from 'react';
import './App.css';
// import Button from './Button';
// import NewComponent from './NewComponent';



// const students = [
//   {id: 1, name: "James", age: 8},
//   {id: 2, name: "Robert", age: 18},
//   {id: 3, name: "John", age: 28},
//   {id: 4, name: "Michael", age: 38},
//   {id: 5, name: "William", age: 48},
//   {id: 6, name: "David", age: 58},
//   {id: 7, name: "Richard", age: 68},
//   {id: 8, name: "Joseph", age: 78},
//   {id: 9, name: "Thomas", age: 88},
//   {id: 10, name: "Charles", age: 98},
//   {id: 11, name: "Christopher", age: 100},
// ]


// const cars = [
//   {manufacturer:'BMW', model:'m5cs'},
//   {manufacturer:'Mercedes', model:'e63s'},
//   {manufacturer:'Audi', model:'rs6'}
// ]



function App(){
  // const myFirsSubscriber = (event: MouseEvent<HTMLButtonElement>) => {alert('Hello, i am Vasya')}
  // const subscriber = (event: MouseEvent<HTMLButtonElement>) => {alert('Hello, i am Ivan')}
  // const onClickHandler = (name: string) => {alert(name)}
  // const foo1 = () => {alert('100200')}
  // const foo2 = (num: number) => {alert(num)}
// const Button1Foo = (subscriber: string, age: number) => {console.log(subscriber, age)}
// const Button2Foo = (subscriber: string, age: number) => {console.log(subscriber, age)}
// const Button3Foo = () => {console.log('I am stupid button')}
let plus = () => {setNumber(++number)}
let minus = () => {setNumber(--number)}
let del = () => {setNumber(0)}

let[number, setNumber] = useState(0)
return (
  <div>
    <h1 style={{display: 'flex', justifyContent: 'center'}}>{number}</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={plus} style={{margin: '10px'}}>PLUS</button>
        <button onClick={del} style={{margin: '10px'}}>NULL</button>
        <button onClick={minus} style={{margin: '10px'}}>MINUS</button>
      </div>
  </div>
   )}

   {/* 
  <NewComponent students={students}/>
  <NewComponent cars={cars}/> */}

  {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>AddYoutubeChannel-1</button>
  <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>AddYoutubeChannel-2</button> */}
 
{/*  
  <Button name={"YoutubeChannel-1"} callBack={() => Button1Foo('I am Vasya', 21)}/>
  <Button name={"YoutubeChannel-2"} callBack={() => Button2Foo('I am Ivan', 24)}/>

  <Button name={'Stupid'} callBack={Button3Foo}/> */}

  {/* <button>AddYoutubeChannel-1</button>
  <button>AddYoutubeChannel-2</button> */}


{/* <button onClick={foo1}>1</button>
<button onClick={() => foo2(100200)}>2</button> */}





export default App;
