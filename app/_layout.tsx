import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import {  useFonts, Livvic_400Regular, Livvic_500Medium, Livvic_600SemiBold, Livvic_700Bold } from '@expo-google-fonts/livvic';
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, useEffect } from "react";
import "react-native-reanimated";
import Constants from "expo-constants";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { extendedThemeConfig } from "@/theme/gluestack-ui.config";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync(); // Add a setTimeout here 

function Wrapper({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({Livvic_400Regular, Livvic_500Medium, Livvic_600SemiBold, Livvic_700Bold});

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; 
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GluestackUIProvider config={extendedThemeConfig}>
        {children}
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

const AppContent = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

// Default to rendering your app
let AppEntryPoint = () => (
  <Wrapper>
    <AppContent />
  </Wrapper>
);

// Render Storybook if storybookEnabled is true
if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  const Storybook = require("../.storybook").default;
  AppEntryPoint = () => (
    <Wrapper>
      <Storybook />
    </Wrapper>
  );
}

export default AppEntryPoint;
