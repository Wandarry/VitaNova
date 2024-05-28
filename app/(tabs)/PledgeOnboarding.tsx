import React, { useState } from "react";
import { Text, HStack, Box, ImageBackground } from "@gluestack-ui/themed";
import { BackIconButton } from "@/components/uikit/Buttons/BackIconButton";
import { SolidSmallWhite } from "@/components/uikit/Buttons/SolidSmallWhite";

export default function PledgeOnboarding() {
  const title =
    "Vous êtes sur le point de faire le premier pas vers le don d'organes";
  const description =
    "Sachez que chaque étape de ce processus est réversible. À tout moment, vous avez la liberté de reconsidérer votre décision ou d'arrêter la procédure.";
  return (
    <Box flex={1} p="$0">
      <ImageBackground
        source={require("../../assets/images/pledgeOnboarding.png")}
        justifyContent="flex-end"
        flex={1}
        gap="$6"
        px="$6"
        py="$8"
      >
        <Box position="absolute" top={50} left={24}>
          <BackIconButton
            isDisabled={false}
            bgColor="$primaryNormal"
            iconColor="$white"
            pressedBgColor="$primaryNormalHover"
          />
        </Box>
        <Text
          fontSize="$4xl"
          fontWeight="$semibold"
          textAlign="left"
          color="$white"
        >
          {title}
        </Text>
        <Text
          textAlign="left"
          fontSize="$lg"
          color="$white"
          fontWeight="$medium"
          w={"100%"}
        >
          {description}
        </Text>
        <HStack>
          <SolidSmallWhite
            message="Prêt à m'engager"
            isDisabled={false}
            onPress={() => console.log("Hello")}
          />
        </HStack>
      </ImageBackground>
    </Box>
  );
}
