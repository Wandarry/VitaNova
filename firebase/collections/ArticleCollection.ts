import { ArticleEntity } from "@/types/collections/article";
import { BaseCollection } from "./BaseCollections";

let instance: ArticleCollection;

class ArticleCollection extends BaseCollection<ArticleEntity> {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }

    super("articles");
    instance = this;
  }

  getMostRecentArticle() {
    return this.getAllMostRecent(10);
  }

  getMoreArticles() {
    return this.getAllMostRecent(100);
  }

  incrementLikes(articleId: string) {
    return this.incrementFieldValue(articleId, "likes", 1);
  }

  incrementShareCount(articleId: string) {
    return this.incrementFieldValue(articleId, "shareCount", 1);
  }
}

const articleCollectionInstance = Object.freeze(new ArticleCollection());

export default articleCollectionInstance;
