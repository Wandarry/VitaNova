import React from "react";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
} from "@gluestack-ui/themed";

export type BaseSolidButtonProps = {
  message: string;
  value?: string;
  isDisabled: boolean;
  isLoading?: boolean;
  icon?: React.ElementType;
  onPress?: () => void;
  size: "small" | "long";
  messageColor?: string;
  bgColor?: string;
  pressedBgColor?: string;
};

export const BaseSolidButton = ({
  message,
  value,
  onPress,
  isDisabled,
  isLoading,
  icon,
  size,
  messageColor = "$white",
  bgColor = "$primaryNormal",
  pressedBgColor = "$primaryNormalHover",
}: BaseSolidButtonProps) => {
  return (
    <Button
      minHeight={55}
      px={size === "small" ? "$4" : null}
      minWidth={size === "long" ? "$full" : null}
      display="flex"
      alignItems="center"
      justifyContent="center"
      isDisabled={isDisabled}
      bgColor={bgColor}
      borderRadius="$2xl"
      $active-bgColor={pressedBgColor}
      $disabled-opacity="$50"
      onPress={onPress}
    >
      <ButtonText
        color={messageColor}
        fontFamily="Livvic"
        fontSize="$lg"
        fontWeight="$semibold"
      >
        {message}
      </ButtonText>
      {isLoading ? (
        <ButtonSpinner marginLeft="$3" />
      ) : icon ? (
        <ButtonIcon
          as={icon}
          h="$6"
          w="$6"
          color={messageColor}
          marginLeft="$3"
        />
      ) : null}
    </Button>
  );
};
