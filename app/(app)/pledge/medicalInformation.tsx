import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import { medicalInformationValidationSchema } from "@/utils/validationSchemas";
import { Box, HStack, Text, ScrollView } from "@gluestack-ui/themed";
import { BloodTypeRadioButton } from "@/components/BloodTypeRadioButton";
import TextareaInput from "@/components/uikit/Input/TextareaInput";
import { PopOverForMap } from "@/components/PopOverForMap";
import { Formik } from "formik";
import { useState } from "react";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";
import { InfoPopOver } from "@/components/InfoPopOver";
import { router } from "expo-router";
import { Routes } from "@/constants/route";
import { showToast } from "@/helpers/showToast";
import { LinkButton } from "@/components/uikit/Buttons/LinkButton";
import { BloodGroup } from "@/types/collections/pledge";
import { PledgeMedicalInfo } from "@/types/collections/pledge";
import { useAuthContext } from "@/hooks/useAuthContext";
import pledgeCollectionInstance from "@/firebase/collections/PledgeCollection";

type MedicalInformationFormValues = {
  bloodGroup: BloodGroup;
  medicalHistory: string;
};

const defaultValues = {
  bloodGroup: "" as BloodGroup,
  medicalHistory: "",
} as MedicalInformationFormValues;

export default function MedicalInformation() {
  const contextValue = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async ({ ...rest }: MedicalInformationFormValues) => {
    if (contextValue.user?.email) {
      const document: PledgeMedicalInfo = { ...rest };
      await pledgeCollectionInstance.saveMedicalInfo(
        document,
        contextValue.user?.email,
      );
      showToast({
        title: "Les vies sauvées vous remercient",
        description: "Votre engagement est enregistré avec succès",
        type: "success",
      });
      router.replace(Routes.PLEDGE_CATEGORIES_SUMMARY);
    } else {
      showToast({
        title: "Oups...réessayez",
        description: "Une erreur s'est produite",
        type: "error",
      });
    }
  };

  const handleMapPopUp = () => {
    setIsOpen(!isOpen);
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
            initialValues={defaultValues}
            onSubmit={onSubmit}
            validationSchema={medicalInformationValidationSchema}
          >
            {({ handleSubmit, isSubmitting }) => (
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
                        name="bloodGroup"
                        value="A+"
                      />
                      <BloodTypeRadioButton
                        label="B+"
                        name="bloodGroup"
                        value="B+"
                      />
                      <BloodTypeRadioButton
                        label="AB+"
                        name="bloodGroup"
                        value="AB+"
                      />
                      <BloodTypeRadioButton
                        label="O+"
                        name="bloodGroup"
                        value="O+"
                      />
                    </HStack>
                    <HStack justifyContent="space-between">
                      <BloodTypeRadioButton
                        label="A-"
                        name="bloodGroup"
                        value="A-"
                      />
                      <BloodTypeRadioButton
                        label="B-"
                        name="bloodGroup"
                        value="B-"
                      />
                      <BloodTypeRadioButton
                        label="AB-"
                        name="bloodGroup"
                        value="AB-"
                      />
                      <BloodTypeRadioButton
                        label="O-"
                        name="bloodGroup"
                        value="O-"
                      />
                    </HStack>
                  </Box>
                  <LinkButton
                    title="Vous ne connaissez pas votre groupe sanguin ?"
                    isDisabled={false}
                    withIcon={false}
                    onpress={handleMapPopUp}
                  />
                  {isOpen ? (
                    <PopOverForMap
                      title="Vous pouvez prendre rendez-vous dans un hôpital proche de vous pour une analyse. Vos résultats vous seront envoyés sur l'appli !"
                      onpress={handleMapPopUp}
                    />
                  ) : null}
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
                    name="medicalHistory"
                    placeholder="Écrivez..."
                    isDisabled={false}
                    isRequired={true}
                  />
                </Box>
                <SolidLong
                  message="Valider cette étape"
                  isDisabled={false}
                  isLoading={isSubmitting}
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
