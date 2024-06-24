import { HStack, Box, Icon, Text, Pressable } from "@gluestack-ui/themed";
import { AccountCircle } from "./icons/accountCircle";
import { router } from "expo-router";
import { Routes } from "@/constants/route";
import { Faq } from "./icons/faq";
import { Approval } from "./icons/approval";

export const UserProfileLinks = () => {
  const goToPledgeSummary = () => {
    router.navigate(Routes.PLEDGE_CATEGORIES_SUMMARY);
  };

  const goToFaq = () => {
    router.navigate(Routes.FAQ);
  };

  const goToLogOut = () => {
    router.navigate(Routes.LOG_OUT);
  };

  return (
    <Box gap={24}>
      <Pressable onPress={goToLogOut}>
        <HStack gap={16} alignItems="center">
          <Box
            justifyContent="center"
            alignItems="center"
            bgColor="$primaryLight"
            p={12}
            borderRadius="$full"
          >
            <Icon as={AccountCircle} color="$black" h={20} w={20} />
          </Box>
          <Box flexShrink={1}>
            <Text fontFamily="Livvic_600">Mon compte</Text>
            <Text fontSize={13}>Modifiez vos informations personnelles</Text>
          </Box>
        </HStack>
      </Pressable>

      <Pressable onPress={goToFaq}>
        <HStack gap={16} alignItems="center">
          <Box
            justifyContent="center"
            alignItems="center"
            bgColor="$primaryLight"
            p={12}
            borderRadius="$full"
          >
            <Icon as={Faq} color="$black" h={20} w={20} />
          </Box>
          <Box flexShrink={1}>
            <Text fontFamily="Livvic_600">FAQs</Text>
            <Text fontSize={13}>
              Les questions fréquemments posées en un endroit
            </Text>
          </Box>
        </HStack>
      </Pressable>

      <Pressable onPress={goToPledgeSummary}>
        <HStack gap={16} alignItems="center">
          <Box
            justifyContent="center"
            alignItems="center"
            bgColor="$primaryLight"
            p={12}
            borderRadius="$full"
          >
            <Icon as={Approval} color="$black" h={20} w={20} />
          </Box>
          <Box flexShrink={1}>
            <Text fontFamily="Livvic_600">Engagement</Text>
            <Text fontSize={13}>
              Entamez l'enregistrement de votre consentement
            </Text>
          </Box>
        </HStack>
      </Pressable>
    </Box>
  );
};
