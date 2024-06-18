import React from "react";
import { FlatList } from "react-native";
import { Box } from "@gluestack-ui/themed";
import { NewsCard } from "./newsCard";
import { router } from "expo-router";
import { Routes } from "@/constants/route";

type Article = {
  id: string;
  title: string;
  image: string;
  author: string;
  description: string;
  tag: string;
  createdAt: string;
};

type ArticlesFeedProps = {
  data: Article[];
};

export const ArticlesFeed = ({ data }: ArticlesFeedProps) => {
  return (
    <Box>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <NewsCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};
