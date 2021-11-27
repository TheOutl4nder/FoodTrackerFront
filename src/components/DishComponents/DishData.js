import React from "react";
import classes from "./DishData.module.css";
import { FaStar } from "react-icons/fa";

export default function DishData({ dish }) {
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
      <div className={classes.carousel}>
        {/* <section className={classes.carousel} aria-label="Gallery">
          <ol className={classes.carousel__viewport}>
            <li id={"carousel__slide1} tabindex="0" className={classes.carousel__slide}>
              <div className={classes.carousel__snapper}>
                <a href="#carousel__slide4" className={classes.carousel__prev}>
                  Go to last slide
                </a>
                <a href="#carousel__slide2" className={classes.carousel__next}>
                  Go to next slide
                </a>
              </div>
            </li>
            <li id={"carousel__slide2} tabindex="0" className={classes.carousel__slide}>
              <div className={classes.carousel__snapper}></div>
              <a href="#carousel__slide1" className={classes.carousel__prev}>
                Go to previous slide
              </a>
              <a href="#carousel__slide3" className={classes.carousel__next}>
                Go to next slide
              </a>
            </li>
            <li id={"carousel__slide3} tabindex="0" className={classes.carousel__slide}>
              <div className={classes.carousel__snapper}></div>
              <a href="#carousel__slide2" className={classes.carousel__prev}>
                Go to previous slide
              </a>
              <a href="#carousel__slide4" className={classes.carousel__next}>
                Go to next slide
              </a>
            </li>
            <li id={"carousel__slide4} tabindex="0" className={classes.carousel__slide}>
              <div className={classes.carousel__snapper}></div>
              <a href="#carousel__slide3" className="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide1" className={classes.carousel__next}>
                Go to first slide
              </a>
            </li>
          </ol>
          <aside className={classes.carousel__navigation}>
            <ol className={classes.carousel__navigation-list}>
              <li className={classes.carousel__navigation-item}>
                <a
                  href="#carousel__slide1"
                  className={classes.carousel__navigation-button}
                >
                  Go to slide 1
                </a>
              </li>
              <li className={classes.carousel__navigation-item}>
                <a
                  href="#carousel__slide2"
                  className={classes.carousel__navigation-button}
                >
                  Go to slide 2
                </a>
              </li>
              <li className={classes.carousel__navigation-item}>
                <a
                  href="#carousel__slide3"
                  className={classes.carousel__navigation-button}
                >
                  Go to slide 3
                </a>
              </li>
              <li className={classes.carousel__navigation-item}>
                <a
                  href="#carousel__slide4"
                  className={classes.carousel__navigation-button}
                >
                  Go to slide 4
                </a>
              </li>
            </ol>
          </aside>
        </section> */}
      </div>
    </div>
  );
}
