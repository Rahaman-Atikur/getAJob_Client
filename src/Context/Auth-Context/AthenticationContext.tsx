import { createContext } from "react";


export type AuthContextType = {
  createUser: (email: string, password: string) => Promise<any>;
};

// Export this!
export const AuthContext = createContext<AuthContextType | null>(null);