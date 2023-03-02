import React, {MouseEvent} from 'react';
import './App.css';
import Button from './Button';
import NewComponent from './NewComponent';



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
const Button1Foo = () => {alert('I am Vasya')}
const Button2Foo = () => {alert('I am Ivan')}

  return (
  <div>
   {/* 
  <NewComponent students={students}/>
  <NewComponent cars={cars}/> */}

  {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>AddYoutubeChannel-1</button>
  <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Ivan')}>AddYoutubeChannel-2</button> */}
 
 
  <Button name={"YoutubeChannel-1"} callBack={Button1Foo}/>
  <Button name={"YoutubeChannel-2"} callBack={Button2Foo}/>

  {/* <button>AddYoutubeChannel-1</button>
  <button>AddYoutubeChannel-2</button> */}


{/* <button onClick={foo1}>1</button>
<button onClick={() => foo2(100200)}>2</button> */}


</div>
  );
}

export default App;
