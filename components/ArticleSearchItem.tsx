import { Box, HStack, Image, Pressable, Text } from "@gluestack-ui/themed";

type ArticleSearchItemProps = {
  image: string;
  title: string;
  onpress?: () => void;
};

export const ArticleSearchItem = ({
  image,
  title,
  onpress,
}: ArticleSearchItemProps) => {
  return (
    <Pressable onPress={onpress} w="100%">
      <HStack px={8} py={12} gap={12} alignItems="center" w="100%">
        <Image
          source={{ uri: image }}
          h={56}
          w={56}
          borderRadius={999}
          alt="Article preview"
        />
        <Box justifyContent="center" flexShrink={1} w="80%">
          <Text fontSize={16} fontFamily="Livvic_600" flexWrap="wrap">
            {title}
          </Text>
        </Box>
      </HStack>
    </Pressable>
  );
};
