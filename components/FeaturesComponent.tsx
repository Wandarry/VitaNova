import { Box, HStack, Text } from "@gluestack-ui/themed";
import { FeatureButton } from "./uikit/Buttons/FeatureButton";
import { Approval } from "./icons/approval";
import { Chat } from "./icons/chat";
import { Faq } from "./icons/faq";
import { News } from "./icons/news";
import { router } from "expo-router";
import { Routes } from "@/constants/route";

export function FeaturesComponent() {
  const gotToPledgeOnboarding = () => {
    router.navigate(Routes.PLEDGE_ONBOARDING);
  };

  const gotToNews = () => {
    router.navigate(Routes.NEWS);
  };

  return (
    <HStack w="100%" justifyContent="space-between">
      <Box gap="$2" alignItems="center">
        <FeatureButton
          isDisabled={false}
          icon={Approval}
          onPress={gotToPledgeOnboarding}
        />
        <Text color="$primaryNormal" fontSize={15} fontFamily="Livvic_600">
          M'engager
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={Chat} />
        <Text color="$primaryNormal" fontSize={15} fontFamily="Livvic_600">
          Chat
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={Faq} />
        <Text color="$primaryNormal" fontSize={15} fontFamily="Livvic_600">
          FAQs
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={News} onPress={gotToNews} />
        <Text color="$primaryNormal" fontSize={15} fontFamily="Livvic_600">
          Actus
        </Text>
      </Box>
    </HStack>
  );
}
