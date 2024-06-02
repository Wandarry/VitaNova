import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export const useAuthContext = () => {
  const contextValue = useContext(AuthContext);

  return contextValue;
};
