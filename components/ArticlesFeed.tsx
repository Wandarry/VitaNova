import React from "react";
import { FlatList } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";
import { NewsCard } from "./newsCard";
import { useMoreArticle } from "@/hooks/useMoreArticle";
import LottieView from "lottie-react-native";
import { LinkButton } from "./uikit/Buttons/LinkButton";
import { timeAgo } from "@/helpers/timeAgo";

const RecentArticles = () => {
  const { data, isLoading, error, retry } = useMoreArticle();

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
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
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <NewsCard {...item} publicationDate={timeAgo(item.publicationDate)} />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
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

export const ArticlesFeed = () => {
  return <Box><RecentArticles /></Box>;
};
