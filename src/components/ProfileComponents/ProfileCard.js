import React from "react";
import classes from "./ProfileCard.module.css";
import { FaUserAlt } from "react-icons/fa";

export default function ProfileCard({props}) {

    const iconStyle = { color: "#FFA500", fontSize: 90 };

  return (
    <div className={classes.container}>
      <div className={classes.info}>
          <div className={classes.icon}>
          <FaUserAlt style={iconStyle}></FaUserAlt>
          </div>
        <div className={classes.name}>
          <h1>Kevin</h1>
        </div>
       
      </div>
    </div>
  );
}
