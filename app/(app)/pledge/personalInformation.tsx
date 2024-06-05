import { Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import TextInput from "@/components/uikit/Input/TextInput";
import DateInput from "@/components/uikit/Input/DateInput";
import { RadioButton } from "@/components/uikit/Input/dumb/RadioButton";
import RadioButtonGroup from "@/components/uikit/Input/RadioButton";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";
import { User } from "@/components/icons/user";
import { Call } from "@/components/icons/call";
import { Mail } from "@/components/icons/mail";
import { Location } from "@/components/icons/location";
import { personalInformationValidationSchema } from "@/utils/validationSchemas";
import { Formik } from "formik";
import { useState } from "react";
import { router } from "expo-router";
import { Routes } from "@/constants/route";

const defaultValues = {
  fullName: "",
  personalNumberIdentification: "",
  phoneNumber: "",
  email: "",
  address: "",
  gender: "",
};

export default function PersonalInformation() {
  const [isSumitting, setIsSumitting] = useState(false);
  const onSubmit = () => {
    setIsSumitting(true);
    setTimeout(() => {
      router.replace(Routes.DONATION_INFORMATION);
    }, 3000); // 3000 millisecondes = 3 secondes
  };

  return (
    <Box flex={1} bgColor="$white">
      <SecondaryPageHeader pageTitle="Informations personnelles" />
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        bgColor="$textLight0"
        px={18}
      >
        <Box gap={44} py={50}>
          <Text fontSize={18} color="$black">
            Nous collectons ici les renseignements essentiels pour vous
            identifier.
          </Text>
          <Formik
            initialValues={defaultValues}
            onSubmit={onSubmit}
            validationSchema={personalInformationValidationSchema}
          >
            {({ handleSubmit }) => (
              <>
                <Box>
                  <Box
                    py="$8"
                    px="$4"
                    gap="$4"
                    borderBottomWidth={1}
                    borderColor="$primaryLight"
                  >
                    <Text fontSize={15}>
                      Veuillez indiquer votre nom complet, tel qu'il figure sur
                      votre pièce d'identité.
                    </Text>
                    <TextInput
                      placeholder="Nom complet"
                      icon={User}
                      name="fullName"
                    />
                  </Box>
                  <Box
                    p={0}
                    flexDirection="row"
                    alignItems="flex-end"
                    justifyContent="center"
                    gap={16}
                    px="$6"
                    borderBottomWidth={1}
                    borderColor="$primaryLight"
                  >
                    <Box py="$8" gap="$4" w="50%">
                      <Text fontSize={15}>
                        Indiquez votre Numéro d'Identification Personnel
                      </Text>
                      <TextInput
                        placeholder="NPI"
                        icon={User}
                        name="personalNumberIdentification"
                      />
                    </Box>
                    <Box w="50%" py="$8" gap="$4">
                      <Text fontSize={15}>
                        Veuillez indiquer votre date de naissance au format
                        JJ/MM/AAAA.
                      </Text>
                      <DateInput placeholder="JJ/MM/AAAA" name="birthDate" />
                    </Box>
                  </Box>
                  <Box
                    py="$8"
                    px="$4"
                    gap="$4"
                    borderBottomWidth={1}
                    borderColor="$primaryLight"
                  >
                    <Text fontSize={15}>
                      Veuillez indiquer votre numéro de téléphone principal.
                    </Text>
                    <TextInput
                      placeholder="Numéro de téléphone"
                      icon={Call}
                      name="phoneNumber"
                    />
                  </Box>
                  <Box
                    py="$8"
                    px="$4"
                    gap="$4"
                    borderBottomWidth={1}
                    borderColor="$primaryLight"
                  >
                    <Text fontSize={15}>
                      Veuillez indiquer votre adresse email valide.
                    </Text>
                    <TextInput placeholder="Email" icon={Mail} name="email" />
                  </Box>
                  <Box
                    py="$8"
                    px="$4"
                    gap="$4"
                    borderBottomWidth={1}
                    borderColor="$primaryLight"
                  >
                    <Text fontSize={15}>Veuillez indiquer votre sexe</Text>
                    <RadioButtonGroup name="gender" flexDirection="row">
                      <RadioButton
                        label="Femme"
                        value="female"
                        isDisabled={false}
                      />

                      <RadioButton
                        label="Homme"
                        value="male"
                        isDisabled={false}
                      />
                    </RadioButtonGroup>
                  </Box>
                  <Box
                    py="$8"
                    px="$4"
                    gap="$4"
                    borderBottomWidth={1}
                    borderColor="$primaryLight"
                  >
                    <Text fontSize={15}>Veuillez indiquer votre adresse.</Text>
                    <TextInput
                      placeholder="Adresse"
                      icon={Location}
                      name="address"
                    />
                  </Box>
                </Box>
                <SolidLong
                  message="Valider cette étape"
                  isDisabled={false}
                  isLoading={isSumitting}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </Box>
      </ScrollView>
    </Box>
  );
}
