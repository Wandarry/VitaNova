import { Box, HStack, Text } from "@gluestack-ui/themed";
import { FeatureButton } from "./uikit/Buttons/FeatureButton";
import { Approval } from "./icons/approval";
import { Chat } from "./icons/chat";
import { Faq } from "./icons/faq";
import { News } from "./icons/news";

export function FeaturesComponent() {
  return (
    <HStack w={"100%"} justifyContent="space-between">
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={Approval} />
        <Text color="$primaryNormal" fontSize={15} fontWeight="$semibold">
          M'engager
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={Chat} />
        <Text color="$primaryNormal" fontSize={15} fontWeight="$semibold">
          Chat
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={Faq} />
        <Text color="$primaryNormal" fontSize={15} fontWeight="$semibold">
          FAQs
        </Text>
      </Box>
      <Box gap="$2" alignItems="center">
        <FeatureButton isDisabled={false} icon={News} />
        <Text color="$primaryNormal" fontSize={15} fontWeight="$semibold">
          Actus
        </Text>
      </Box>
    </HStack>
  );
}
