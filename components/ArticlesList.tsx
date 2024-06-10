import { Box } from "@gluestack-ui/themed";
import { ArticlesFeed } from "@/components/ArticlesFeed";

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
  },
];

export default function ArticlesList() {
  return (
    <Box flex={1} px={18} bgColor="$textLight0">
      <ArticlesFeed data={data} />
    </Box>
  );
}
