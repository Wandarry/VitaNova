import { Box, HStack, Icon, ScrollView, Text } from "@gluestack-ui/themed";
import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import { Info } from "@/components/icons/info";
import { InfoPopOver } from "@/components/InfoPopOver";
import { DoNotTouchOrgan } from "@/components/uikit/doNotTouchOrgan";
import { RadioButton } from "@/components/uikit/Input/dumb/RadioButton";
import RadioButtonGroup from "@/components/uikit/Input/RadioButton";
import { Formik } from "formik";
import { useState } from "react";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";
import { router } from "expo-router";
import { Routes } from "@/constants/route";

const defaultValues = {
  transplantation: "",
  organs: "",
};

export default function DonationInformation() {
  const [isSumitting, setIsSumitting] = useState(false);
  const onSubmit = () => {
    setIsSumitting(true);
    setTimeout(() => {
      router.replace(Routes.EMERGENCY_CONTACT);
    }, 3000); // 3000 millisecondes = 3 secondes
  };

  return (
    <Box flex={1} bgColor="$white">
      <SecondaryPageHeader pageTitle="Informations sur le don" />
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        bgColor="$textLight0"
        px={18}
      >
        <Box gap={44} py={50}>
          <Text fontSize={18} color="$black">
            Ce volet vous permet de préciser les organes et/ou tissus que vous
            souhaitez donner et d'indiquer votre consentement pour d'éventuelles
            recherches.
          </Text>
          <Formik initialValues={defaultValues} onSubmit={onSubmit}>
            {({ handleSubmit, values }) => (
              <>
                <Box gap={26}>
                  <HStack
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text
                      fontSize={18}
                      fontFamily="Livvic_600"
                      w="85%"
                      color="$black"
                    >
                      J'accepte de contribuer à sauver des vies en devenant
                      donneur d'organes et de tissus pour :
                    </Text>
                    <InfoPopOver
                      title="Bon à savoir !"
                      message="Le don d'organes pour transplantation consiste à donner un ou plusieurs de ses organes après sa mort pour sauver la vie d'autres personnes en attente de greffe. Le don d'organes pour la recherche implique de donner ses organes ou tissus après sa mort pour aider à l'avancement de la science et à la découverte de nouveaux traitements médicaux."
                      onpress={() => console.log("Beat me")}
                    />
                  </HStack>
                  <Box px="$4">
                    <RadioButtonGroup
                      gap={22}
                      flexDirection="column"
                      name="transplantation"
                    >
                      <RadioButton
                        isDisabled={false}
                        value="Transplantation only"
                        label="Transplantation uniquement"
                      />
                      <RadioButton
                        isDisabled={false}
                        value="Transplantation or Research"
                        label="Transplantation / Recherche sur les organes et les tissus"
                      />
                    </RadioButtonGroup>
                  </Box>
                </Box>
                <Box gap={26}>
                  <HStack
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Text
                      fontSize={18}
                      fontFamily="Livvic_600"
                      w="85%"
                      color="$black"
                    >
                      Je souhaiterais donner :
                    </Text>
                    <InfoPopOver
                      title="Bon à savoir !"
                      message="Après la mort, plusieurs organes/tissus peuvent être donnés, y compris le cœur, les poumons, les reins, le foie, le pancréas, les cellules souches et les intestins, pour sauver et améliorer la vie de nombreuses personnes."
                      onpress={() => console.log("Beat me")}
                    />
                  </HStack>
                  <Box gap={22} px="$4">
                    <RadioButtonGroup
                      name="organs"
                      flexDirection="column"
                      gap={22}
                    >
                      <RadioButton
                        isDisabled={false}
                        value="All organs"
                        label="Tous les organes et tissus nécessaires"
                      />
                      <RadioButton
                        isDisabled={false}
                        value="Organs exception"
                        label="Tous les organes et tissus nécessaires, à l'exception de ceux indiqués ci-dessous"
                      />
                    </RadioButtonGroup>
                    <DoNotTouchOrgan
                      isDisabled={values.organs === "All organs"}
                    />
                  </Box>
                  <SolidLong
                    message="Valider cette étape"
                    isDisabled={false}
                    isLoading={isSumitting}
                    onPress={handleSubmit}
                  />
                </Box>
              </>
            )}
          </Formik>
        </Box>
      </ScrollView>
    </Box>
  );
}
