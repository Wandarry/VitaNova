import { Button, ButtonIcon } from "@gluestack-ui/themed";
import React from "react";
import { ArrowRight } from "@/components/icons/arrowRight";

export type NextIconButtonProps = {
    isDisabled: boolean,
    onPress?: () => void;
}

export const NextIconButton = ({
  isDisabled,
  onPress,
}:NextIconButtonProps) => {
  return (
    <Button
      borderRadius="$full"
      p={4}
      w={42}
      bgColor="$white"
      $active-bgColor="$primaryLightHover"
      onPress={onPress}
      isDisabled={isDisabled}
      $disabled-opacity="$50"
      alignItems="center"
      justifyContent="center"
    >
      <ButtonIcon as={ArrowRight} color="$primaryNormal" size="xl"/>
    </Button>
  );
};
