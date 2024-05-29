import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "../../components/uikit/Input/dumb/Checkbox";

const CheckBoxMeta: Meta<typeof CheckBox> = {
  title: "Uikit/Input/CheckBox",
  component: CheckBox,
  args: {
    label: "Hello world",
  },
};

export default CheckBoxMeta;

export const Basic: StoryObj<typeof CheckBox> = {};
