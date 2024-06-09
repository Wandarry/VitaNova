import {
  HStack,
  FormControl,
  Textarea,
  TextareaInput,
  Box,
  Icon,
} from "@gluestack-ui/themed";
import { Send } from "@/components/icons/send";

export const CommentInput = () => {
  return (
    <HStack
      bgColor="$white"
      justifyContent="space-between"
      px={16}
      py={22}
      h={98}
    >
      <FormControl w="80%">
        <Textarea px={11} bgColor="$primaryLight" h="100%">
          <TextareaInput
            placeholder="laissez un commentaire..."
            fontSize={13}
            placeholderTextColor="$primaryNormal"
          />
        </Textarea>
      </FormControl>
      <Box
        borderRadius="$full"
        bgColor="$primaryLight"
        justifyContent="center"
        px={19}
      >
        <Icon as={Send} color="$primaryNormal" w={19} />
      </Box>
    </HStack>
  );
};
