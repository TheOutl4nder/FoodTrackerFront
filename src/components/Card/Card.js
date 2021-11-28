import React, { useState, useEffect, useCallback } from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Card({ element }) {
  
  const [isLoading, setIsLoading] = useState([]);
  const [photos, setPhotos] = useState([]);
  const getPlacePhotos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DOCKER}/restaurants/photos?restaurantId=${element.place_id}`,
        {
          method: "GET",
          headers: {},
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not get restaurants");
      }
      if(data.body.result.photos){
        let fourPhotos = data.body.result.photos;
        if (data.body.result.photos.length > 4) {
          fourPhotos=data.body.result.photos.slice(0, 4);
        }
        setPhotos(fourPhotos);
      }
      setIsLoading(false);
      
    } catch {
      alert("Something went wrong while getting the photos");
      //setError(true);
    }
  }, [element.place_id]);

  useEffect(() => {
    getPlacePhotos("restaurants");
  }, [getPlacePhotos]);

  return (
    <div className={classes.card_wrap}>
      <Link className={classes.cardLink} to={`/restaurant/${element.place_id}`}>
        <div className={classes.card}>
          <div className={classes.card_left}>
            <div className={classes.card_left_up}>
              <h2 className={classes.title}>{element.name}</h2>
              <div></div>
              <div className={classes.stars}>
                Rating: {element.rating}
                <FaStar></FaStar>
              </div>
            </div>
            <div className={classes.card_left_down}>
              <div className={classes.imageContainer}>
                {photos.length>0&&photos.map((image) => (
                  <img
                    key={image.photo_reference}
                    alt={"broken"}
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${image.photo_reference}&key=${process.env.REACT_APP_API_KEY}
                  `}
                  ></img>
                ))}
                {
                  (photos.length===0 && !isLoading) && <div>
                    <p className={classes.noPhotosLabel}>This place does not have photos</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
