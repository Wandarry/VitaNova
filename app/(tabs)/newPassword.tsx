import { Box, Text } from "@gluestack-ui/themed";
import { Mail } from "@/components/icons/mail";
import { PasswordInput } from "@/components/uikit/Input/dumb/PasswordInput";
import { BackIconButton } from "@/components/uikit/Buttons/BackIconButton";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";

export default function NewPassword() {
  return (
    <Box flex={1} justifyContent="center" bgColor="$white" gap={32} px={17}>
      <Box position="absolute" top={50} left={17}>
        <BackIconButton isDisabled={false} />
      </Box>
      <Box gap={14} px={8}>
        <Text w={"75%"} color="$black" fontWeight="$semibold" fontSize={25}>
          Renouvelez votre mot de passe
        </Text>
        <Text color="$black" fontSize="$lg">
          Entrez votre nouveau mot de passe. Vous l'utiliserez désormais pour
          vous connecter.
        </Text>
      </Box>
      <PasswordInput placeholder="Mot de passe" />
      <PasswordInput placeholder="Confirmer le mot de passe" />
      <SolidLong
        message="Renouveler mon mot de passe"
        isLoading={false}
        isDisabled={false}
        onPress={() => console.log("Login")}
      />
    </Box>
  );
}
