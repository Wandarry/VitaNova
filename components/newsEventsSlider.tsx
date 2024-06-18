import React from "react";
import { FlatList } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";
import { NewsEventsItem } from "./newsEventsItem";
import { useMostRecentArticle } from "@/hooks/useMostRecentArticle";
import LottieView from "lottie-react-native";
import { LinkButton } from "./uikit/Buttons/LinkButton";

const RecentArticle = () => {
  const { data, isLoading, error, retry } = useMostRecentArticle();

  if (isLoading) {
    return (
      <Box h={100} justifyContent="center" alignItems="center">
        <LottieView
          source={require("@/assets/animation/loading.json")}
          autoPlay={true}
          loop={true}
        />
      </Box>
    );
  }

  if (data) {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <NewsEventsItem title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    );
  }

  return (
    <Box justifyContent="center" alignItems="center">
      <Text>Une erreur s'est produite. </Text>
      <LinkButton
        title="Réessayez"
        isDisabled={false}
        withIcon={false}
        onpress={retry}
      />
    </Box>
  );
};

export const NewsEventsSlider = () => {
  return <Box paddingLeft={18}>{RecentArticle()}</Box>;
};
