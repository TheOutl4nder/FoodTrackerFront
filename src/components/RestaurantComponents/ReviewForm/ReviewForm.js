import React, { useState, useRef } from "react";
import classes from "./ReviewForm.module.css";
import useInput from "../../../hooks/use-input";
import firebase from "../../../firebase";
import { FaStar } from "react-icons/fa";
export default function ReviewForm(props) {
  console.log(props);
  const [files, setFile] = useState(null);
  const fileRef = useRef();
  const [hasImage, setHasImage] = useState(true);
  const [imageURL, setImage] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXx8/XCy9K/yND09vfw8vTP1tzp7O/i5ure4+fO1dvJ0dfT2d/EzNPt7/Lb4OXo6+4FeM7UAAAFL0lEQVR4nO2c24KrIAxFLdha7///t0dxOlWDSiAKztnrbR4G6SoJBKHZA6zJYncgQeCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ot3Oi1KMq64FnWTVq+EueWzlRquqKVn/J+/ezEfdyHydKPYtc62yF1m1Xymq5ixPVdDnx8eslf1eCVu7hRFXFppAfLW39kNJyByeqOTJirGTvRsbKDZyozsHIpKUQsZK8E1Vu55GTrKTuRL0ZRoyVLviZaTtRVctUMuaVOnCoJO1E1WwjxsorbGZO2Qk7br5WuhApKTvpfZWMy5WAoZKuk6b1NhI4VJJ10uRBSsas0ng+OlUnVaARw9NvqCTqRERJpt9eUtJ0IqPEN36SdNIIKRnIPeafFJ0Ep9c5mr+qTdFJ2CRMpLAn5fScqJeokrFWZkoRdaImwtpw2T9iSnnxuiDoRFXda6hK28JzWTA14ryBxKFlTT9iTlT1W57o3Lta96yED8krRieknCw/DDuEP1TnKBlgzMlCTtZDXr+8pIjOwitK5x7JOKFD3mukiE85ix45S5FxYll46prdiv8ekpsU19wv4kS9LV1ouQPlrPzKliIzTuw9YDYiVfgFSxFx8rR+wcyMomSX9HYpTjlFwonqrB3gBc/JyYQjRcRJYe8Ay4l9rMlLcVi8iTjp7Y/nOBHcMjngWEoi4+TUlcmKw9rnxHzCWMqeU/ltkB9JEZl3SusnYmwQn1fm2GgPeiOzZrM9WZfu/3/BNDznYATLOLENffep+JppeMZBMSZUF9N6ljFM7KF3qpTduBZyQj4W53XTiRsEm1L2dr2k9k9W9Rtjq2BrJj9Zyk7pI7bP9lw8kfH+4KIFLGF77Sa3R90Un0POvHNCcYzsLVMk9+2buni1bd9xjMSJHMPmjCz7zov/fidW5GQ7OS/2e8BoRrLtrBfXScTIMVLsk09cJxEjZ8I6+cR1EmG1tsRaDsZ0EjlyDL0leuxOpulD4JTALtfXORRbnqVO1LDOePdtpoclWPsqulL+wt0P0SNnxFKrrp2opmuXl+5OuHA3PSmByDGQ9ezSydYdM+ELd4YUIsdANnoWTva2RSUv3JlnJRE5I2RbY+6kee1+dTrrhC7cPTZeMUdivZnydaIc3tdqqWuI6USOYZlSfp0oxzVlJxNByUSOYZlSPk6cDzqEXy17JDTn/LBMKRlTSRZ4X2giep2zZnEwZHLiGjifFt6BTtKKHMMspUxO2BkvDzoDm1jkGGa7bsaJx0t9XfgrOfuMlhezwsc48RrKufvhyiXXHatg8T2Zkm0eHzluxO8W4pXHKljkXycBt3h9blFdeqyCx2fPOguLbn6qTWsBu+Czxs/CopsdP4kmkx+mcZ8FRrfuWUqSTSYT005keDucW4iXnzRhMg17iYacC6A0VyZzzIQs0pBrUrn22JoXY4Us0pDjaZMzb+dIMX6/Qi0dHSU0XHySz48heqSaOs60vsvlq2mtpzj9OCh/Trgjew7afgLar63d6ec2SmTZm37+UyV7048K+Gmkm7O10A/8aaSbY7sEr8rYvYoNnX4Sr3EuYJVpVc35Ccu/innZbryMJ1n4v9f4N9FZ39XPZ931GYzMGH9VPHYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp8Q9+nG9anuOrfAAAAABJRU5ErkJggg=="
  );
  const IsEmpty = (value) => {
    return value.trim() === "";
  };

  const reviewHook = useInput(IsEmpty);
  const instructionsHook = useInput(IsEmpty);
  const gradeHook = useInput(IsEmpty);

  console.log(props);
  let dishData = {
    instructions: instructionsHook.value,
    rating: gradeHook.value,
    userId: localStorage.getItem(
      "CognitoIdentityServiceProvider.7h8akm6h0rbr8feo4te4539jf3.LastAuthUser"
    ),
    text: reviewHook.value,
    username: localStorage.getItem("username"),
    dishId: props.dish.dishId,
    name: props.dish.name,
    restaurantName: props.viewIcon ? "ll" : props.restaurant.name,
    image: imageURL,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSave(dishData);
  };

  let formIsInvalid = reviewHook.isInvalid || instructionsHook.isInvalid || hasImage;

  const handleChange = (event) => {
    console.log(fileRef.current.files[0].name);
    setFile(fileRef.current.files[0]);
  };

  const handleSave = async () => {
    let bucketName = props.dish.dishId;
    let storageRef = firebase.storage().ref(`${bucketName}/${files.name}`);
    let uploadTask = await storageRef.put(files);
    let downloadURL = await storageRef.getDownloadURL();
    console.log(downloadURL);
    setImage(downloadURL);
    setHasImage(false);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        {!props.viewIcon && (
          <>
            {" "}
            <input ref={fileRef} type="file" onChange={handleChange}></input>
          </>
        )}
       < div className={classes.imageContainer}>
          <img alt="broken" id="new-img" src={imageURL}></img>
       </ div>
        {!props.viewIcon && (
          <>
            <button onClick={handleSave}>Save Image</button>{" "}
          </>
        )}
      </div>
      <div className={classes.rightContainer}>
        <h1>{props.dish.name}</h1>
        <form onSubmit={submitHandler}>
          {props.viewIcon && (
            <div>
              <h3>Your Review</h3>
              <div>{props.dish.text}</div>
            </div>
          )}
          {!props.viewIcon && (
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
                <p className={classes.errorText}>
                  Review should not be empty**
                </p>
              )}
            </div>
          )}
          {props.viewIcon && (
            <div>
              <h3>Your Rating</h3>
              {props.dish.rating} <FaStar></FaStar>
            </div>
          )}
          {!props.viewIcon && (
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
          )}
          {props.viewIcon && (
            <div>
              <h3>Your Instructions</h3>
              <div>{props.dish.instructions}</div>
            </div>
          )}
          {!props.viewIcon && (
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
          )}

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
