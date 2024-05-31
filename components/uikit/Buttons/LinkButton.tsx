import React from "react";
import { Button, ButtonText, ButtonIcon } from "@gluestack-ui/themed";
import { East } from "@/components/icons/east";

export type LinkButtonProps = {
  title: string;
  isDisabled: boolean;
  onpress: () => void;
  withIcon: boolean;
  iconColor?: string;
};

export const LinkButton = ({
  title,
  isDisabled,
  onpress,
  withIcon = false,
  iconColor = "$primaryNormal",
}: LinkButtonProps) => {
  return (
    <Button
      variant="link"
      onPress={onpress}
      isDisabled={isDisabled}
      $disabled-opacity="$50"
      $active-opacity="$60"
      justifyContent="flex-start"
      maxWidth={"50%"}
    >
      <ButtonText
        color={iconColor}
        fontSize="$md"
        fontFamily="Livvic_600"
        underline={withIcon ? false : true}
        mr={withIcon ? "$2" : "$0"}
      >
        {title}
      </ButtonText>
      {withIcon ? (
        <ButtonIcon as={East} h={16} w={16} color={iconColor} />
      ) : null}
    </Button>
  );
};
