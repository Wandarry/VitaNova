import { Box, HStack, Icon, Text } from "@gluestack-ui/themed";
import { ArticlesFeed } from "@/components/ArticlesFeed";
import { Search } from "@/components/icons/search";
import { Routes } from "@/constants/route";

const data = [
  {
    id: "1",
    image: require("@/assets/images/news1.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
    author: "admin",
    description:
      "En moyenne, 300 000 personnes attendent un organe qui leur sauvera la vie, tandis que des milliers d'autres attendent un don de tissus qui pourrait tout changer.",
    tag: "Recherches",
    createdAt: "15 min",
    route: Routes.ARTICLE_DETAIL,
  },
  {
    id: "2",
    image: require("@/assets/images/news2.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
    author: "Docteur IBIKOUNLE",
    description:
      "En moyenne, 300 000 personnes attendent un organe qui leur sauvera la vie, tandis que des milliers d'autres attendent un don de tissus qui pourrait tout changer.",
    tag: "Découvertes",
    createdAt: "30 min",
    route: Routes.ARTICLE_DETAIL,
  },
  {
    id: "3",
    image: require("@/assets/images/news3.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
    author: "Docteur ACCLASATO",
    description:
      "En moyenne, 300 000 personnes attendent un organe qui leur sauvera la vie, tandis que des milliers d'autres attendent un don de tissus qui pourrait tout changer.",
    tag: "Témoignages",
    createdAt: "2 heures",
    route: Routes.ARTICLE_DETAIL,
  },
  {
    id: "4",
    image: require("@/assets/images/news1.png"),
    title: "Pourquoi le don d'organes est-il cruciale de nos jours ?",
    author: "Docteur Ronel",
    description:
      "En moyenne, 300 000 personnes attendent un organe qui leur sauvera la vie, tandis que des milliers d'autres attendent un don de tissus qui pourrait tout changer.",
    tag: "Témoignages",
    createdAt: "3 jours",
    route: Routes.ARTICLE_DETAIL,
  },
];

export default function News() {
  return (
    <Box flex={1} bgColor="$white">
      <Box
        h={110}
        px={18}
        justifyContent="flex-end"
        paddingBottom="$2"
        bgColor="$white"
      >
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="$primaryNormal" fontFamily="Livvic_600" fontSize={30}>
            News
          </Text>
          <Icon as={Search} h={28} w={28} color="$primaryNormal" />
        </HStack>
      </Box>
      <Box flex={1} bgColor="$textLight0">
        <ArticlesFeed data={data} />
      </Box>
    </Box>
  );
}
