import { Box, HStack, Text } from "@gluestack-ui/themed";
import { NewsTopTab } from "@/components/NewsTopTab";
import { BottomSheet } from "@/components/BottomSheet";

export default function News() {
  return (
    <Box flex={1} bgColor="$white">
      <Box
        h={110}
        justifyContent="flex-end"
        paddingBottom="$2"
        bgColor="$white"
      >
        <HStack justifyContent="space-between" alignItems="center" px={18}>
          <Text color="$primaryNormal" fontFamily="Livvic_600" fontSize={30}>
            Actus
          </Text>
          <BottomSheet />
        </HStack>
      </Box>
      <NewsTopTab />
    </Box>
  );
}
