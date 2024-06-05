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

  return (
    <HStack w={"100%"} justifyContent="space-between">
      <Box gap="$2" alignItems="center">
        <FeatureButton
          isDisabled={false}
          icon={Approval}
          onPress={gotToPledgeOnboarding}
        />
        <Text color="$primaryNormal" fontSize={15} fontWeight="$semibold">
          M'engager
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={Chat} />
        <Text color="$primaryNormal" fontSize={15} fontWeight="$semibold">
          Chat
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={Faq} />
        <Text color="$primaryNormal" fontSize={15} fontWeight="$semibold">
          FAQs
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={News} />
        <Text color="$primaryNormal" fontSize={15} fontWeight="$semibold">
          Actus
        </Text>
      </Box>
    </HStack>
  );
}
