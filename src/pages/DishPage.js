import React, { useState, useEffect, useCallback } from "react";
import DishData from "../components/DishComponents/DishData";

export default function DishPage() {
  const fakeDish = {
    dishId: "1",
    name: "Chicken Crispers",
    restaurantId: "pepe",
    description: "Chicken bla bla bla bla bla bla bl ba lb la bl ba",
    category: "Main Dish",
    photos: [],
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentDish, setDish] = useState(fakeDish);

  const getDish = useCallback(async (query) => {
    //  try {
    //    const response = await fetch(
    //      `${process.env.REACT_APP_BACKEND_URL}/textsearch/json?query=${query}&key=${process.env.REACT_APP_API_KEY}`,
    //      {
    //        method: "GET",
    //        headers: {
    //        },
    //      }
    //    );
    //    const data = await response.json();
    //    console.log(data);

    //    if (!response.ok) {
    //      throw new Error(data.message || "Could not get products");
    //    }
    //    console.log(data);
    //    setTimeout(() => {
    //      setIsLoading(false);
    //    }, 200);
    //  } catch {
    //    alert("Something went wrong while getting products");
    //    setError(true);
    //  }
    console.log("REQUEST TO GET DISH");
  }, []);

  const getReviews = useCallback(async (query) => {
    //  try {
    //    const response = await fetch(
    //      `${process.env.REACT_APP_BACKEND_URL}/textsearch/json?query=${query}&key=${process.env.REACT_APP_API_KEY}`,
    //      {
    //        method: "GET",
    //        headers: {
    //        },
    //      }
    //    );
    //    const data = await response.json();
    //    console.log(data);

    //    if (!response.ok) {
    //      throw new Error(data.message || "Could not get products");
    //    }
    //    console.log(data);
    //    setTimeout(() => {
    //      setIsLoading(false);
    //    }, 200);
    //  } catch {
    //    alert("Something went wrong while getting products");
    //    setError(true);
    //  }
    console.log("REQUEST TO GET REVIEWS");
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getDish("restaurants");
    getReviews();
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, [getDish, getReviews]);
  return (
    <div>
      DishPage
      <DishData dish={currentDish}></DishData>
    </div>
  );
}
