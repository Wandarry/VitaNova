import { Box, HStack, Icon, Text } from "@gluestack-ui/themed";
import { Search } from "@/components/icons/search";
import { NewsTopTab } from "@/components/NewsTopTab";

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
          <Icon as={Search} h={28} w={28} color="$primaryNormal" />
        </HStack>
      </Box>
      <NewsTopTab />
    </Box>
  );
}
