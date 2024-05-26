import { getFirestore } from "firebase/firestore";
import firebaseApp from ".";

const firestoreDb = getFirestore(firebaseApp);

export default firestoreDb;
