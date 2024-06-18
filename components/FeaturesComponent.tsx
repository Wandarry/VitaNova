import { Box, HStack, Text } from "@gluestack-ui/themed";
import { FeatureButton } from "./uikit/Buttons/FeatureButton";
import { Approval } from "./icons/approval";
import { Chat } from "./icons/chat";
import { Faq } from "./icons/faq";
import { News } from "./icons/news";
import { router } from "expo-router";
import { Routes } from "@/constants/route";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function FeaturesComponent() {
  const goToPledgeProcess = async () => {
    try {
      const hasSeenOnboarding = await AsyncStorage.getItem(
        "hasSeenPledgeOnboarding",
      );

      if (hasSeenOnboarding) {
        router.navigate(Routes.PLEDGE_CATEGORIES_SUMMARY);
      } else {
        await AsyncStorage.setItem("hasSeenPledgeOnboarding", "true");
        router.navigate(Routes.PLEDGE_ONBOARDING);
      }
    } catch (error) {
      router.navigate(Routes.PLEDGE_ONBOARDING);
    }
  };
  const goToFaq = () => {
    router.navigate(Routes.FAQ);
  };

  const goToNews = () => {
    router.navigate(Routes.NEWS);
  };

  return (
    <HStack w="100%" justifyContent="space-between">
      <Box gap="$2" alignItems="center">
        <FeatureButton
          isDisabled={false}
          icon={Approval}
          onPress={goToPledgeProcess}
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
        <FeatureButton isDisabled={false} icon={Faq} onPress={goToFaq} />
        <Text color="$primaryNormal" fontSize={15} fontFamily="Livvic_600">
          FAQs
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={News} onPress={goToNews} />
        <Text color="$primaryNormal" fontSize={15} fontFamily="Livvic_600">
          Actus
        </Text>
      </Box>
    </HStack>
  );
}
