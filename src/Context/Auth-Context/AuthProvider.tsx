import React, { useState, type ReactNode } from "react";
import { AuthContext } from "./AthenticationContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type UserCredential,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

type authProviderProps = {
  children: ReactNode;
};
export type AuthContextType = {
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: (email:string,password:string)=>Promise<UserCredential>;
};

const AuthProvider = ({ children }: authProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  // Creating user with email and password
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign in with email and password
  const signInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Contexting the auth info
  const authInfo: AuthContextType = {
    loading,
    createUser,
    signInUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
