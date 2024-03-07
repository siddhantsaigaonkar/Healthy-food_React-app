
import React, { useState } from 'react'
import FoodItems from './FoodItems';
import ErrorMsg from './ErrorMsg';
import './App.css'
import Container from './Container';
import FoodInput from './FoodInput';

export default function App() {

  let [fooditems, setfooditems] = useState([]);
  
  // let fooditems =[]
  

  let onKeyDown = (event) => {
    if (event.key === 'Enter') {
     let newFoodItem = event.target.value
      let newItems = [...fooditems, newFoodItem]
      setfooditems(newItems)
    }
  };
  return (
    <div className="maincontainer container">
      <Container>
        <h1 className="heading">Healthy-Food</h1>
    
        <ErrorMsg items={fooditems} />
        <FoodInput handleOnkeydown={onKeyDown}></FoodInput>
        <FoodItems items={fooditems} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy food that are good for your health and
          well-being
        </p>
      </Container>
    </div>
  );
}
