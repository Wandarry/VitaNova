import { ArticleComment } from "@/types/collections/comment";
import { BaseCollection } from "./BaseCollections";

let instance: ArticleCommentCollection;

class ArticleCommentCollection extends BaseCollection<ArticleComment> {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }

    super("article-comments");
    instance = this;
  }

  async createComment(articleID: string, authorID: string, comment: string) {
    this.create({ articleID, authorID, comment });
  }

  async getArticleComments(articleID: string) {
    return this.getAllBy("articleID", articleID);
  }
}

const articleCommentCollectionInstance = Object.freeze(
  new ArticleCommentCollection(),
);

export default articleCommentCollectionInstance;
