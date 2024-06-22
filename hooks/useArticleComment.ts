import articleCommentCollectionInstance from "@/firebase/collections/ArticleCommentCollection";
import { useFetch } from "./useFetch";

export const useArticleComments = (articleID: string) => {
  const state = useFetch(() =>
    articleCommentCollectionInstance.getArticleComments(articleID),
  );

  return state;
};
