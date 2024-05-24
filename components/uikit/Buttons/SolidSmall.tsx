import React from "react";
import { BaseSolidButton } from "./BaseSolidButton";
import { DoubleArrow } from "@/components/icons/doubleArrow";

export type SolidSmallProps = {
  message: string;
  value?: string;
  isDisabled: boolean;
  onPress: () => void;
};

export const SolidSmall = ({
    message,
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
            icon={DoubleArrow}
            size="small"
        />
    );
};
