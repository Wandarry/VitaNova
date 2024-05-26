import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaInput } from "../../components/uikit/Input/dumb/TextareaInput";

const TextAreaInputMeta: Meta<typeof TextAreaInput> = {
  title: "Uikit/Input/TextareaInput",
  component: TextAreaInput,
  args: {
    placeholder: "Ecrivez...",
    error: "That field is required",
  },
};

export default TextAreaInputMeta;

export const Basic: StoryObj<typeof TextAreaInput> = {};
