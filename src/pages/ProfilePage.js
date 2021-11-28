import React, { useState, useCallback, useEffect } from "react";
import CardContainer from "../components/CardContainer/CardContainer";
import Modal from "../components/Modal/Modal";
import ProfileCard from "../components/ProfileComponents/ProfileCard";
import ReviewForm from "../components/RestaurantComponents/ReviewForm/ReviewForm";
import DishCard from "../components/RestaurantComponents/DishCard/DishCard";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function ProfilePage() {
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
  const [isLoading, setIsLoading] = useState(true);
  const [profileDishes, setProfileDishes] = useState(fakeProducts);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [currentDish, setCurrentDish] = useState("");

  const getProfileDishes = useCallback(async (query) => {
    const userId = localStorage.getItem(
      "CognitoIdentityServiceProvider.7h8akm6h0rbr8feo4te4539jf3.LastAuthUser"
    );
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/reviews?userId=${userId}`,
        {
          method: "GET",
          headers: {},
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Could not get reviews");
      }
      console.log(data);
      setProfileDishes(data.body);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    } catch {
      alert("Something went wrong while getting reviews");
      setError(true);
    }
    console.log("REQUEST TO GET PROFILE reviews");
  }, []);

  const showModalHandler = (dish) => {
    setShowModal(true);
    setCurrentDish(dish);
    console.log(dish);
  };

  const dismissModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getProfileDishes();
  }, [getProfileDishes]);

  return (
    <div>
      {!error && showModal && (
        <Modal
          title="Your Review"
          onConfirm={dismissModalHandler}
          onCancel={dismissModalHandler}
        >
          <ReviewForm
            viewIcon={true}
            disabledInputs={true}
            onSave={null}
            dish={currentDish}
            onCancel={dismissModalHandler}
          ></ReviewForm>
        </Modal>
      )}
      <ProfileCard></ProfileCard>
      <CardContainer isLoading={isLoading}>
        {profileDishes.map((dish) => (
          <DishCard viewIcon={true} dish={dish} onClick={showModalHandler} />
        ))}
      </CardContainer>
    </div>
  );
}
