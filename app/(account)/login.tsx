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
import { router } from "expo-router";
import { Routes } from "@/constants/route";

const initialCredential = { email: "", password: "" };

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const goToRegisterPage = () => {
    router.navigate(Routes.REGISTER);
  };

  const goToForgotPassword = () => {
    router.navigate(Routes.FORGOT_PASSWORD);
  };

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
      router.replace(Routes.HOME);
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
        <Text w={"75%"} color="$black" fontSize={25} fontFamily="Livvic_500">
          Content de vous revoir sur{" "}
          <Text color="$primaryNormal" fontSize={25} fontFamily="Livvic_600">
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
              {({ handleSubmit, isValid }) => (
                <Box gap="$6" w={"100%"} p={0}>
                  <TextInput name="email" placeholder="Email" icon={Mail} />
                  <PasswordInput name="password" />
                  <LinkButton
                    title="Mot de passe oublié ?"
                    withIcon={false}
                    isDisabled={false}
                    onpress={goToForgotPassword}
                  />
                  <SolidLong
                    message="Me connecter"
                    isLoading={isLoading}
                    isDisabled={!isValid}
                    onPress={handleSubmit}
                  />
                </Box>
              )}
            </Formik>
          </Box>
          <Box gap={16} alignItems="center" w={"100%"}>
            <Text>Ou</Text>
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
            <Text fontSize="$md" fontFamily="Livvic_600" color="$primaryNormal">
              Vous n'avez pas encore de compte ?{" "}
            </Text>
            <LinkButton
              title="Créez-en ici !"
              withIcon={false}
              isDisabled={false}
              onpress={goToRegisterPage}
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Login;
