import React from "react";
import classes from "./ReviewForm.module.css";
import useInput from "../../../hooks/use-input";
export default function ReviewForm(props) {
  console.log(props);
  const IsEmpty = (value) => {
    return value.trim() === "";
  };

  const reviewHook = useInput(IsEmpty);
  const instructionsHook = useInput(IsEmpty);
  const gradeHook = useInput(IsEmpty, "1");

  let resName;
  if(!props.viewIcon ){
    resName='hh'
  }
  else{
    resName=props.restaurant.name
  }
  let dishData = {
    instructions: instructionsHook.value,
    rating: gradeHook.value,
    userId: localStorage.getItem(
      "CognitoIdentityServiceProvider.7h8akm6h0rbr8feo4te4539jf3.LastAuthUser"
    ),
    text: reviewHook.value,
    username: localStorage.getItem("username"),
    dishId: props.dish.dishId,
    dishName:props.dish.name,
    restaurantName:resName,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAolBMVEX1vgsFBQUAAAAAAAMAAAXzvAv1vQzxug32vwn5wQn3vgsAAAj4wQoBAwX7xA/hsRd6YhjnthzruxXMoRt1XBUqIw8RDwldSxSxjRf4xBSZeBdLOxU/MxOOcBfntxgmIQ+ohhvbrxkbFQvAmRqBZxZdThfGmhg0KRBoVBaJbRLRphe0jBUhGw9MPhMIDQkjHQucfhtTRBJsWRg2JxERChBkURCt2h5zAAAEbklEQVR4nO3dDXOiOBwGcPgnYgIYFVxRqxZfurZ227re7ff/age+9ASU4NwpIzy/cejUBpg8kwCSSA3j/2dZu4XVaOwWGc3oFUu+a+0LW7u1Deuwqat2eNjZ/kfznMN+blDpqwghkm/YWVbit3NbsUW0ISO9qfSedsszpb43bB+KieObOVv7XgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQM3Y8UMz4sddFCwvdk/ZqNWzKlzV7La7nnSLriDFtN2eGjLniR+VYiu/94Mx3g8GQ1lkBeWNnhzOnPGkrWoRkjt9IWIt0+SMnn1VYIXQYcR35WkyrEF3k7M5M4+YM9BmpHrse4UWBUbl25GY9v9NKGoZtND0Nbmkk/ImvRQ+gD0qFZwmFGVkTnO7jlpQK7EChYWOX49L/mTJGpu0zO1q7ioZqcn6XunP+bop9cqTNTZ5y8s5usif6fImDard1QTPVJn7OT1HvrF0efZa4Cz4uESb0jU2Wd7BRQbZiH5VOiLXPxPRJKfK8ikTEeeVjkisMzU22ehylYX7ke2YTrUjmmZbEb3ndDTVy0TExpWOyFC/0lVuObOcCyMZZjJly2pfGMlRuqdFjSLviZ3t9CmwxfwyPoKIxr32ZHedVJVpkNso1DbVjOjDLuXS8W4RGSrVc+gl/8gipp+Jdsd5Xr+8oftFZMjOaZXpuampsfQ5O00ov9Hdzh0jEu6SjnVm9DTVfpqQvkOHzsl4gZsnN3LHiOKbjmNGRIzR18Yt0Guk13Gi8pwRf22Xdja7Z0RxQ1qPtsGft0VTFjquCNUddIKgE5Z5X/a+ERmWkFIpWbxF2FHxaIUyb8reOaL9+NAVg0S7FcodJ7pzRI8IEWkhIi1EpIWItBCRFiLSQkRaiEgLEWkhIp373Zh9WIhIr5y5FsX3alV+3tU5Yui6RStuy0a1x87OshtfPxbFpsAKOV2yjar2rKIsS22J0Sr0lLRz/9ugEKo7cYjnjfxXkqU28XAaJ6fnG+piW7KEVH6Hx9NBW7SpV18Ti8M4NCc27yw8V9rHlnT8h5PClqoxG63YYYSoRaNaZSR79D1uzaK29HuyaA+Vkq4bv2JqOBv0VkT8e2okd3SjkhWzTIyxsoiz2r6NwvfF+3s4Wm7/YvGbJ7Md6Hldq1YUTxaeU3ICRDw5n3gUTPTaT+9P/HHbdOt1TrMM2Zjw1JTqizitfCUa9YrIiMdYZ0F6Js1ZjOZhse/TVE50yeN/EGVnP55qcfa58Uodhy2XrdZb5+SslelhjD+FRj2+YXVRdPG8WUXH52xbii6Z+N/LtVvPLnbKNpRqb4J59Hlkfz6LFpxHJ7fW75GvVH17WJJQbnM9mPwZf837n/351ziYhGvPVYVvBdTDbj6NajQ9rxHPk6nxAfqSw6f9wzev41+QEQAAAAAAAAAAAFRa7YaCr4eItDCpWAsRaaGjwX+GLzhoISItRKSFiLQQEQAAAAAAAAAAYNQDAAAqAmc0AAAAALjKP6YhMmNBqis+AAAAAElFTkSuQmCC",
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSave(dishData);
  };

  let formIsInvalid = reviewHook.isInvalid || instructionsHook.isInvalid;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>picture</div>
      <div className={classes.rightContainer}>
        <h1>{props.dish.name}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="cars">Your Review</label>
            <textarea
              value={reviewHook.value}
              onChange={reviewHook.ChangeHandler}
              onBlur={reviewHook.BlurHandler}
              type="text"
              disabled={props.disabledInputs}
              required
            />
            {reviewHook.isInvalid && (
              <p className={classes.errorText}>Review should not be empty**</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="cars">Grade:</label>
            <select
              value={gradeHook.value}
              onChange={gradeHook.ChangeHandler}
              onBlur={gradeHook.BlurHandler}
              name="cars"
              required
              disabled={props.disabledInputs}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {gradeHook.isInvalid && (
              <p className={classes.errorText}>Please select a type</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Special Instructions</label>
            <textarea
              value={instructionsHook.value}
              onChange={instructionsHook.ChangeHandler}
              onBlur={instructionsHook.BlurHandler}
              type="text"
              required
              disabled={props.disabledInputs}
            />
            {instructionsHook.isInvalid && (
              <p className={classes.errorText}>
                Description should not be empty**
              </p>
            )}
          </div>

          <div className={classes.actions}>
            <div className={classes.formFlex}>
              {!props.disabledInputs && (
                <div>
                  <button className={classes.control} onClick={props.onCancel}>
                    Cancel
                  </button>
                  <button disabled={formIsInvalid} className={classes.control}>
                    Save
                  </button>
                </div>
              )}
              {props.disabledInputs && (
                <button className={classes.control} onClick={props.onCancel}>
                  Close
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
