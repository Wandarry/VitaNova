import { useState } from "react";
import { Box, Text, ScrollView } from "@gluestack-ui/themed";
import { Mail } from "@/components/icons/mail";
import TextInput from "@/components/uikit/Input/TextInput";
import PasswordInput from "@/components/uikit/Input/PasswordInput";
import { LinkButton } from "@/components/uikit/Buttons/LinkButton";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";
import { GoogleButton } from "@/components/uikit/Buttons/GoogleButton";
import { Formik } from "formik";
import { loginValidationSchema } from "@/utils/validationSchemas";
import { signInWithEmail } from "@/firebase/helpers/signInWithEmail";

const initialCredential = { email: "", password: "" };

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      await signInWithEmail(email, password);
    } catch (error) {
      console.error("Login error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box flex={1}>
      <Box
        h={250}
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
      <ScrollView
        flex={1}
        bgColor="$white"
        showsVerticalScrollIndicator={false}
      >
        <Box px={17} paddingTop={"8%"} gap={30}>
          <Box gap="$6">
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={initialCredential}
              onSubmit={handleLogin}
            >
              {({ handleSubmit }) => (
                <Box gap="$6" w={"100%"} p={0}>
                  <TextInput name="email" placeholder="Email" icon={Mail} />
                  <PasswordInput name="password" />
                  <LinkButton
                    title="Mot de passe oublié ?"
                    withIcon={false}
                    isDisabled={false}
                    onpress={() => console.log("Forgot password")}
                  />
                  <SolidLong
                    message="Me connecter"
                    isLoading={isLoading}
                    isDisabled={false}
                    onPress={handleSubmit}
                  />
                </Box>
              )}
            </Formik>
          </Box>
          <Box gap={16} alignItems="center" w={"100%"}>
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
};
