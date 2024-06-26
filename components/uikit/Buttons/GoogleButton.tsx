import React from "react";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
} from "@gluestack-ui/themed";
import { Google } from "@/components/icons/google";

export type GoogleButtonProps = {
  message: string;
  value?: string;
  isDisabled: boolean;
  isLoading?: boolean;
  onPress?: () => void;
};

export const GoogleButton = ({
  message,
  value,
  isDisabled,
  isLoading,
  onPress,
}: GoogleButtonProps) => {
  return (
    <Button
      isDisabled={isDisabled}
      onPress={onPress}
      minHeight={55}
      minWidth="$full"
      alignItems="center"
      justifyContent="center"
      bgColor="$white"
      borderColor="$primaryDark"
      borderWidth={2}
      borderRadius="$2xl"
      $active-bgColor="$primaryLight"
      $disabled-opacity="$50"
    >
      {isLoading ? (
        <ButtonSpinner marginRight="$3" color="$primaryNormal" />
      ) : (
        <ButtonIcon as={Google} marginRight="$3" />
      )}
      <ButtonText color="$primaryNormal" fontSize="$lg" fontFamily="Livvic_600">
        {message}
      </ButtonText>
    </Button>
  );
};
