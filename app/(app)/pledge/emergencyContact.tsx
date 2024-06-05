import { Box, ScrollView, Text, HStack } from "@gluestack-ui/themed";
import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import { Formik } from "formik";
import { emergencyContactValidationSchema } from "@/utils/validationSchemas";
import TextInput from "@/components/uikit/Input/TextInput";
import { useState } from "react";
import { User } from "@/components/icons/user";
import { Call } from "@/components/icons/call";
import { Mail } from "@/components/icons/mail";
import { Location } from "@/components/icons/location";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";
import { InfoPopOver } from "@/components/InfoPopOver";
import { router } from "expo-router";
import { Routes } from "@/constants/route";

const defaultValues = {
  emergencyContactName: "",
  phoneNumber: "",
  address: "",
};

export default function EmergencyContact() {
  const [isSumitting, setIsSumitting] = useState(false);
  const onSubmit = () => {
    setIsSumitting(true);
    setTimeout(() => {
      router.replace(Routes.MEDICAL_INFORMATION);
    }, 3000); // 3000 millisecondes = 3 secondes
  };

  return (
    <Box flex={1} bgColor="$white">
      <SecondaryPageHeader pageTitle="Contact d'urgence" />
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        bgColor="$textLight0"
        px={18}
      >
        <Box gap={44} py={50}>
          <HStack justifyContent="space-between" alignItems="flex-start">
            <Text fontSize={18} color="$black" w="87%">
              Cette étape vous permet d'inscrire les coordonnées d'un proche à
              contacter en cas urgence pour des informations ou décisions
              concernant le don d'organes.
            </Text>
            <InfoPopOver
              title="Bon à savoir !"
              message="Un contact d'urgence est nécessaire pour informer rapidement vos proches de votre décision de don d'organes et faciliter la coordination avec les autorités médicales après votre décès."
              onpress={() => console.log("Beat me")}
            />
          </HStack>
          <Formik
            initialValues={defaultValues}
            onSubmit={onSubmit}
            validationSchema={emergencyContactValidationSchema}
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
                      Veuillez indiquer le nom de votre proche
                    </Text>
                    <TextInput
                      placeholder="Nom"
                      icon={User}
                      name="emergencyContactName"
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
                      Veuillez indiquer le numéro de téléphone de votre proche
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
                      Veuillez indiquer l'adresse de votre proche
                    </Text>
                    <TextInput
                      placeholder="Adresse"
                      icon={Location}
                      name="address"
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
                      Veuillez indiquer l'adresse email valide de votre proche
                      (facultatif)
                    </Text>
                    <TextInput placeholder="Email" icon={Mail} name="email" />
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
