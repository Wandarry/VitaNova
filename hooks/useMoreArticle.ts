import articleCollectionInstance from "@/firebase/collections/ArticleCollection";
import { useFetch } from "./useFetch";

export const useMoreArticle = () => {
  const state = useFetch(() => articleCollectionInstance.getMoreArticles());

  return state;
};
