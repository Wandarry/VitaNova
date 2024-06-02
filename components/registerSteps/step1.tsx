import { User } from "@/components/icons/user";
import { GoogleButton } from "@/components/uikit/Buttons/GoogleButton";
import { LinkButton } from "@/components/uikit/Buttons/LinkButton";
import { SolidSmall } from "@/components/uikit/Buttons/SolidSmall";
import TextInput from "../uikit/Input/TextInput";
import { ScrollView, Box, Text, HStack } from "@gluestack-ui/themed";
import { registerValidationSchemaFirstForm } from "@/utils/validationSchemas";
import { RegisterFormsValue } from "@/app/(account)/register";
import { Formik } from "formik";
import { router } from "expo-router";
import { Routes } from "@/constants/route";

type RegisterStep1Props = {
  onSubmit: (values: RegisterFormsValue) => void;
};

const initialCredential = { firstNames: "", lastName: "" };

export const RegisterStep1 = ({ onSubmit }: RegisterStep1Props) => {
  const goToLoginPage = () => {
    router.navigate(Routes.LOGIN);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} bgColor="$white">
      <Box
        flex={1}
        px={17}
        paddingTop={"8%"}
        bgColor="$white"
        justifyContent="space-between"
      >
        <Formik
          initialValues={initialCredential}
          onSubmit={onSubmit}
          validationSchema={registerValidationSchemaFirstForm}
        >
          {({ handleSubmit, isValid }) => (
            <>
              <Box gap="$6">
                <TextInput
                  placeholder="Prénoms"
                  icon={User}
                  name="firstNames"
                />
                <TextInput placeholder="Nom" icon={User} name="lastName" />
              </Box>
              <Box gap="$4">
                <HStack justifyContent="flex-end" marginTop={16}>
                  <SolidSmall
                    message="Suivant"
                    isDisabled={!isValid}
                    onPress={handleSubmit}
                  />
                </HStack>
                <Box alignItems="center">
                  <Text fontWeight="$semibold" fontSize="$lg">
                    ou
                  </Text>
                </Box>
                <GoogleButton
                  message="Continuer avec Google"
                  isDisabled={false}
                />
              </Box>
            </>
          )}
        </Formik>
        <Box
          marginTop={32}
          marginBottom={32}
          w={"100%"}
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexWrap="wrap"
        >
          <Text fontSize="$md" fontFamily="Livvic_600" color="$primaryNormal">
            Vous avez déjà un compte ?{" "}
          </Text>
          <LinkButton
            title="Connectez-vous ici !"
            withIcon={false}
            isDisabled={false}
            onpress={goToLoginPage}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};
