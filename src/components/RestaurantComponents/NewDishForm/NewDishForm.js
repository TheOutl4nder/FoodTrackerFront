import React from 'react'
import classes from "./NewDish.module.css";
import useInput from "../../../hooks/use-input";

export default function NewDishForm(props) {
    const IsEmpty = (value) => {
        return value.trim() === "";
      };
    
      const nameHook = useInput(IsEmpty);
      const descriptionHook = useInput(IsEmpty);
      const categoryHook = useInput(IsEmpty, "Entrada");

      let dishData={
        "name":nameHook.value,
        "description":descriptionHook.value,
        "category":categoryHook.value,
        "image":"imageURL"
      }
    
      const submitHandler = (event) => {
        event.preventDefault();
        props.onSave(dishData)
      };
    
      let formIsInvalid = nameHook.isInvalid || descriptionHook.isInvalid;
    
    return (
        <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>picture</div>
      <div className={classes.rightContainer}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="cars">Dish Name</label>
            <input
              value={nameHook.value}
              onChange={nameHook.ChangeHandler}
              onBlur={nameHook.BlurHandler}
              type="text"
              required
            />
            {nameHook.isInvalid && (
              <p className={classes.errorText}>Name should not be empty**</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="cars">Category:</label>
            <select
              onChange={categoryHook.ChangeHandler}
              onBlur={categoryHook.BlurHandler}
              name="cars"
              required
            >
              <option value="Entrada">Entrada</option>
              <option value="PlatoFuerte">Plato Fuerte</option>
              <option value="Postre">Postre</option>
            </select>
            {categoryHook.isInvalid && (
              <p className={classes.errorText}>Please select a type</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Dish Description</label>
            <textarea
              value={descriptionHook.value}
              onChange={descriptionHook.ChangeHandler}
              onBlur={descriptionHook.BlurHandler}
              type="text"
              required
            />
            {descriptionHook.isInvalid && (
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
    )
}
