import React from "react";
import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import UserPool from "../../AWS/UserPool";
import { CognitoUser, AuthenticationDetails, CognitoUserAttribute } from "amazon-cognito-identity-js";
import classes from "./Auth.module.css";
export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const ClickHandler = (event) => {
    event.preventDefault();
    if (isLogin) {
      LogInHandler();
    } else {
      RegisterHandler();
    }
  };

  const LogInHandler = () => {
    console.log("Loging in");
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    
    //TODO Make Request to login
    const user = new CognitoUser({
      Username: emailRef.current.value,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: emailRef.current.value,
      Password: passwordRef.current.value,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        authCtx.login(data.idToken.jwtToken);
        history.replace("/home");
        
      },
      onFailure: (err) => {
        console.error("onFailure :", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };

  const RegisterHandler = () => {
    console.log("Register");
    console.log(usernameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    // //TODO Make Request to register
    const usernameAttribute = new CognitoUserAttribute({
      Name: 'custom:username',
      Value: usernameRef.current.value
     });
    UserPool.signUp(
      emailRef.current.value,
      passwordRef.current.value,
      [usernameAttribute],
      null,
      (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log(data);
      }
    );
    authCtx.login("token");
    history.replace("/home");
  };

  return (
    <div className={classes.main}>
      <img
        className={classes.logo}
        src="https://i.pinimg.com/originals/fe/50/40/fe5040ef6eb50e18c24f937bc43916a0.jpg"
      ></img>

      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={ClickHandler}>
          {!isLogin && (
            <>
              <div className={classes.control}>
                <label htmlFor="username">Username</label>
                <input ref={usernameRef} type="text" id="username" required />
              </div>
            </>
          )}
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input ref={emailRef} type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input ref={passwordRef} type="password" id="password" required />
          </div>
          <div className={classes.actions}>
            <button>
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
