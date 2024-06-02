import { useAuthContext } from "@/hooks/useAuthContext";
import { Text } from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Routes } from "../constants/route";
import SplashScreen from "../components/SplashScreen";
import { isAlreadyOnboard as checkIfUserIsAlreadyOnboard } from "../utils/alreadyOnboard";

const AppEntry = () => {
  // Extracting user and authentication status from the auth context
  const { user, loading } = useAuthContext();
  // State to check if the user has already completed onboarding
  const [isAlreadyOnboard, setIsAlreadyOnboard] = useState<boolean | null>(
    null,
  );

  // useEffect to check onboarding status from AsyncStorage
  useEffect(() => {
    let ignore = false;

    // Function to check if the user has already completed onboarding
    const checkIfAlreadyOnboard = async () => {
      // import isAlreadyOnboard
      const alreadyOnboard = await checkIfUserIsAlreadyOnboard();
      // Update the state only if the component is still mounted
      if (!ignore) setIsAlreadyOnboard(alreadyOnboard);
    };

    // Call the function to check onboarding status
    checkIfAlreadyOnboard();

    // Cleanup function to ignore state updates if the component unmounts
    return () => {
      ignore = true;
    };
  }, []);

  // useEffect to handle navigation based on authentication and onboarding status
  useEffect(() => {
    if (user) {
      // If the user is authenticated, navigate to the home screen
      router.replace(Routes.HOME);
    } else if (loading) {
      if (isAlreadyOnboard === false) {
        // If the user is not logged in and hasn't completed onboarding, navigate to the onboarding screen
        router.replace(Routes.ONBOARDING);
      } else if (isAlreadyOnboard) {
        // If the user is not logged in but has completed onboarding, navigate to the login screen
        router.replace(Routes.LOGIN);
      }
    }
  }, [user, loading, isAlreadyOnboard]); // Dependencies to re-run the effect when these values change

  // Render the splash screen while checking the state
  return <SplashScreen />;
};

export default AppEntry;
