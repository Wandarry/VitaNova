import { Mail } from "../icons/mail";
import { LinkButton } from "@/components/uikit/Buttons/LinkButton";
import TextInput from "../uikit/Input/TextInput";
import PasswordInput from "../uikit/Input/PasswordInput";
import Checkbox from "../uikit/Input/Checkbox";
import { SolidLong } from "../uikit/Buttons/SolidLong";
import { ScrollView, Box, Text } from "@gluestack-ui/themed";
import { registerValidationSchemaThirdForm } from "@/utils/validationSchemas";
import { Formik } from "formik";
import { RegisterFormsValue } from "@/app/(account)/register";
import { useState } from "react";
import { router } from "expo-router";
import { Routes } from "@/constants/route";

type RegisterSteps3Props = {
  onSubmit: (values: RegisterFormsValue) => void;
};

const initialCredential = {
  email: "",
  password: "",
  confirmPassword: "",
  checkbox: false,
};

export const RegisterStep3 = ({ onSubmit }: RegisterSteps3Props) => {
  const goToLoginPage = () => {
    router.navigate(Routes.LOGIN);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
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
          validationSchema={registerValidationSchemaThirdForm}
        >
          {({ handleSubmit, isSubmitting }) => (
            <>
              <Box gap="$6">
                <TextInput placeholder="Email" icon={Mail} name="email" />
                <PasswordInput placeholder="Mot de passe" name="password" />
                <PasswordInput
                  placeholder="Confirmer votre mot de passe"
                  name="confirmPassword"
                />
              </Box>
              <Box gap="$4" marginTop={16}>
                <Checkbox
                  name="checkbox"
                  label="J'accepte les Termes et Conditions d'utilisation"
                  value="TermesEtConditions"
                  isDisabled={false}
                />
                <SolidLong
                  message="Créer mon compte"
                  isDisabled={false}
                  isLoading={isSubmitting}
                  onPress={handleSubmit}
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
