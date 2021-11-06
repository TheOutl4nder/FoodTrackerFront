import React from "react";
import classes from "./Card.module.css";

export default function Card({element}) {
  const img_url =
    "https://1000marcas.net/wp-content/uploads/2021/05/Chilis-Logo-2002.png";

  return (
    <div className={classes.card_wrap}>
      <div className={classes.card}>
        <div className={classes.card_right}>
          <img alt={"broken"} src={element.logo}></img>
        </div>
        <div className={classes.card_left}>
            <div className={classes.card_left_up}>
                <h2 className={classes.title}>{element.name}</h2>
                <div className={classes.stars}>Stars</div>
            </div>
            <div className={classes.card_left_down}>abajo</div>
         
        </div>
      </div>
    </div>
  );
}
