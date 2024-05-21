import React from "react";
import { BaseSolidButton } from "./BaseSolidButton";

export type SolidLongProps = {
  message: string;
  value?: string;
  isDisabled: boolean;
  isLoading: boolean;
  onPress: () => void;
};

export const SolidLong = ({
    message,
    value,
    onPress,
    isDisabled,
    isLoading
}:SolidLongProps) => {
    return (
        <BaseSolidButton
            message={message}
            value={value}
            onPress={onPress}
            isDisabled={isDisabled}
            isLoading={isLoading}
            size="long"
        />
    );
};

