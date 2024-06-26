import { Box, HStack, Text } from "@gluestack-ui/themed";
import { BackIconButton } from "./uikit/Buttons/BackIconButton";
import { router } from "expo-router";

type SecondaryPageHeaderProps = {
  pageTitle: string;
};

export const SecondaryPageHeader = ({
  pageTitle,
}: SecondaryPageHeaderProps) => {
  const goToPreviousPage = () => {
    router.back();
  };
  return (
    <Box
      justifyContent="flex-end"
      px={18}
      paddingBottom="$2"
      bgColor="$white"
      h={110}
    >
      <HStack position="static" alignItems="center" gap={16} w="100%">
        <BackIconButton isDisabled={false} onPress={goToPreviousPage} />
        <Text fontSize={21} color="$primaryNormal" fontFamily="Livvic_600">
          {pageTitle}
        </Text>
      </HStack>
    </Box>
  );
};
