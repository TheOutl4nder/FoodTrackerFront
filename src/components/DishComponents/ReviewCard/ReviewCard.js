import React from "react";
import classes from "./ReviewCard.module.css";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({review}) {
   
  return (
    <div className={classes.container}>
      <div className={classes.user}>
          <div>{review.username}</div>
          <div><FaStar></FaStar>   {review.rating} </div>
      </div>
      <div className={classes.review}>
          {review.text}
      </div>

    </div>
  );
}
