import { StepIndicator } from "@/components/StepIndicator";
import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import { LinkButton } from "@/components/uikit/Buttons/LinkButton";
import { Routes } from "@/constants/route";
import { Box, ScrollView, Text } from "@gluestack-ui/themed";
import { router } from "expo-router";

export default function PledgeCategoriesSummary() {
  const goToRevokePledgePage = () => {
    router.navigate(Routes.REVOKE_PLEDGING);
  };

  return (
    <Box flex={1} bgColor="$white">
      <Box
        h={110}
        justifyContent="flex-end"
        paddingBottom="$2"
        bgColor="$white"
      >
        <SecondaryPageHeader pageTitle="Engagement" />
        {/* <Text
          color="$primaryNormal"
          fontFamily="Livvic_600"
          fontSize={30}
        >
            Engagement
        </Text> */}
      </Box>
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        bgColor="$textLight0"
        px={18}
      >
        <Box gap={44} paddingBottom={50} paddingTop={24}>
          <Text fontSize={18} color="$black">
            Soyez rassuré(e), toutes les informations que vous nous confiez dans
            le cadre de votre inscription en tant que donneur sont strictement
            confidentielles et sécurisées. Votre engagement est précieux, et
            nous respectons votre vie privée.
          </Text>
          <StepIndicator />
          <LinkButton
            title="Révoquer mon engagement"
            isDisabled={false}
            withIcon={false}
            onpress={goToRevokePledgePage}
          />
        </Box>
      </ScrollView>
    </Box>
  );
}
