import React, { useState } from "react";

const AuthContext = React.createContext({
  username: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const userIsLoggedIn = !!token;

  const loginHandler = (token, username) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    username: username,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
