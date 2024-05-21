import React from "react";
import { BaseSolidButton } from "./BaseSolidButton";

export type SolidSmallWhiteProps = {
    message: string;
    value?: string;
    isDisabled: boolean;
    isLoading?: boolean;
    onPress: () => void;
};

export const SolidSmallWhite = ({
    message,
    value,
    onPress,
    isDisabled, 
    isLoading, 
}:SolidSmallWhiteProps) => {
    return (
      <BaseSolidButton
        message={message}
        value={value}
        onPress={onPress}
        isDisabled={isDisabled}
        isLoading={isLoading}
        size="small"
        messageColor="$primaryNormal"
        bgColor="$white"
        pressedBgColor="$primaryLight"
      />
    );
};
