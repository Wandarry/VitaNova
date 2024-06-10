import { UserCard } from "@/components/UserCard";
import { UserProfileLinks } from "@/components/UserProfileLinks";
import { Box, ScrollView, Text } from "@gluestack-ui/themed";

export default function UserProfile() {
  return (
    <Box flex={1} bgColor="$white">
      <Box
        justifyContent="flex-end"
        px={18}
        paddingBottom="$2"
        bgColor="$white"
        h={110}
      >
        <Text fontSize={30} color="$primaryNormal" fontFamily="Livvic_600">
          Profil
        </Text>
      </Box>
      <ScrollView flex={1} px={18}>
        <Box gap={32}>
          <UserCard />
          <UserProfileLinks />
        </Box>
      </ScrollView>
    </Box>
  );
}
