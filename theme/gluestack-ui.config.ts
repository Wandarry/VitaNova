import { FontResolver } from "@gluestack-style/react";
import { config } from "@gluestack-ui/config";
import { AnimationResolver } from "@gluestack-style/animation-resolver";
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';
import merge from "lodash/merge";
import { Platform } from "react-native";

const fontResolver = new FontResolver({
  mapFonts: (style) => {
    if (Platform.OS !== "web" && style.fontWeight !== undefined) {
      style.fontFamily = style.fontFamily + "_" + style.fontWeight;
      style.fontWeight = undefined;
      style.fontStyle = undefined;
    }
  },
});

const custom = {
  tokens: {
    colors: {
      primaryLight: "#e8ebf0",
      primaryLightHover: "#dce1e9",
      primaryLightActive: "#b7c1d2",
      primaryNormal: "#17376d",
      primaryNormalHover: "#153262",
      primaryNormalActive: "#122c57",
      primaryDark: "#112952",
      primaryDarkHover: "#0e2141",
      primaryDarkActive: "#0a1931",
      primaryDarker: "#081326",
      black: "#3D3D3D",
      red: "#D0342C",
    },
  },
  globalStyle: {
    fontFamily: "Livvic",
  },
  plugins: [fontResolver, new AnimationResolver(MotionAnimationDriver)],
};

export const extendedThemeConfig = merge(config, custom);
