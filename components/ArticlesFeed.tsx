import React from "react";
import { FlatList } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";
import { NewsCard } from "./newsCard";
import { useMoreArticle } from "@/hooks/useMoreArticle";
import { LinkButton } from "./uikit/Buttons/LinkButton";
import { timeAgo } from "@/helpers/timeAgo";
import { ActivityIndicator } from "react-native";

const RecentArticles = () => {
  const { data, isLoading, error, retry } = useMoreArticle();

  if (isLoading) {
    return (
      <Box h="100%" justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color="#17376D" />
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
  return (
    <Box>
      <RecentArticles />
    </Box>
  );
};
