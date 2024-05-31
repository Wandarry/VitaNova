import {
  Text,
  Popover,
  PopoverBackdrop,
  Icon,
  Pressable,
  Box,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Info } from "./icons/info";
import { LinkButton } from "./uikit/Buttons/LinkButton";

type InfoPopOverProps = {
  title: string;
  message: string;
  onpress: () => void;
};

export const InfoPopOver = ({ title, message, onpress }: InfoPopOverProps) => {
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
            <Icon as={Info} h={24} w={24} color="$primaryNormal" />
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
        <Text fontFamily="Livvic_700" fontSize={18} color="$white">
          {title}
        </Text>
        <Text color="$white">{message}</Text>
        <LinkButton
          title="En savoir"
          withIcon={true}
          isDisabled={false}
          onpress={onpress}
          iconColor="$white"
        />
      </Box>
    </Popover>
  );
};
