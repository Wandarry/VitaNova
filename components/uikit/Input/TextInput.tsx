import React from "react";
import BaseInput from "./BaseInput";

export type TextInputProps = {
  placeholder: string;
  error?: string;
  help?: string;
  isRequired?: boolean;
  icon: React.ElementType;
  value?: string;
  onChange?: (value: string) => void;
};

export const TextInput = (props: TextInputProps) => {
  return <BaseInput {...props} type="text" />;
};
