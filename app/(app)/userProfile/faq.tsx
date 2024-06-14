import { FaqAccordion } from "@/components/FaqAccordion";
import { SecondaryPageHeader } from "@/components/secondaryPageHeader";
import { Box, ScrollView, Text } from "@gluestack-ui/themed";

export default function Faq() {
  return (
    <Box flex={1} bgColor="$white">
      <SecondaryPageHeader pageTitle="FAQs" />
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        bgColor="$textLight0"
      >
        <Box px={18} my={20}>
          <Text
            color="$black"
            fontFamily="Livvic_400"
            marginBottom={32}
            fontSize={18}
          >
            Explorez ici les questions fréquemment posées concernant le don
            d'organes et leurs honnêtes réponses
          </Text>
          <FaqAccordion />
        </Box>
      </ScrollView>
    </Box>
  );
}
