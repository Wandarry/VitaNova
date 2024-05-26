import React, { useState } from "react";
import BaseInput from "./BaseInput";
import { Visibility } from "@/components/icons/visibility";
import { VisibilityOff } from "@/components/icons/visibilityOff";

export type PasswordInputProps = {
  error?: string;
  help?: string;
  isRequired?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

export const PasswordInput = ({
  error,
  help,
  isRequired,
  value,
  onChange,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <BaseInput
      placeholder="Mot de passe"
      error={error}
      help={help}
      isRequired={isRequired}
      icon={showPassword ? Visibility : VisibilityOff}
      value={value}
      onChange={onChange}
      type={showPassword ? "text" : "password"}
      togglePasswordVisibility={togglePasswordVisibility}
    />
  );
};
