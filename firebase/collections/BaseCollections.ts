import {
  setDoc,
  doc,
  addDoc,
  DocumentReference,
  CollectionReference,
  collection,
  WithFieldValue,
  limit,
  where,
  query,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import firestoreDb from "../firestore";
import { BaseEntity } from "@/types/collections/base";

export class BaseCollection<T extends DocumentData> {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  create(document: T) {
    const ref = collection(firestoreDb, this.name) as CollectionReference<T, T>;
    const documentWithTimestampFields = { ...document, createdAt: new Date() };
    return addDoc<T, T>(ref, document);
  }

  createOrUpdate(document: WithFieldValue<T>, id: string) {
    const ref = doc(firestoreDb, this.name, id) as DocumentReference<T, T>;
    const documentWithTimestampFields = { ...document, updatedAt: new Date() };
    return setDoc<T, T>(ref, document);
  }

  protected async getFirstBy(fieldName: string, value: string) {
    const ref = collection(firestoreDb, this.name) as CollectionReference<T, T>;

    const q = query<T, T>(ref, where(fieldName, "==", value), limit(1));
    const querySnapshot = await getDocs<T, T>(q);

    return querySnapshot.docs[0]?.data() ?? null;
  }
}
