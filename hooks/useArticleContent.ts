import articleContentCollectionInstance from "@/firebase/collections/ArticleContentCollection";
import { useFetch } from "./useFetch";

export const useArticleContent = (ID: string) => {
  const state = useFetch(() =>
    articleContentCollectionInstance.getArticleContent(ID),
  );

  return state;
};
