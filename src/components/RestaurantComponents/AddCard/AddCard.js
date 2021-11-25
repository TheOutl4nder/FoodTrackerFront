import React from "react";
import classes from "./AddCard.module.css";

import { FaPlusCircle } from "react-icons/fa";

export default function AddCard(props) {
  const clickHandler=()=>{
    props.onClick();
  }

  return (
    <div className={classes.card_wrap}>
      <div className={classes.card}>
        <div className={classes.card_up}>
          <FaPlusCircle onClick={clickHandler}size={50}></FaPlusCircle>
        </div>
        <div className={classes.card_down}>
          <p>¿No encontraste tu platillo? Añadelo tu mismo</p>
        </div>
      </div>
    </div>
  );
}
