import React from 'react'
import styles from './FoodInput.module.css'

export default function FoodInput({ handleOnkeydown }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter food items hear"
        className={`${styles.foodInput}  text-danger `}
        onKeyDown={handleOnkeydown}
      />
    </div>
  );
}