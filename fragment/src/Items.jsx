import React from "react";
import styles from "./Items.module.css";

export default function Items({ fooditems, handleOnClickBuy }) {
  return (
    <div>
      <li className={`${styles.kgitems} list-group-item color text-danger `}>
        {fooditems}
        <button
          type="button"
          className={`btn btn-info btn-sm ${styles.button}`}
          onClick={handleOnClickBuy}
        >
          Buy
        </button>
      </li>
    </div>
  );
}
