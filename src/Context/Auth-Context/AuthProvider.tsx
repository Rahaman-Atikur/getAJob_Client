import React, { useState, type ReactNode } from "react";
import { AuthContext } from "./AthenticationContext";
import {
  createUserWithEmailAndPassword,
  type UserCredential,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

type authProviderProps = {
  children: ReactNode;
};
export type AuthContextType = {
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
};

const AuthProvider = ({ children }: authProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo: AuthContextType = {
    loading,
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
