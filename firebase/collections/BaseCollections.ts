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
  orderBy,
  updateDoc,
  increment,
  UpdateData,
  getDoc,
} from "firebase/firestore";
import firestoreDb from "../firestore";

export class BaseCollection<T extends DocumentData> {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  create(document: T) {
    const ref = collection(firestoreDb, this.name) as CollectionReference<T, T>;
    const documentWithTimestampFields = { ...document, createdAt: new Date() };
    return addDoc<T, T>(ref, documentWithTimestampFields);
  }

  createOrUpdate(document: WithFieldValue<T>, id: string) {
    const ref = doc(firestoreDb, this.name, id) as DocumentReference<T, T>;
    const documentWithTimestampFields = { ...document, updatedAt: new Date() };
    const option = { merge: true };
    return setDoc<T, T>(ref, documentWithTimestampFields, option);
  }

  async getSnapshotBy(fieldName: string, value: string) {
    const ref = collection(firestoreDb, this.name) as CollectionReference<T, T>;

    const q = query<T, T>(ref, where(fieldName, "==", value), limit(1));
    const querySnapshot = await getDocs<T, T>(q);

    return querySnapshot;
  }

  async getFirstSnapshotBy(fieldName: string, value: string) {
    const querySnapshot = await this.getSnapshotBy(fieldName, value);

    return querySnapshot.docs[0];
  }

  protected async getFirstBy(fieldName: string, value: string) {
    const querySnapshot = await this.getSnapshotBy(fieldName, value);

    return querySnapshot.docs[0]?.data() ?? null;
  }

  async getAllMostRecent(limitSize: number) {
    const ref = collection(firestoreDb, this.name) as CollectionReference<T, T>;

    const orderByQuery = orderBy("publicationDate", "desc");
    const limitQuery = limit(limitSize);

    const q = query<T, T>(ref, orderByQuery, limitQuery);
    const querySnapshot = await getDocs<T, T>(q);

    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  }
  async getAllBy(fieldName: string, value: string) {
    const ref = collection(firestoreDb, this.name) as CollectionReference<T, T>;

    const q = query<T, T>(ref, where(fieldName, "==", value), limit(1));
    const querySnapshot = await getDocs<T, T>(q);

    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  }

  async incrementFieldValue(id: string, fieldName: keyof T, value: number) {
    const ref = doc(firestoreDb, this.name, id) as DocumentReference<T, T>;

    return updateDoc<T, T>(ref, {
      [fieldName]: increment(value),
    } as UpdateData<T>);
  }

  searchByTitle = async (searchText: string) => {
    if (!searchText) return [];
    const ref = collection(firestoreDb, this.name) as CollectionReference<T, T>;
    const q = query(
      ref,
      where("title", ">=", searchText),
      where("title", "<=", searchText + "\uf8ff"),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };
  async getById(ID: string) {
    const ref = doc(firestoreDb, this.name, ID) as DocumentReference<T, T>;
    const snapshot = await getDoc<T, T>(ref);
    return snapshot.exists() ? { ...snapshot.data(), id: snapshot.id } : null;
  }
}
