import { Box, HStack, Text, Image, Icon } from "@gluestack-ui/themed";
import { NewsTag } from "./uikit/NewsTag";
import { Favorite } from "./icons/favorite";
import { Share } from "./icons/share";
import { Comment } from "./icons/comment";

type NewsCardProps = {
  tag: string;
  createdAt: string;
  image: string;
  author: string;
  title: string;
  description: string;
};

export const NewsCard = ({
  tag,
  createdAt,
  title,
  image,
  description,
  author,
}: NewsCardProps) => {
  return (
    <Box
      borderRadius={8}
      py={24}
      my={24}
      mx={3}
      gap={16}
      shadowColor="$shadow"
      shadowOpacity="$10"
      elevation={20}
      shadowRadius={33}
      bgColor="$white"
    >
      <HStack px={18} gap={12} alignItems="center">
        <NewsTag style="card" title={tag} />
        <Text fontSize={11}>Il y a {createdAt}</Text>
      </HStack>
      <Image source={image} h={200} w="100%" />
      <Box px={18} gap={16}>
        <Text fontFamily="Livvic_600" fontSize={15}>
          Par {author}
        </Text>
        <Text fontFamily="Livvic_600" fontSize={21}>
          {title}
        </Text>
        <Text numberOfLines={2} fontFamily="Livvic_400" fontSize={15}>
          {description}
        </Text>
      </Box>
      <HStack justifyContent="flex-end" gap={24} px={18}>
        <HStack alignItems="center" gap={8}>
          <Icon as={Comment} h={20} w={20} color="$primaryNormal" />
          <Text fontFamily="Livvic_600" fontSize={15} color="$primaryNormal">
            32 k
          </Text>
        </HStack>
        <HStack alignItems="center" gap={8}>
          <Icon as={Favorite} h={20} w={20} color="$primaryNormal" />
          <Text fontFamily="Livvic_600" fontSize={15} color="$primaryNormal">
            32 k
          </Text>
        </HStack>
        <HStack alignItems="center" gap={8}>
          <Icon as={Share} h={20} w={20} color="$primaryNormal" />
          <Text fontFamily="Livvic_600" fontSize={15} color="$primaryNormal">
            32 k
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};
