import { Box, Text, ScrollView } from "@gluestack-ui/themed";
import { Mail } from "@/components/icons/mail";
import { TextInput } from "@/components/uikit/Input/dumb/TextInput";
import { PasswordInput } from "@/components/uikit/Input/dumb/PasswordInput";
import { LinkButton } from "@/components/uikit/Buttons/LinkButton";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";
import { GoogleButton } from "@/components/uikit/Buttons/GoogleButton";

export default function Login() {
  return (
    <Box flex={1}>
      <Box
        h={"30%"}
        px={25}
        bgColor="$primaryLight"
        gap="$3.5"
        paddingBottom="$2"
        justifyContent="flex-end"
      >
        <Text w={"75%"} color="$black" fontSize={25} fontWeight="$semibold">
          Content de vous revoir sur{" "}
          <Text color="$primaryNormal" fontSize={25} fontWeight="$semibold">
            VitaNova
          </Text>
        </Text>
        <Text color="$black" fontSize="$lg">
          Votre compte vous attend... des vies aussi !
        </Text>
      </Box>
      <ScrollView flex={1} bgColor="$white">
        <Box px={17} paddingTop={"8%"} gap={30}>
          <Box gap="$6">
            <TextInput placeholder="Email" icon={Mail} />
            <PasswordInput />
            <LinkButton
              title="Mot de passe oublié ?"
              withIcon={false}
              isDisabled={false}
              onpress={() => console.log("Forgot password")}
            />
          </Box>
          <Box gap={16} alignItems="center" w={"100%"}>
            <SolidLong
              message="Me connecter"
              isLoading={false}
              isDisabled={false}
              onPress={() => console.log("Login")}
            />
            <Text fontWeight="$semibold">Ou</Text>
            <GoogleButton message="Continuer avec Google" isDisabled={false} />
          </Box>
          <Box
            marginTop={16}
            w={"100%"}
            display="flex"
            flexDirection="row"
            alignItems="center"
            flexWrap="wrap"
          >
            <Text fontSize="$md" fontWeight="$semibold" color="$primaryNormal">
              Vous n'avez pas encore de compte ?{" "}
            </Text>
            <LinkButton
              title="Créez-en ici !"
              withIcon={false}
              isDisabled={false}
              onpress={() => console.log("Register")}
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
