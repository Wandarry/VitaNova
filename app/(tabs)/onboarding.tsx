import React, { useState } from "react";
import { ImageSourcePropType } from "react-native";
import { Text, HStack, Box, ImageBackground } from "@gluestack-ui/themed";
import { BackIconButton } from "@/components/uikit/Buttons/BackIconButton";
import { NextIconButton } from "@/components/uikit/Buttons/NextIconButton";
import { SolidSmallWhite } from "@/components/uikit/Buttons/SolidSmallWhite";
import {
  AnimatedView,
  AnimatePresence,
} from "@gluestack-style/animation-resolver";
import { styled } from "@gluestack-style/react";

type OnboardingScreen = {
  image: ImageSourcePropType;
  title: string;
  description: string;
};

const onboardingData: OnboardingScreen[] = [
  {
    image: require("@/assets/images/onboarding1.png"),
    title: "Sauver des vies est à portée de main",
    description:
      "Découvrez comment un simple acte de générosité peut éclairer des étoiles d'espoir dans le cœur de milliers de personnes.",
  },
  {
    image: require("@/assets/images/onboarding2.png"),
    title: "Devenez un héro anonyme",
    description:
      "Votre décision peut faire des miracles. Participez à la chaîne de la vie en soutenant le don d'organes par votre consentement.",
  },
  {
    image: require("@/assets/images/onboarding3.png"),
    title: "Faites le premier pas vers le don d'organes",
    description:
      "Informez-vous facilement sur le don d'organes et franchissez sereinement les étapes du consentement avec notre application.",
  },
];

const OnboardingAnimation = styled(AnimatedView, {
  ":initial": {
    opacity: 0,
  },
  ":animate": {
    opacity: 1,
  },
  ":exit": {
    opacity: 0,
  },
  ":transition": {
    type: "spring",
    damping: 18,
    stiffness: 250,
    // @ts-ignore
    opacity: {
      type: "timing",
      duration: 600,
    },
  },
});

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < onboardingData.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const { image, title, description } = onboardingData[currentScreen];

  return (
    <Box flex={1} p="$0">
      <AnimatePresence>
        <OnboardingAnimation
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          flex={1}
          key={currentScreen}
        >
          <ImageBackground
            source={image}
            justifyContent="flex-end"
            flex={1}
            gap="$6"
            px="$6"
            py="$8"
          >
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
            >
              {description}
            </Text>
            <HStack alignItems="center" justifyContent="space-between">
              <Box display="flex" flexDirection="row" gap="$4">
                <BackIconButton
                  isDisabled={currentScreen === 0}
                  onPress={handleBack}
                />
                <NextIconButton
                  isDisabled={currentScreen === onboardingData.length - 1}
                  onPress={handleNext}
                />
              </Box>
              <SolidSmallWhite
                message="Me connecter"
                isDisabled={false}
                onPress={() => console.log("Hello")}
              />
            </HStack>
          </ImageBackground>
        </OnboardingAnimation>
      </AnimatePresence>
    </Box>
  );
}
