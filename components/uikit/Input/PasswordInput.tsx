import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@gluestack-ui/themed";
import BaseInput from "./BaseInput";

export type PasswordInputProps = {
  error?: string;
  help?: string;
  isRequired?: boolean;
  icon: React.ElementType;
  value?: string;
  onChange?: (value: string) => void;
};

export const PasswordInput = ({
  error,
  help,
  isRequired,
  icon,
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
      icon={showPassword ? EyeIcon : EyeOffIcon}
      value={value}
      onChange={onChange}
      type={showPassword ? "text" : "password"}
      togglePasswordVisibility={togglePasswordVisibility}
    />
  );
};
