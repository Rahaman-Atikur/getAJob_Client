import React, { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AthenticationContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type UserCredential,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

type authProviderProps = {
  children: ReactNode;
};
export type AuthContextType = {
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: (email: string, password: string) => Promise<UserCredential>;
  user: string | null;
  currentUser : string | null;
};

const AuthProvider = ({ children }: authProviderProps) => {

  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<string | null>(null);

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
  // Signout User
  const signOutUser = ()=>{
    setLoading(true);
     return signOut(auth);
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("user in the auth state change", currentUser);
    });
    return () => unSubscribe();
  }, []);


  //Contexting the auth info
  const authInfo: AuthContextType = {
    loading,
    createUser,
    signInUser,
    user,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
