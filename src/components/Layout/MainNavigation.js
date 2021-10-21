import React ,{useContext}from "react";
import { Link } from "react-router-dom";
 import classes from "./MainNavigation.module.css";
import AuthContext from "../../store/auth-context";

export default function MainNavigation() {

  const authCtx = useContext(AuthContext);
  const isLoggedIn= authCtx.isLoggedIn;

  const logoutHandler= ()=>{
    authCtx.logout();
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Food Tracker</div>
      </Link>
      <nav>
        <ul>
          {isLoggedIn && <>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/restaurant">Restaurant</Link>
          </li>
          <li>
            <Link to="/dish">Dish</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          </>}
        </ul>
      </nav>
    </header>
  );
}
