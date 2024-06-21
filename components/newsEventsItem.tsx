import React from "react";
import { VStack, Image, Text } from "@gluestack-ui/themed";

type ItemProps = {
  title: string;
  image: string;
};

export const NewsEventsItem = ({ title, image }: ItemProps) => {
  return (
    <VStack gap={8} w={180} marginRight={18}>
      <Image
        source={{ uri: image }}
        h={180}
        w={180}
        borderRadius={8}
        alt="VitaNova"
      />
      <Text fontFamily="Livvic_600" color="$primaryNormal">
        {title}
      </Text>
    </VStack>
  );
};
