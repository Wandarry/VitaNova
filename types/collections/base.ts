import { DocumentData } from "firebase/firestore";

export interface BaseEntity extends DocumentData {
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
