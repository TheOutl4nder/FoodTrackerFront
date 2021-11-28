import React, { useState, useEffect, useCallback } from "react";
import RestaurantData from "../components/RestaurantComponents/RestaurantData/RestaurantData";
import CardContainer from "../components/CardContainer/CardContainer";
import DishCard from "../components/RestaurantComponents/DishCard/DishCard";
import AddCard from "../components/RestaurantComponents/AddCard/AddCard";
import Modal from "../components/Modal/Modal";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/RestaurantComponents/ReviewForm/ReviewForm";
import NewDishForm from "../components/RestaurantComponents/NewDishForm/NewDishForm";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function RestaurantPage() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [restaurant, setRestaurant] = useState('fakeRestaurant');
  const [products, setProducts] = useState([]);
  const [ID, setID] = useState("");
  const [showNewDishModal, setNewDishModal] = useState(false);
  const [showReviewModal, setReviewModal] = useState(false);
  const [currentDish, setCurrentDish] = useState("");
  const params = useParams();
  console.log(params);
  const showNewDishModalHandler = () => {
    setID(Date.now().toString());
    setNewDishModal(true);
  };

  const dismissNewDishModalHandler = () => {
    setNewDishModal(false);
  };

  const showReviewModalHandler = (dish) => {
    setReviewModal(true);
    setCurrentDish(dish);
  };

  const dismissReviewModalHandler = () => {
    setReviewModal(false);
  };

  const getRestaurant = useCallback(
    async (query) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/restaurants/details?restaurantId=${params.restaurantId}`,
          {
            method: "GET",
            headers: {},
          }
        );
        const data = await response.json();
        console.log(data);

        if (!response.ok) {
          throw new Error(data.message || "Could not get single restaurant");
        }
        console.log(data);
        console.log(data.body.resaurantInfo);
        setRestaurant(data.body.resaurantInfo.result);
        setProducts(data.body.dishes);
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      } catch {
        alert("Something went wrong while getting restaurants");
        setError(true);
      }
      console.log("REQUEST TO GET SINGLE RESTAURANT");
    },
    [params.restaurantId]
  );

  const postNewDish = useCallback(async (dish) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/restaurants/dishes`,
        {
          method: "POST",
          body: JSON.stringify(dish),
          headers: {
            authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not post dish");
      }
      window.location.reload(false);
    } catch {
      alert("Something went wrong");
    }
    dismissNewDishModalHandler();
  }, []);

  const postReview = useCallback(async (dishReview) => {
    console.log(dishReview);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/reviews`,
        {
          method: "POST",
          body: JSON.stringify(dishReview),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not post REVIEW");
      }
      alert("Review Posted");
    } catch {
      alert("Something went wrong");
    }
    console.log("REQUEST TO POST REVIEW");
    dismissReviewModalHandler();
  }, []);


  useEffect(() => {
    getRestaurant("restaurants");
  }, [getRestaurant]);

  return (
    <>
      {!error && showReviewModal && (
        <Modal
          title="Add to your dishes"
          onConfirm={dismissReviewModalHandler}
          onCancel={dismissReviewModalHandler}
        >
          <ReviewForm
            restaurant={restaurant}
            disabledInputs={false}
            onSave={postReview}
            dish={currentDish}
            onCancel={dismissReviewModalHandler}
          ></ReviewForm>
        </Modal>
      )}
      {!error && showNewDishModal && (
        <Modal
          title="Add a new dish"
          onConfirm={dismissNewDishModalHandler}
          onCancel={dismissNewDishModalHandler}
        >
          <NewDishForm
            id={ID}
            restaurant={restaurant}
            onSave={postNewDish}
            onCancel={dismissNewDishModalHandler}
          ></NewDishForm>
        </Modal>
      )}
      {isLoading && !error && <LoadingSpinner></LoadingSpinner>}
      {!isLoading && (
        <div>
          <RestaurantData data={restaurant}>hola</RestaurantData>
          <CardContainer isLoading={false}>
            {products.length>0 && products.map((dish) => (
              <DishCard
                viewIcon={false}
                key={dish.name}
                dish={dish}
                onClick={showReviewModalHandler}
              />
            ))}
            <AddCard onClick={showNewDishModalHandler}></AddCard>
          </CardContainer>
        </div>
      )}
    </>
  );
}
