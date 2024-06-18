import { HStack, Icon, Pressable, Text } from "@gluestack-ui/themed";
import { Favorite } from "./icons/favorite";
import { useState } from "react";
import { FavoriteActive } from "./icons/favoriteActive";

export const LikeNews = () => {
  const [isLiked, setIsLiked] = useState(false);

  const likeANews = () => {
    setIsLiked(!isLiked);
  };

  return (
    <HStack
      bgColor="$white"
      borderWidth={1}
      borderColor="$primaryNormal"
      px={8}
      borderRadius={8}
      h="100%"
      alignItems="center"
      gap={8}
    >
      <Pressable onPress={likeANews}>
        <Icon
          as={isLiked ? FavoriteActive : Favorite}
          h={22}
          w={22}
          color="$primaryNormal"
        />
      </Pressable>
      <Text fontFamily="Livvic_600" fontSize={13} color="$primaryNormal">
        32 k
      </Text>
    </HStack>
  );
};
