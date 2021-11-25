import React, { useState, useEffect, useCallback } from "react";
import RestaurantData from "../components/RestaurantComponents/RestaurantData/RestaurantData";
import CardContainer from "../components/CardContainer/CardContainer";
import DishCard from "../components/RestaurantComponents/DishCard/DishCard";
import AddCard from "../components/RestaurantComponents/AddCard/AddCard";
import Modal from "../components/Modal/Modal";
import { useParams } from "react-router-dom";
import AddDishForm from "../components/RestaurantComponents/AddDishForm/AddDishForm";
import NewDishForm from "../components/RestaurantComponents/NewDishForm/NewDishForm";

export default function RestaurantPage() {
  const fakeRestaurant = {
    business_status: "OPERATIONAL",
    formatted_address:
      "Av Prado de los Laureles 188, Prados Tepeyac, 45050 Zapopan, Jal., Mexico",
    geometry: {
      location: {
        lat: 20.6550776,
        lng: -103.4125849,
      },
      viewport: {
        northeast: {
          lat: 20.65643017989272,
          lng: -103.4111896201073,
        },
        southwest: {
          lat: 20.65373052010727,
          lng: -103.4138892798927,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Healthy Town",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        height: 4160,
        html_attributions: [
          '\u003ca href="https://maps.google.com/maps/contrib/107148657742364828989"\u003eA Google User\u003c/a\u003e',
        ],
        photo_reference:
          "Aap_uEDah_9JYXlfml5ss0zBuwWpS9FhA0piZ60IMIDnPGi7us-99qPiQALGdUl3kbuAtof_ACEE2f7qjoj9Fx8MQJxYtlXng2YpF81G7xWeNXB_lf6IMl5WZdd58WB06caEJBc2YHxonzjlrO8E-jVaZths-I73ogrMZfS7nx0dcu73rgQ",
        width: 3120,
      },
    ],
    place_id: "ChIJwQwqP8utKIQRO772y0AYR1I",
    plus_code: {
      compound_code: "MH4P+2X Zapopan, Jalisco",
      global_code: "75GRMH4P+2X",
    },
    rating: 5,
    reference: "ChIJwQwqP8utKIQRO772y0AYR1I",
    types: ["restaurant", "food", "point_of_interest", "establishment"],
    user_ratings_total: 14,
  };
  const fakeProducts = [
    {
      name: "Kevin",
      id: "blabla",
    },
    {
      name: "Kevin",
      id: "blabla",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [restaurant, setRestaurant] = useState(fakeRestaurant);
  const [products, setProducts] = useState(fakeProducts);
  const [showNewDishModal, setNewDishModal] = useState(false);
  const [showAddDishModal, setAddDishModal] = useState(false);
  const [currentDish,setCurrentDish]= useState('');
  const params = useParams();
  console.log(params.restaurantId);

  const getRestaurant = useCallback(async (query) => {
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
    //      throw new Error(data.message || "Could not get restaurants");
    //    }
    //    console.log(data);
    //    setTimeout(() => {
    //      setIsLoading(false);
    //    }, 200);
    //  } catch {
    //    alert("Something went wrong while getting restaurants");
    //    setError(true);
    //  }
    console.log("REQUEST TO GET SINGLE RESTAURANT");
  }, []);

  const getProducts = useCallback(async (query) => {
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
    console.log("REQUEST TO GET PRODUCTS");
  }, []);

  const postNewDish = useCallback(async (dish) => {
    console.log(dish);
    // try {
    //   const response = await fetch(
    //     `${process.env.REACT_APP_BACKEND_URL}/alerts`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(newAlert),
    //       headers: {
    //         authorization: localStorage.getItem("token"),
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.message || "Could not post alert");
    //   }

    //   getUserAlerts();
    //   dismissModal();
    // } catch {
    //   alert("Something went wrong");
    // }
    console.log("REQUEST TO POST NEW DISH");
  }, []);

  const postAddDish = useCallback(async (dish) => {
    console.log(dish);
    // try {
    //   const response = await fetch(
    //     `${process.env.REACT_APP_BACKEND_URL}/alerts`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(newAlert),
    //       headers: {
    //         authorization: localStorage.getItem("token"),
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.message || "Could not post alert");
    //   }

    //   getUserAlerts();
    //   dismissModal();
    // } catch {
    //   alert("Something went wrong");
    // }
    console.log("REQUEST TO POST ADD DISH");
  }, []);

  const showNewDishModalHandler = () => {
    setNewDishModal(true);
  };

  const dismissNewDishModalHandler = () => {
    setNewDishModal(false);
  };

  const showAddDishModalHandler = (dish) => {
    setAddDishModal(true);
    setCurrentDish(dish);
    console.log(dish);
  };

  const dismissAddDishModalHandler = () => {
    setAddDishModal(false);
  };
  useEffect(() => {
    setIsLoading(true);
    getRestaurant("restaurants");
    getProducts();
    setIsLoading(false);
  }, [getRestaurant, getProducts]);

  return (
    <>
      {!error && showAddDishModal && (
        <Modal
          title="Add to your dishes"
          onConfirm={dismissAddDishModalHandler}
          onCancel={dismissAddDishModalHandler}
        >
          <AddDishForm onSave={postAddDish} dish={currentDish} onCancel={dismissAddDishModalHandler}></AddDishForm>
        </Modal>
      )}
      {!error && showNewDishModal && (
        <Modal
          title="Add a new dish"
          onConfirm={dismissNewDishModalHandler}
          onCancel={dismissNewDishModalHandler}
        >
          <NewDishForm onSave={postNewDish} onCancel={dismissNewDishModalHandler}></NewDishForm>
        </Modal>
      )}
      <div>
        <RestaurantData data={restaurant}>hola</RestaurantData>
        <CardContainer isLoading={false}>
          {products.map((device) => (
            <DishCard onClick={showAddDishModalHandler}/>
          ))}
          <AddCard onClick={showNewDishModalHandler}></AddCard>
        </CardContainer>
      </div>
    </>
  );
}
