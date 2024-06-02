import AsyncStorage from "@react-native-async-storage/async-storage";

export const markAsAlreadyOnboard = () => {
  AsyncStorage.setItem("alreadyOnboard", "true");
};

export const isAlreadyOnboard = async () => {
  const savedValue = await AsyncStorage.getItem("alreadyOnboard");
  return savedValue === "true";
};
