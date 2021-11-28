import React, { useState, useEffect, useCallback } from "react";
import classes from "./Card.module.css";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Card({ element }) {
  const dummyPhotos = [
    {
      height: 3024,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/105766621960233600999"\u003eMayra Rodriguez\u003c/a\u003e',
      ],
      photo_reference:
        "Aap_uECy_ttvn8uH3ve970CJSan--xKERMAEqF66UCHswVczCbSptJdo2HGqu_6rNm2pF2TygvA82HghwGtUtvfgiYEEUud8_h8LD1e-QtUmudqZb0vbeeq7_6IAUCI5cRz7Jdsewhe1qlrNNeYqVDnB7WnPc5guspmMAkaTczPbeB1wh0st",
      width: 4032,
    },
    {
      height: 673,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/118233006450015458570"\u003eBlooming ONION\u003c/a\u003e',
      ],
      photo_reference:
        "Aap_uEByOvtn0oI6HEKxTulujf3p8wH55ZmsYS0joI3r0ZH6BvI8PbvES69870WzUJDe1BIC0ZUjobVcB4L23Db1XUbKNH_pkNRCwo32B3Vi10S6ehSFDIQfoaTccRHJNMmPfNYm0lqU_oOLpfUgTiX1Okp7Hz-JaIM9YADtmr6P93y8opXe",
      width: 1200,
    },
    {
      height: 3024,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/105766621960233600999"\u003eMayra Rodriguez\u003c/a\u003e',
      ],
      photo_reference:
        "Aap_uEC2qoznywciOg5WZlJwRZN-iXqp4msWaB1UoLrvoehgSWmdeo4wVQVjCSZN0BBlbeUxndR8OxagzejOcFVWKJvOyER7Pr7RXkCJg2qsmzWdp4hZY3hyLxE55ba2_JvZo_eTUSilI1gD_XSkjl29YTKVpmWZWSiBWpRlWQC6qV4ZyOO7",
      width: 4032,
    },
    {
      height: 3024,
      html_attributions: [
        '\u003ca href="https://maps.google.com/maps/contrib/105766621960233600999"\u003eMayra Rodriguez\u003c/a\u003e',
      ],
      photo_reference:
        "Aap_uECy_ttvn8uH3ve970CJSan--xKERMAEqF66UCHswVczCbSptJdo2HGqu_6rNm2pF2TygvA82HghwGtUtvfgiYEEUud8_h8LD1e-QtUmudqZb0vbeeq7_6IAUCI5cRz7Jdsewhe1qlrNNeYqVDnB7WnPc5guspmMAkaTczPbeB1wh0st",
      width: 4032,
    },
  ];

  const [isLoading, setIsLoading] = useState([]);
  const [photos, setPhotos] = useState([]);
  const getPlacePhotos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/restaurants/photos?restaurantId=${element.place_id}`,
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
