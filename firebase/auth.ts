import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import firebaseApp from "./index";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// const firebaseAuth = getAuth(firebaseApp);
const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default firebaseAuth;
