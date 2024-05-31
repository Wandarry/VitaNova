import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import { medicalInformationValidationSchema } from "@/utils/validationSchemas";
import { Box, HStack, Text, ScrollView } from "@gluestack-ui/themed";
import { BloodTypeRadioButton } from "@/components/BloodTypeRadioButton";
import TextareaInput from "@/components/uikit/Input/TextareaInput";
import { PopOverForMap } from "@/components/PopOverForMap";
import { LinkButton } from "@/components/uikit/Buttons/LinkButton";
import { Formik } from "formik";
import { useState } from "react";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";
import { InfoPopOver } from "@/components/InfoPopOver";

export default function MedicalInformation() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = () => {
    setIsLoading(true);
  };

  return (
    <Box flex={1} bgColor="$white">
      <SecondaryPageHeader pageTitle="Informations médicales" />
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        bgColor="$textLight0"
        px={18}
      >
        <Box gap={44} py={50}>
          <HStack justifyContent="space-between" alignItems="flex-start">
            <Text fontSize={18} color="$black" w="87%">
              Cette section nous permet de recueillir votre historique médical
              afin d'évaluer son éligibilité.
            </Text>
            <InfoPopOver
              title="Bon à savoir !"
              message="Les informations médicales sont essentielles pour évaluer la compatibilité et l'état de santé des organes, garantissant ainsi que le don soit sécurisé et bénéfique pour les receveurs."
              onpress={() => console.log("Beat me")}
            />
          </HStack>
          <Formik
            initialValues={{ bloodType: "", medicalInformation: "" }}
            onSubmit={onSubmit}
            validationSchema={medicalInformationValidationSchema}
          >
            {({ handleSubmit }) => (
              <>
                <Box gap={26}>
                  <Box
                    gap={22}
                    px="$4"
                    py="$8"
                    borderBottomWidth={1}
                    borderColor="$primaryLight"
                  >
                    <Text fontSize={15}>
                      Veuillez renseigner votre groupe sanguin{" "}
                    </Text>
                    <HStack justifyContent="space-between">
                      <BloodTypeRadioButton
                        label="A+"
                        name="bloodType"
                        value="A+"
                      />
                      <BloodTypeRadioButton
                        label="B+"
                        name="bloodType"
                        value="B+"
                      />
                      <BloodTypeRadioButton
                        label="AB+"
                        name="bloodType"
                        value="AB+"
                      />
                      <BloodTypeRadioButton
                        label="O+"
                        name="bloodType"
                        value="O+"
                      />
                    </HStack>
                    <HStack justifyContent="space-between">
                      <BloodTypeRadioButton
                        label="A-"
                        name="bloodType"
                        value="A-"
                      />
                      <BloodTypeRadioButton
                        label="B-"
                        name="bloodType"
                        value="B-"
                      />
                      <BloodTypeRadioButton
                        label="AB-"
                        name="bloodType"
                        value="AB-"
                      />
                      <BloodTypeRadioButton
                        label="O-"
                        name="bloodType"
                        value="O-"
                      />
                    </HStack>
                  </Box>
                  <PopOverForMap title="Vous pouvez prendre rendez-vous dans un hôpital proche de vous pour une analyse. Vos résultats vous seront envoyés sur l'appli !" />
                </Box>
                <Box
                  gap={22}
                  px="$4"
                  py="$8"
                  borderBottomWidth={1}
                  borderColor="$primaryLight"
                >
                  <Text>
                    Décrivez votre historique médicale (antécédents médicaux,
                    maladies chroniques, interventions chirurgicales et les
                    allergies )
                  </Text>
                  <TextareaInput
                    name="medicalInformation"
                    placeholder="Écrivez..."
                    isDisabled={false}
                    isRequired={true}
                  />
                </Box>
                <SolidLong
                  message="Valider cette étape"
                  isDisabled={false}
                  isLoading={isLoading}
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
