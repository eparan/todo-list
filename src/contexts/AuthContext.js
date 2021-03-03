import React, { useEffect, useState } from "react";
import { auth } from "./../firebase/firebase.config";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
