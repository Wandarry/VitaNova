import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import { Box, ScrollView, Text } from "@gluestack-ui/themed";
import RadioButtonGroup from "@/components/uikit/Input/RadioButton";
import { RadioButton } from "@/components/uikit/Input/dumb/RadioButton";
import { SolidLong } from "@/components/uikit/Buttons/SolidLong";
import { Formik } from "formik";
import { useState } from "react";

export default function RevokePledging() {
  const [isSumitting, setIsSumitting] = useState(false);

  const onSubmit = () => {
    setIsSumitting(true);
  };

  return (
    <Box flex={1} bgColor="$white">
      <SecondaryPageHeader pageTitle="Révoquer mon engagement" />
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        bgColor="$textLight0"
        px={18}
      >
        <Box gap={44} py={50}>
          <Text fontSize={18} color="$black">
            Tout va bien. Nous comprenons l'ampleur de cette décision.
            Cependant, nous souhaitons savoir pourquoi vous souhaitez révoquer
            votre engagement.
          </Text>
          <Formik initialValues={{ reasonOfRevoking: "" }} onSubmit={onSubmit}>
            {({ handleSubmit, values }) => (
              <Box gap={48}>
                <Box paddingLeft={22}>
                  <RadioButtonGroup
                    name="reasonOfRevoking"
                    flexDirection="column"
                    gap={22}
                  >
                    <RadioButton
                      label="J'y réfléchis à nouveau"
                      value="think again"
                      isDisabled={false}
                    />
                    <RadioButton
                      label="Je voulais juste essayer"
                      value="just trying"
                      isDisabled={false}
                    />
                    <RadioButton
                      label="Ma famille n'accepte pas ma décision"
                      value="family issue"
                      isDisabled={false}
                    />
                    <RadioButton
                      label="Je veux garder la raison pour moi"
                      value="none"
                      isDisabled={false}
                    />
                  </RadioButtonGroup>
                </Box>
                <Text fontSize={18} fontFamily="Livvic_600" color="$black">
                  Dans le cas où vous changez d'avis, reprenez juste le
                  processus d'engagement.
                </Text>
                <SolidLong
                  message="Révoquer mon engagement"
                  isDisabled={false}
                  isLoading={isSumitting}
                  onPress={handleSubmit}
                />
              </Box>
            )}
          </Formik>
        </Box>
      </ScrollView>
    </Box>
  );
}
