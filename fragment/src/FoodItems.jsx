import React from 'react'
import Items from './Items';
import './App.css'
export default function FoodItems(prop) {
  return (
    <div>
      <ul className="list-group ">
        {prop.items.map((ite) => (
          <Items key={ite} fooditems={ite} handleOnClickBuy={()=>console.log(`${ite} is bought`)} />
        ))}
      </ul>
    </div>
  );
}
