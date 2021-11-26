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
      name: "Fish Sticks",
      id: "blabla",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAolBMVEX1vgsFBQUAAAAAAAMAAAXzvAv1vQzxug32vwn5wQn3vgsAAAj4wQoBAwX7xA/hsRd6YhjnthzruxXMoRt1XBUqIw8RDwldSxSxjRf4xBSZeBdLOxU/MxOOcBfntxgmIQ+ohhvbrxkbFQvAmRqBZxZdThfGmhg0KRBoVBaJbRLRphe0jBUhGw9MPhMIDQkjHQucfhtTRBJsWRg2JxERChBkURCt2h5zAAAEbklEQVR4nO3dDXOiOBwGcPgnYgIYFVxRqxZfurZ227re7ff/age+9ASU4NwpIzy/cejUBpg8kwCSSA3j/2dZu4XVaOwWGc3oFUu+a+0LW7u1Deuwqat2eNjZ/kfznMN+blDpqwghkm/YWVbit3NbsUW0ISO9qfSedsszpb43bB+KieObOVv7XgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQM3Y8UMz4sddFCwvdk/ZqNWzKlzV7La7nnSLriDFtN2eGjLniR+VYiu/94Mx3g8GQ1lkBeWNnhzOnPGkrWoRkjt9IWIt0+SMnn1VYIXQYcR35WkyrEF3k7M5M4+YM9BmpHrse4UWBUbl25GY9v9NKGoZtND0Nbmkk/ImvRQ+gD0qFZwmFGVkTnO7jlpQK7EChYWOX49L/mTJGpu0zO1q7ioZqcn6XunP+bop9cqTNTZ5y8s5usif6fImDard1QTPVJn7OT1HvrF0efZa4Cz4uESb0jU2Wd7BRQbZiH5VOiLXPxPRJKfK8ikTEeeVjkisMzU22ehylYX7ke2YTrUjmmZbEb3ndDTVy0TExpWOyFC/0lVuObOcCyMZZjJly2pfGMlRuqdFjSLviZ3t9CmwxfwyPoKIxr32ZHedVJVpkNso1DbVjOjDLuXS8W4RGSrVc+gl/8gipp+Jdsd5Xr+8oftFZMjOaZXpuampsfQ5O00ov9Hdzh0jEu6SjnVm9DTVfpqQvkOHzsl4gZsnN3LHiOKbjmNGRIzR18Yt0Guk13Gi8pwRf22Xdja7Z0RxQ1qPtsGft0VTFjquCNUddIKgE5Z5X/a+ERmWkFIpWbxF2FHxaIUyb8reOaL9+NAVg0S7FcodJ7pzRI8IEWkhIi1EpIWItBCRFiLSQkRaiEgLEWkhIp373Zh9WIhIr5y5FsX3alV+3tU5Yui6RStuy0a1x87OshtfPxbFpsAKOV2yjar2rKIsS22J0Sr0lLRz/9ugEKo7cYjnjfxXkqU28XAaJ6fnG+piW7KEVH6Hx9NBW7SpV18Ti8M4NCc27yw8V9rHlnT8h5PClqoxG63YYYSoRaNaZSR79D1uzaK29HuyaA+Vkq4bv2JqOBv0VkT8e2okd3SjkhWzTIyxsoiz2r6NwvfF+3s4Wm7/YvGbJ7Md6Hldq1YUTxaeU3ICRDw5n3gUTPTaT+9P/HHbdOt1TrMM2Zjw1JTqizitfCUa9YrIiMdYZ0F6Js1ZjOZhse/TVE50yeN/EGVnP55qcfa58Uodhy2XrdZb5+SslelhjD+FRj2+YXVRdPG8WUXH52xbii6Z+N/LtVvPLnbKNpRqb4J59Hlkfz6LFpxHJ7fW75GvVH17WJJQbnM9mPwZf837n/351ziYhGvPVYVvBdTDbj6NajQ9rxHPk6nxAfqSw6f9wzev41+QEQAAAAAAAAAAAFRa7YaCr4eItDCpWAsRaaGjwX+GLzhoISItRKSFiLQQEQAAAAAAAAAAYNQDAAAqAmc0AAAAALjKP6YhMmNBqis+AAAAAElFTkSuQmCC",
    },
    {
      name: "Chicken Crispers",
      id: "blabla",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAolBMVEX1vgsFBQUAAAAAAAMAAAXzvAv1vQzxug32vwn5wQn3vgsAAAj4wQoBAwX7xA/hsRd6YhjnthzruxXMoRt1XBUqIw8RDwldSxSxjRf4xBSZeBdLOxU/MxOOcBfntxgmIQ+ohhvbrxkbFQvAmRqBZxZdThfGmhg0KRBoVBaJbRLRphe0jBUhGw9MPhMIDQkjHQucfhtTRBJsWRg2JxERChBkURCt2h5zAAAEbklEQVR4nO3dDXOiOBwGcPgnYgIYFVxRqxZfurZ227re7ff/age+9ASU4NwpIzy/cejUBpg8kwCSSA3j/2dZu4XVaOwWGc3oFUu+a+0LW7u1Deuwqat2eNjZ/kfznMN+blDpqwghkm/YWVbit3NbsUW0ISO9qfSedsszpb43bB+KieObOVv7XgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQM3Y8UMz4sddFCwvdk/ZqNWzKlzV7La7nnSLriDFtN2eGjLniR+VYiu/94Mx3g8GQ1lkBeWNnhzOnPGkrWoRkjt9IWIt0+SMnn1VYIXQYcR35WkyrEF3k7M5M4+YM9BmpHrse4UWBUbl25GY9v9NKGoZtND0Nbmkk/ImvRQ+gD0qFZwmFGVkTnO7jlpQK7EChYWOX49L/mTJGpu0zO1q7ioZqcn6XunP+bop9cqTNTZ5y8s5usif6fImDard1QTPVJn7OT1HvrF0efZa4Cz4uESb0jU2Wd7BRQbZiH5VOiLXPxPRJKfK8ikTEeeVjkisMzU22ehylYX7ke2YTrUjmmZbEb3ndDTVy0TExpWOyFC/0lVuObOcCyMZZjJly2pfGMlRuqdFjSLviZ3t9CmwxfwyPoKIxr32ZHedVJVpkNso1DbVjOjDLuXS8W4RGSrVc+gl/8gipp+Jdsd5Xr+8oftFZMjOaZXpuampsfQ5O00ov9Hdzh0jEu6SjnVm9DTVfpqQvkOHzsl4gZsnN3LHiOKbjmNGRIzR18Yt0Guk13Gi8pwRf22Xdja7Z0RxQ1qPtsGft0VTFjquCNUddIKgE5Z5X/a+ERmWkFIpWbxF2FHxaIUyb8reOaL9+NAVg0S7FcodJ7pzRI8IEWkhIi1EpIWItBCRFiLSQkRaiEgLEWkhIp373Zh9WIhIr5y5FsX3alV+3tU5Yui6RStuy0a1x87OshtfPxbFpsAKOV2yjar2rKIsS22J0Sr0lLRz/9ugEKo7cYjnjfxXkqU28XAaJ6fnG+piW7KEVH6Hx9NBW7SpV18Ti8M4NCc27yw8V9rHlnT8h5PClqoxG63YYYSoRaNaZSR79D1uzaK29HuyaA+Vkq4bv2JqOBv0VkT8e2okd3SjkhWzTIyxsoiz2r6NwvfF+3s4Wm7/YvGbJ7Md6Hldq1YUTxaeU3ICRDw5n3gUTPTaT+9P/HHbdOt1TrMM2Zjw1JTqizitfCUa9YrIiMdYZ0F6Js1ZjOZhse/TVE50yeN/EGVnP55qcfa58Uodhy2XrdZb5+SslelhjD+FRj2+YXVRdPG8WUXH52xbii6Z+N/LtVvPLnbKNpRqb4J59Hlkfz6LFpxHJ7fW75GvVH17WJJQbnM9mPwZf837n/351ziYhGvPVYVvBdTDbj6NajQ9rxHPk6nxAfqSw6f9wzev41+QEQAAAAAAAAAAAFRa7YaCr4eItDCpWAsRaaGjwX+GLzhoISItRKSFiLQQEQAAAAAAAAAAYNQDAAAqAmc0AAAAALjKP6YhMmNBqis+AAAAAElFTkSuQmCC",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [restaurant, setRestaurant] = useState(fakeRestaurant);
  const [products, setProducts] = useState(fakeProducts);
  const [showNewDishModal, setNewDishModal] = useState(false);
  const [showAddDishModal, setAddDishModal] = useState(false);
  const [currentDish, setCurrentDish] = useState("");
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
          <AddDishForm
            disabledInputs={false}
            onSave={postAddDish}
            dish={currentDish}
            onCancel={dismissAddDishModalHandler}
          ></AddDishForm>
        </Modal>
      )}
      {!error && showNewDishModal && (
        <Modal
          title="Add a new dish"
          onConfirm={dismissNewDishModalHandler}
          onCancel={dismissNewDishModalHandler}
        >
          <NewDishForm
            onSave={postNewDish}
            onCancel={dismissNewDishModalHandler}
          ></NewDishForm>
        </Modal>
      )}
      <div>
        <RestaurantData data={restaurant}>hola</RestaurantData>
        <CardContainer isLoading={false}>
          {products.map((dish) => (
            <DishCard key={dish.name} dish={dish} onClick={showAddDishModalHandler} />
          ))}
          <AddCard onClick={showNewDishModalHandler}></AddCard>
        </CardContainer>
      </div>
    </>
  );
}
