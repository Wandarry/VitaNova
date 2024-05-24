import { Button, ButtonIcon } from "@gluestack-ui/themed";
import React from "react";
import { ArrowLeft } from "@/components/icons/arrowLeft";

export type BackIconButtonProps = {
    isDisabled: boolean,
    bgColor?: string,
    pressedBgColor?: string,
    iconColor?: string,
    onPress?: () => void;
}

export const BackIconButton = ({
  isDisabled,
  bgColor="$primaryLight",
  pressedBgColor="$primaryLightHover",
  iconColor="$primaryNormal",
  onPress,
}:BackIconButtonProps) => {
  return (
    <Button
      borderRadius="$full"
      p={4}
      w={42}
      bg={bgColor}
      $active-bgColor={pressedBgColor}
      onPress={onPress}
      isDisabled={isDisabled}
      $disabled-opacity="$50"
      alignItems="center"
      justifyContent="center"
    >
      <ButtonIcon as={ArrowLeft} color={iconColor} size="xl"/>
    </Button>
  );
};

