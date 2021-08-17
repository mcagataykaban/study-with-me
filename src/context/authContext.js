import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' })


  const login = () => {
      setLoggedIn(true);
  };
  const logout = () => {
    setUserInfo({ name: '', email: '', password: '' });
    setLoggedIn(false);
  };
  const authContextValue = {
    userInfo,
    setUserInfo,
    login,
    loggedIn,
    logout,
  };
  return (
    <AuthContext.Provider
      value={authContextValue}
      {...props}
    ></AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { useAuth, AuthProvider };
