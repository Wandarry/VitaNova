import { Box, HStack, Icon, ScrollView, Text } from "@gluestack-ui/themed";
import { Notifications } from "@/components/icons/notifications";
import { FeaturesComponent } from "@/components/FeaturesComponent";
import { PledgeProgress } from "@/components/pledgeProgress";
import { InfoCard } from "@/components/infoCard";
import { PinNews } from "@/components/pinNews";
import { NewsEventsSlider } from "@/components/newsEventsSlider";
import { Events } from "@/components/Events";
import { useAuthContext } from "@/hooks/useAuthContext";

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

export default function Home() {
  const { userData } = useAuthContext();

  return (
    <Box flex={1} bgColor="$white" overflow="visible">
      <Box
        justifyContent="flex-end"
        px={18}
        paddingBottom="$2"
        bgColor="$white"
        h={"18%"}
      >
        <HStack
          position="static"
          alignItems="center"
          justifyContent="space-between"
          w={"100%"}
        >
          <Text fontSize="$2xl" color="$primaryNormal" fontWeight="$semibold">
            Coucou {userData?.firstName} !
          </Text>
          <Icon as={Notifications} color="$primaryNormal" h={50} w={28} />
        </HStack>
      </Box>
      <Box flex={1} bgColor="$textLight0">
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <Box flex={1} w={"100%"} gap="$6">
            <Box w={"100%"} gap="$6" px={18}>
              <InfoCard />
              <FeaturesComponent />
              <PledgeProgress />
            </Box>
            <PinNews
              newsImage={require("@/assets/images/news3.png")}
              newsTitle="Pourquoi devrais-je faire un don d'organes ?"
              newsDescription="En moyenne, 300 000 personnes attendent un organe qui leur sauvera la vie, tandis que des milliers d'autres attendent un don de tissus qui pourrait tout changer."
            />
            <NewsEventsSlider data={data} />
            <Events />
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
