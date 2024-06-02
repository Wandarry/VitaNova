import React, { createContext, PropsWithChildren } from "react";
import { signOut, User } from "firebase/auth";
import { UserEntity } from "@/types/collections/user";
import { useAuthState } from "@/hooks/useAuthState";
import { useUserData } from "@/hooks/useUserData";
import firebaseAuth from "@/firebase/auth";

interface AuthContextValue {
  user: User | null;
  logOut: () => Promise<void>;
  loading: boolean;
  isNotLoggedIn: boolean;
  error?: boolean;
  userData: UserEntity | null;
}

const defaultAuthContextValue: AuthContextValue = {
  loading: true,
  logOut: async () => void 0,
  user: null,
  userData: null,
  isNotLoggedIn: true,
  error: false,
};

export const AuthContext = createContext<AuthContextValue>(
  defaultAuthContextValue,
);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const { user, loading } = useAuthState();
  const { userData, error } = useUserData(user);

  const logOut = async () => {
    await signOut(firebaseAuth);
  };

  const isNotLoggedIn = !loading && !user;

  const authValue = {
    user,
    logOut,
    loading,
    isNotLoggedIn,
    error,
    userData,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
