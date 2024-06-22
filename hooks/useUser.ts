import userCollectionInstance from "@/firebase/collections/user";
import { useFetch } from "./useFetch";

export const useUser = (userID: string) => {
  const state = useFetch(() => userCollectionInstance.getById(userID));

  return state;
};
