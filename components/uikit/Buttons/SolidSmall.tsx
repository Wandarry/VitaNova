import React from "react";
import { BaseSolidButton } from "./BaseSolidButton";

export type SolidSmallProps = {
  message: string;
  icon: React.ElementType;
  value?: string;
  isDisabled: boolean;
  onPress: () => void;
};

export const SolidSmall = ({
    message,
    icon,
    value,
    onPress,
    isDisabled
}:SolidSmallProps) => {
    return (
        <BaseSolidButton
            message={message}
            value={value}
            onPress={onPress}
            isDisabled={isDisabled}
            icon={icon}
            size="small"
        />
    );
};
