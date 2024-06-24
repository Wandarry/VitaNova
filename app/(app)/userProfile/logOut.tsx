import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Box, Button, ButtonText } from "@gluestack-ui/themed";

export default function LogOut() {
  const { logOut } = useAuthContext();

  return (
    <Box flex={1} alignItems="center" w="100%">
      <Box w="100%">
        <SecondaryPageHeader pageTitle="Log out" />
      </Box>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Button bgColor="$red" onPress={logOut} $active-bg="$red_300">
          <ButtonText>Me déconnecter</ButtonText>
        </Button>
      </Box>
    </Box>
  );
}
