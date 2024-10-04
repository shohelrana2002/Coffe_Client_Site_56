import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createAccount = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userValue = { setUser, loader, createAccount, singInUser };

  return (
    <AuthContext.Provider value={userValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
