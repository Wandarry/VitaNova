import { Box, Text } from "@gluestack-ui/themed";
import { Mail } from "@/components/icons/mail";
import { TextInput } from "@/components/uikit/Input/dumb/TextInput";
import { BackIconButton } from "@/components/uikit/Buttons/BackIconButton";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";
import { router } from "expo-router";
import { Routes } from "@/constants/route";

export default function ForgotPassword() {
  const goToLoginPage = () => {
    router.navigate(Routes.LOGIN);
  };

  return (
    <Box flex={1} justifyContent="center" bgColor="$white" gap={48} px={17}>
      <Box position="absolute" top={50} left={17}>
        <BackIconButton isDisabled={false} onPress={goToLoginPage} />
      </Box>
      <Box gap={14} px={8}>
        <Text w="75%" color="$black" fontFamily="Livvic_600" fontSize={25}>
          Mot de passe oublié ?
        </Text>
        <Text color="$black" fontSize="$lg">
          Entrez votre adresse mail, nous vous y enverrons un code.
        </Text>
      </Box>
      <TextInput placeholder="Email" icon={Mail} />
      <SolidLong
        message="M'envoyer le code"
        isLoading={false}
        isDisabled={false}
        onPress={() => console.log("Send reset password request")}
      />
    </Box>
  );
}
