import articleCollectionInstance from "@/firebase/collections/ArticleCollection";
import { useFetch } from "./useFetch";

export const useArticle = (ID: string) => {
  const state = useFetch(() => articleCollectionInstance.getById(ID));

  return state;
};
