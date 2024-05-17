import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, useEffect } from "react";
import "react-native-reanimated";
import Constants from "expo-constants";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function Wrapper({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

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
      <GluestackUIProvider config={config}>
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
      <Stack.Screen></Stack.Screen>
      <Storybook />
    </Wrapper>
  );
}

export default AppEntryPoint;
