import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import classes from "./ReviewContainer.module.css";

export default function ReviewContainer(props) {
    
  return (
    <div className={classes.container}>
      {props.reviews.length > 0 &&
        props.reviews.map((review) => (
          <ReviewCard key={review.reviewId} review={review}></ReviewCard>
        ))}
    </div>
  );
}
