import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaInput } from "../../components/uikit/Input/TextareaInput";

const TextAreaInputMeta: Meta<typeof TextAreaInput> = {
  title: "Uikit/Input/TextareaInput",
  component: TextAreaInput,
  args: {
    placeholder: "Ecrivez...",
  },
};

export default TextAreaInputMeta;

export const Basic: StoryObj<typeof TextAreaInput> = {};

