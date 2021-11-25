import React from "react";
import classes from "./AddDishForm.module.css";
import useInput from "../../../hooks/use-input";
export default function AddDishForm(props) {
  const IsEmpty = (value) => {
    return value.trim() === "";
  };

  const reviewHook = useInput(IsEmpty);
  const instructionsHook = useInput(IsEmpty);
  const gradeHook = useInput(IsEmpty, "1");

  let dishData={
      "review":reviewHook.value,
      "instructions":instructionsHook.value,
      "grade": gradeHook.value,
      "image":"imageURL"
  }

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
            />
            {instructionsHook.isInvalid && (
              <p className={classes.errorText}>
                Description should not be empty**
              </p>
            )}
          </div>

          <div className={classes.actions}>
            <div className={classes.formFlex}>
              <button className={classes.control} onClick={props.onCancel}>
                Cancel
              </button>
              <button disabled={formIsInvalid} className={classes.control}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
