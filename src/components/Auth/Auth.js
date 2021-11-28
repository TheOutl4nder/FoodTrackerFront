import React from "react";
import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import UserPool from "../../AWS/UserPool";
import useInput from "../../hooks/use-input";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import classes from "./Auth.module.css";

export default function Auth() {
  const validatePassword = (value) => {
    return (
      value.trim().length <= 7 || !/[a-z]/.test(value) || !/[A-Z]/.test(value)
    );
  };
  const [isLogin, setIsLogin] = useState(true);
  const [authError, setAuthError] = useState(false);
  const nameHook = useInput((value) => value.trim() === "");
  const emailHook = useInput((value) => !value.includes("@"));
  const passwordHook = useInput(validatePassword);

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setAuthError(false);
  };

  const ClickHandler = (event) => {
    event.preventDefault();
    if (isLogin) {
      LogInHandler();
    } else {
      RegisterHandler();
    }
  };

  const postUser = async (user) => {
    
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users`,
        {
          method: "POST",
          headers: {},
          body:JSON.stringify(user)

          
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not post user to AWS");
      }
    } catch {
      alert("Something went wrong while posting user to AWS");
    }
  };

  const LogInHandler = () => {

    //TODO Make Request to login
    const user = new CognitoUser({
      Username: emailHook.value,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: emailHook.value,
      Password: passwordHook.value,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        authCtx.login(data.idToken.jwtToken,data.idToken.payload["custom:username"]);
        history.replace("/home");
      },
      onFailure: (err) => {
        console.error("onFailure :", err);
        setAuthError(true);
      },
      newPasswordRequired: (data) => {
      },
    });
  };

  const RegisterHandler = () => {
    // //TODO Make Request to register
    const usernameAttribute = new CognitoUserAttribute({
      Name: "custom:username",
      Value: nameHook.value,
    });
    try {
      UserPool.signUp(
        emailHook.value,
        passwordHook.value,
        [usernameAttribute],
        null,
        (err, data) => {
          if (err) {
            console.error(err);
            alert(err);
          } else {
            postUser({"userId":data.userSub,"photo":"d"})
            setIsLogin(true);
            passwordHook.reset();
          }
        }
      )
    } catch {
      alert("error");
    }
  };

  let RegisterformIsInvalid =
    nameHook.isInvalid || emailHook.isInvalid || passwordHook.isInvalid;

  let LoginformIsInvalid = emailHook.isInvalid || passwordHook.isInvalid;

  const isBtnDisabled = isLogin
    ? LoginformIsInvalid
      ? true
      : false
    : RegisterformIsInvalid
    ? true
    : false;

  return (
    <div className={classes.main}>
      <img
      alt="foodTracker"
        className={classes.logo}
        src="https://i.pinimg.com/originals/fe/50/40/fe5040ef6eb50e18c24f937bc43916a0.jpg"
      ></img>

      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {authError && (
          <div className={classes.invalidCredentials}>
            Incorrect username or password
          </div>
        )}
        <form onSubmit={ClickHandler}>
          {!isLogin && (
            <>
              <div className={classes.control}>
                <label htmlFor="username">Username</label>
                <input
                  value={nameHook.value}
                  onChange={nameHook.ChangeHandler}
                  onBlur={nameHook.BlurHandler}
                  type="text"
                  id="username"
                  required
                />
                {nameHook.isInvalid && (
                  <p className={classes.errorText}>
                    Name should not be empty**
                  </p>
                )}
              </div>
            </>
          )}
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              value={emailHook.value}
              onChange={emailHook.ChangeHandler}
              onBlur={emailHook.BlurHandler}
              type="email"
              id="email"
              required
            />
            {emailHook.isInvalid && (
              <p className={classes.errorText}>Please enter a valid email**</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              value={passwordHook.value}
              onChange={passwordHook.ChangeHandler}
              onBlur={passwordHook.BlurHandler}
              type="password"
              id="password"
              required
            />
            {passwordHook.isInvalid && (
              <p className={classes.errorText}>
                Password should have uppercase and lowercase letters, and be at
                least 8 chars long**
              </p>
            )}
          </div>
          <div className={classes.actions}>
            <button disabled={isBtnDisabled}>
              {isLogin ? "Login" : "Create Account"}
            </button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
