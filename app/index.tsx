import SplashScreen from "@/components/SplashScreen";
import { Routes } from "@/constants/route";
import { useAuthContext } from "@/hooks/useAuthContext";
import { isAlreadyOnboard as checkIfUserIsAlreadyOnboard } from "@/utils/alreadyOnboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";

const AppEntry = () => {
  const { user, isNotLoggedIn } = useAuthContext();

  const [isAlreadyOnboard, setIsAlreadyOnboard] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    let ignore = false;

    const checkIfAlreadyOnboard = async () => {
      const alreadyOnboard = await checkIfUserIsAlreadyOnboard();

      if (!ignore) setIsAlreadyOnboard(alreadyOnboard);
    };

    checkIfAlreadyOnboard();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (user) {
      router.replace(Routes.HOME);
    } else if (isNotLoggedIn) {
      if (isAlreadyOnboard === false) {
        router.replace(Routes.ONBOARDING);
      } else if (isAlreadyOnboard) {
        router.replace(Routes.LOGIN);
      }
    }
  }, [user, isNotLoggedIn, isAlreadyOnboard]);

  return <SplashScreen />;
};

export default AppEntry;
