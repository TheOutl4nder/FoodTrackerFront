import React from "react";
import classes from "./RestaurantData.module.css";
import { FaStar } from "react-icons/fa";
export default function RestaurantData({data}) {
  
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.name}>
          <h1>{data.name}</h1>
         <div className={classes.stars}>
              Rating: {data.rating}   
                  <FaStar></FaStar>
         </div>
        </div>
        <div>
          <h3>{data.formatted_address}</h3>
        </div>
      </div>
    </div>
  );
}
