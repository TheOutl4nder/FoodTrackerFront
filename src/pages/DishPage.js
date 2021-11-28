import React, { useState, useEffect, useCallback } from "react";
import DishData from "../components/DishComponents/DishData";
import ReviewContainer from "../components/DishComponents/ReviewContainer/ReviewContainer";
import { useParams } from "react-router-dom";
import firebase from "../firebase";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function DishPage() {
 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentDish, setDish] = useState('fakeDish');
  const [reviews, setReviews] = useState([]);
  const [photos, setPhotos] = useState([]);
  const params = useParams();

  const getDish = useCallback(
    async (query) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/restaurants/dishes?dishId=${params.dishId}`,
          {
            method: "GET",
            headers: {},
          }
        );
        const data = await response.json();

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
    },
    [params.dishId]
  );

  const getReviews = useCallback(
    async (query) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/reviews?dishId=${params.dishId}`,
          {
            method: "GET",
            headers: {},
          }
        );
        const data = await response.json();

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
    },
    [params.dishId]
  );

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  const getPhotos = useCallback(
    async (query) => {
      let urls=[];
      let listRef = firebase.storage().ref(`${params.dishId}/`);
      let list= await listRef.listAll();
     
      await asyncForEach(list.items, async (item) => {
        let url= await item.getDownloadURL();
        
        urls.push(url);
      })
      setPhotos(urls);
      
    },
    [params.dishId]
  );

  useEffect(() => {
    setIsLoading(true);
    getDish("restaurants");
    getReviews();
    getPhotos();
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, [getDish, getPhotos, getReviews]);
  return (
    <div>
      {isLoading && <LoadingSpinner></LoadingSpinner>}
     {!isLoading && <div>
        <DishData dish={currentDish} photos={photos}></DishData>
        <ReviewContainer reviews={reviews}></ReviewContainer>
      </div>}
    </div>
  );
}
