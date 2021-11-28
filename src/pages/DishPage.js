import React, { useState, useEffect, useCallback} from "react";
import DishData from "../components/DishComponents/DishData";
import ReviewContainer from "../components/DishComponents/ReviewContainer/ReviewContainer";
import { useParams } from "react-router-dom";

export default function DishPage() {

  const fakeDish = {
    dishId: "1",
    name: "Chicken Crispers",
    restaurantId: "pepe",
    description: "Chicken bla bla bla bla bla bla bl ba lb la bl ba",
    category: "Main Dish",
    photos: [],
  };

  const FakeReviews = [
    {
      instructions: "Don't ask for it",
      photo:
        "https://www.kindpng.com/picc/m/545-5456048_krabby-patty-png-download-krabby-patty-transparent-png.png",
      rating: 1,
      reviewId: "Review1637980315963",
      userId: "randomUser123",
      text: "Awful",
      username: "Jane Doe",
      dishId: "randomDish789",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentDish, setDish] = useState(fakeDish);
  const [reviews,setReviews]= useState([]);
  const params = useParams();

  const getDish = useCallback(async (query) => {
     try {
       const response = await fetch(
         `${process.env.REACT_APP_BACKEND_URL}/restaurants/dishes?dishId=${params.dishId}`,
         {
           method: "GET",
           headers: {
           },
         }
       );
       const data = await response.json();
       console.log(data);

       if (!response.ok) {
         throw new Error(data.message || "Could not get dish");
       }
       setDish(data.body);
       setTimeout(() => {
         setIsLoading(false);
       }, 200);
     } catch {
       alert("Something went wrong while getting dish");
       setError(true);
     }
    console.log("REQUEST TO GET DISH");
  }, [params.dishId]);

  const getReviews = useCallback(async (query) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reviews?dishId=${params.dishId}`,
        {
          method: "GET",
          headers: {
          },
        }
      );
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Could not get dish");
      }
      setReviews(data.body);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    } catch {
      alert("Something went wrong while getting dish");
      setError(true);
    }
    console.log("REQUEST TO GET REVIEWS");
  }, [params.dishId]);

  

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
      <DishData dish={currentDish}></DishData>
      <ReviewContainer reviews={reviews}></ReviewContainer>
    </div>
  );
}
