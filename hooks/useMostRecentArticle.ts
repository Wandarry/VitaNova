import articleCollectionInstance from "@/firebase/collections/ArticleCollection";
import { useFetch } from "./useFetch";

export const useMostRecentArticle = () => {
  const state = useFetch(() =>
    articleCollectionInstance.getMostRecentArticle(),
  );

  return state;
};
