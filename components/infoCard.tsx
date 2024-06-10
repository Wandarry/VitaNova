import { HStack, VStack, Text, Image } from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const data = [
  {
    id: "1",
    message:
      "Un donateur peut aider plus de 80 personnes à retrouver le chemin de la santé.",
    image: require("@/assets/images/organ-donation.png"), // Assurez-vous d'avoir vos images locales ou d'utiliser des liens
  },
  {
    id: "2",
    message:
      "Les organes les plus fréquemment transplantés sont le cœur, le foie, les reins, et les poumons.",
    image: require("@/assets/images/kidney.png"),
  },
  {
    id: "3",
    message:
      "Pour devenir donneur, il est important d'en parler à vos proches et de vous inscrire sur le registre national des donneurs.",
    image: require("@/assets/images/liver.png"),
  },
  {
    id: "4",
    message:
      "Le consentement au don d'organes peut être explicite ou présumé selon les lois de votre pays.",
    image: require("@/assets/images/pancreas.png"),
  },
  {
    id: "5",
    message:
      "Les tissus (cornée, les valves cardiaques, etc.) peuvent également être donnés pour sauver de vie de nombreux patients.",
    image: require("@/assets/images/transplant.png"),
  },
  {
    id: "6",
    message:
      "En moyenne, 17 personnes meurent chaque jour en attente d'une greffe d'organe.",
    image: require("@/assets/images/organ-donation.png"),
  },
  {
    id: "7",
    message:
      "Les familles jouent un rôle crucial dans le processus de don d'organes en confirmant le consentement du donneur.",
    image: require("@/assets/images/heart.png"),
  },
];

export function InfoCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateInfo = async () => {
      const lastIndex = await AsyncStorage.getItem("currentIndex");
      const lastUpdate = await AsyncStorage.getItem("lastUpdate");

      const now = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000;

      if (lastUpdate && now - parseInt(lastUpdate) < oneDay && lastIndex) {
        setCurrentIndex(parseInt(lastIndex));
      } else {
        const newIndex = (currentIndex + 1) % data.length;
        setCurrentIndex(newIndex);
        await AsyncStorage.setItem("currentIndex", newIndex.toString());
        await AsyncStorage.setItem("lastUpdate", now.toString());
      }
    };

    updateInfo();

    const interval = setInterval(updateInfo, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <HStack
      w={"100%"}
      minHeight={175}
      bgColor="$primaryNormal"
      borderRadius={18}
      marginTop="$3"
      px="$4.5"
      py={8}
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack w={"65%"} gap="$3">
        <Text color="$white" fontFamily="Mansalva_400">
          Le savais-tu ?
        </Text>
        <Text color="$white">{data[currentIndex].message}</Text>
      </VStack>
      <Image source={data[currentIndex].image} size="lg" alt="VitaNova" />
    </HStack>
  );
}
