import React, { useRef } from "react";
import classes from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

export default function Search(props) {
  let searchRef = useRef("");

  let keyPress = (e) => {
    if (e.key === "Enter" && searchRef.current) {
      props.onEnterKey(searchRef.current.value);
    }
  };

  return (
    <div className={classes.search_wrap}>
      <div className={classes.search_container}>
        <div className={classes.search_image}>
          <FaSearch color="#B4B4B4"></FaSearch>
        </div>
        <div className={classes.search_input}>
          <input
            ref={searchRef}
            onKeyDown={keyPress}
            placeholder="Search"
          ></input>
        </div>
      </div>
    </div>
  );
}
