import type { Meta, StoryObj } from "@storybook/react";
import { GoogleButton } from "../../components/uikit/Buttons/GoogleButton";
import { View } from "react-native";
import React from "react";

const GoogleButtonMeta: Meta<typeof GoogleButton> = {
  title: "uikit/Buttons/GoogleButton",
  component: GoogleButton,
  args: {
    message: "Continuer avec Google",
    isDisabled: false,
    isLoading: false,
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default GoogleButtonMeta;

export const Basic: StoryObj<typeof GoogleButton> = {};
