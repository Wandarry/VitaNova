import { BaseEntity } from "./base";
import { Timestamp } from "firebase/firestore";

export interface ArticleContentEntity extends BaseEntity {
  articleId: string;
  content: string;
}

export interface ArticleEntity extends BaseEntity {
  label: string;
  author: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  shareCount: number;
  publicationDate: Timestamp;
}
