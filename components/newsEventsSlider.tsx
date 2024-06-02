import React from "react";
import { FlatList } from "react-native";
import { Box } from "@gluestack-ui/themed";
import { NewsEventsItem } from "./newsEventsItem";

type NewsEventsSliderProps = {
  data: { id: string; title: string; image: string }[];
};

export const NewsEventsSlider = ({ data }: NewsEventsSliderProps) => {
  return (
    <Box paddingLeft={18}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <NewsEventsItem title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </Box>
  );
};
