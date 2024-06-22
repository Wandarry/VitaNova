import { BaseEntity } from "./base";

export interface ArticleComment extends BaseEntity {
  articleID: string;
  authorID: string;
  comment: string;
}
