import React, { useState } from "react";
import classes from "./DishData.module.css";
import { FaStar } from "react-icons/fa";

export default function DishData({ dish }) {
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
    }
  ];

  const [photos, setPhotos] = useState(dummyPhotos);
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes.name}>
          <h1>{dish.name}</h1>
        </div>
        <div className={classes.description}>{dish.description}</div>
        <div>
          <h3>{dish.formatted_address}</h3>
        </div>
      </div>
      <div className={classes.containerCarousel}>
        {/* {photos.length > 0 &&
          photos.map((image) => (
            <img
              key={image.photo_reference}
              alt={"broken"}
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${image.photo_reference}&key=${process.env.REACT_APP_API_KEY}
                  `}
            ></img>
          ))} */}
      </div>
      <div className={classes.extra}>h</div>
    </div>
  );
}
