import {
  Text,
  Popover,
  PopoverBackdrop,
  Pressable,
  Box,
  Icon,
  HStack,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { LinkButton } from "./uikit/Buttons/LinkButton";
import { SolidSmallWhite } from "./uikit/Buttons/SolidSmallWhite";
import { Info } from "./icons/info";

type PopOverForMapProps = {
  title: string;
};

export const PopOverForMap = ({ title }: PopOverForMapProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      placement="bottom"
      size="lg"
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps}>
            <LinkButton
              title="Vous ne connaissez pas votre groupe sanguin ?"
              isDisabled={false}
              withIcon={false}
              onpress={handleOpen}
            />
          </Pressable>
        );
      }}
    >
      <PopoverBackdrop />
      <Box
        minHeight="30%"
        w="90%"
        bgColor="$primaryNormal"
        px="$6"
        py="$6"
        borderRadius={16}
        gap={14}
        justifyContent="center"
      >
        <Icon as={Info} color="$white" h={28} w={28} />
        <Text fontFamily="Livvic_600" fontSize={15} color="$white">
          {title}
        </Text>
        <HStack marginTop={16}>
          <SolidSmallWhite
            message="Voir la carte"
            isDisabled={false}
            onPress={() => console.log("Map")}
          />
        </HStack>
      </Box>
    </Popover>
  );
};
