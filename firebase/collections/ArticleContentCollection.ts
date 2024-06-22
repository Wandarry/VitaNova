import { ArticleContentEntity } from "@/types/collections/article";
import { BaseCollection } from "./BaseCollections";

let instance: ArticleContentCollection;

class ArticleContentCollection extends BaseCollection<ArticleContentEntity> {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }

    super("article-content");
    instance = this;
  }
  getArticleContent(ID: string) {
    return this.getFirstBy("articleId", ID);
  }
}

const articleContentCollectionInstance = Object.freeze(
  new ArticleContentCollection(),
);

export default articleContentCollectionInstance;
