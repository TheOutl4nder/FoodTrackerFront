import React from "react";
import { useState, useRef,useContext} from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Auth.module.css";
export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx= useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const ClickHandler = ()=>{
    if (isLogin){
      LogInHandler();
    }
    else{
      RegisterHandler();
    }
  }

  const LogInHandler = ()=>{
    console.log('Loging in');
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    //  //TODO Make Request to login
    authCtx.login('token');
  }

  const RegisterHandler = ()=>{
    console.log('Register')
    console.log(usernameRef.current.value)
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    // //TODO Make Request to register
    authCtx.login('token');
  }

  return (
    <div className={classes.main}>
      <img className={classes.logo} src="https://i.pinimg.com/originals/fe/50/40/fe5040ef6eb50e18c24f937bc43916a0.jpg"></img>

      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form>
          {!isLogin && (
            <>
              <div className={classes.control}>
                <label htmlFor="username">Username</label>
                <input ref= {usernameRef}type="text" id="username" required />
              </div>
            </>
          )}
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input ref= {emailRef} type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input ref= {passwordRef} type="password" id="password" required />
          </div>
          <div className={classes.actions}>
            <button onClick={ClickHandler}>{isLogin ? "Login" : "Create Account"}</button>
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
