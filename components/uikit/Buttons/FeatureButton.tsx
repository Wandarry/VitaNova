import { Button, ButtonIcon } from "@gluestack-ui/themed";
import React from "react";

export type FeatureButtonProps = {
    icon: React.ElementType,
    isDisabled: boolean,
    onPress?: () => void;
}

export const FeatureButton = ({
  icon,
  isDisabled,
  onPress,
}:FeatureButtonProps) => {
  return (
    <Button
      borderRadius="$full"
      w={76}
      h={76}
      bgColor="$primaryLight"
      $active-bgColor="$primaryLightHover"
      onPress={onPress}
      isDisabled={isDisabled}
      $disabled-opacity="$50"
      alignItems="center"
      justifyContent="center"
    >
      <ButtonIcon as={icon} color="$primaryNormal" size="xl"/>
    </Button>
  );
};

