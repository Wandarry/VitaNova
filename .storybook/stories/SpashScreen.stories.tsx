import type { Meta, StoryObj } from "@storybook/react";
import SplashScreen from "../../components/SplashScreen";

const SplashScreenMeta: Meta<typeof SplashScreen> = {
  title: "Uikit/SplashScreen",
  component: SplashScreen,
};

export default SplashScreenMeta;

export const Basic: StoryObj<typeof SplashScreen> = {};
