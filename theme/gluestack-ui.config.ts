import { config } from "@gluestack-ui/config"

import merge from "lodash/merge";

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
      red: "#D0342C"
    },
  },
  globalStyle: {
    fontFamily: "Livvic"
  }
}

export const extendedThemeConfig = merge(config, custom);
