import { Box, HStack, Text } from "@gluestack-ui/themed";
import { LinkButton } from "./uikit/Buttons/LinkButton";
import { NewsEventsSlider } from "./newsEventsSlider";

const data = [
  {
    id: "1",
    image: require("@/assets/images/news1.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
  },
  {
    id: "2",
    image: require("@/assets/images/news2.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
  },
  {
    id: "3",
    image: require("@/assets/images/news3.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
  },
  {
    id: "4",
    image: require("@/assets/images/news1.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
  },
  {
    id: "5",
    image: require("@/assets/images/news2.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
  },
  {
    id: "6",
    image: require("@/assets/images/news3.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
  },
];

export function Events() {
  return (
    <Box gap="$4">
      <HStack justifyContent="space-between" alignItems="center" px={18}>
        <Text fontSize={21} fontFamily="Livvic_600">
          Événements
        </Text>
        <LinkButton
          title="Tout voir"
          withIcon={true}
          isDisabled={false}
          onpress={() => console.log("Link button pressed")}
        />
      </HStack>
      <NewsEventsSlider data={data} />
    </Box>
  );
}
