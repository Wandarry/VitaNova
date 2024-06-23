import { DonorCardItem } from "@/components/DonorCardItem";
import { OnShare } from "@/components/OnShare";
import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import { LinkButton } from "@/components/uikit/Buttons/LinkButton";
import { Routes } from "@/constants/route";
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  DownloadIcon,
  HStack,
  ScrollView,
  Text,
} from "@gluestack-ui/themed";
import { router } from "expo-router";

export default function DonorCard() {
  return (
    <Box flex={1} bgColor="$white">
      <SecondaryPageHeader pageTitle="" />
      <ScrollView flex={1} showsVerticalScrollIndicator={false} px={18}>
        <Box py={24} alignItems="center" justifyContent="center" gap={24}>
          <Text fontFamily="Mansalva_400" fontSize={30} color="$primaryNormal">
            Félicitations !!
          </Text>
          <Text fontFamily="Livvic_400" fontSize={18} textAlign="center">
            Merci d'avoir choisi de sauver des vies. Vous avez pris une décision
            importante. Parlez-en maintenant à vos proches.
          </Text>
          <DonorCardItem />
          <HStack justifyContent="space-between" w="100%" mt={24}>
            <LinkButton
              title="Fermer"
              isDisabled={false}
              withIcon={false}
              onpress={() => router.replace(Routes.PLEDGE_CATEGORIES_SUMMARY)}
            />
            <Button
              isFocusVisible={false}
              bgColor="$primaryNormal"
              borderRadius={18}
              h={56}
              gap={12}
              onPress={OnShare}
            >
              <ButtonText fontFamily="Livvic_600" fontSize={18} color="$white">
                Partager
              </ButtonText>
              <ButtonIcon as={DownloadIcon} />
            </Button>
          </HStack>
        </Box>
      </ScrollView>
    </Box>
  );
}
