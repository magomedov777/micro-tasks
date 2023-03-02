import React from 'react';
import logo from './logo.svg';
import './App.css';


type CarsTypeProps = {
  manufacturer: string,
  model: string
};
const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]

function App(props: CarsTypeProps){
  
  return (
    <div className="App">
     <ul>
      <li>{props.model}</li>
      <li>{props.model}</li>
      <li>{props.model}</li>
     </ul>
    </div>
  );
}

export default App;
