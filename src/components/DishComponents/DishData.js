import React from "react";
import classes from "./DishData.module.css";

export default function DishData({ dish,photos }) {
  
  
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.name}>
          <h1>{dish.name}</h1>
          
        </div>
        <div><h3>{dish.restaurantName}</h3></div>
        <div className={classes.description}>{dish.description}</div>
        
        
      </div>
      <div className={classes.containerCarousel}>
        {photos.length > 0 &&
          photos.map((image) => (
            <img
              key={image}
              alt={"broken"}
              src={image
                  }
            ></img>
          ))}
      </div>
      <div className={classes.extra}>h</div>
    </div>
  );
}
