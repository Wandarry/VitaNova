import { BackIconButton } from "@/components/uikit/Buttons/BackIconButton";
import { NewsTag } from "@/components/uikit/NewsTag";
import {
  Box,
  HStack,
  ImageBackground,
  Text,
  Icon,
  ScrollView,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Share } from "@/components/icons/share";
import { router } from "expo-router";
import { Comment } from "@/components/icons/comment";
import { LikeNews } from "@/components/LikeNews";
import { CommentInput } from "@/components/uikit/Input/dumb/CommentInput";

export default function ArticleDetail() {
  return (
    <Box flex={1} bgColor="$white">
      <ImageBackground
        source={require("@/assets/images/news1.png")}
        minHeight="55%"
        justifyContent="space-between"
      >
        <HStack
          marginTop={50}
          px={18}
          justifyContent="space-between"
          alignItems="center"
        >
          <BackIconButton
            isDisabled={false}
            onPress={() => {
              router.back();
            }}
          />
          <LikeNews />
        </HStack>
        <LinearGradient
          colors={[
            "transparent",
            "rgba(255,255,255,0.24)",
            "rgba(255,255,255,0.7)",
            "rgba(255,255,255,1)",
            "rgba(255,255,255,1)",
          ]}
          locations={[0, 0.23, 0.41, 0.72, 0.99]}
          dither={false}
        >
          <Box py={28} gap={16} px={18}>
            <HStack>
              <NewsTag title="Recherches" style="detail" />
            </HStack>
            <Text color="$black" fontFamily="Livvic_600" fontSize={30}>
              Pourquoi devrais-je faire un don d'organes ?
            </Text>
            <HStack justifyContent="space-between" alignItems="center">
              <HStack gap={12} alignItems="center">
                <Text fontSize={15} fontFamily="Livvic_600">
                  Par admin
                </Text>
                <Text fontSize={12}>Il y a 15 min</Text>
              </HStack>
              <HStack gap={16}>
                <HStack alignItems="center" gap={8}>
                  <Icon as={Comment} h={18} w={18} color="$primaryNormal" />
                  <Text
                    fontFamily="Livvic_600"
                    fontSize={15}
                    color="$primaryNormal"
                  >
                    32 k
                  </Text>
                </HStack>
                <HStack alignItems="center" gap={8}>
                  <Icon as={Share} h={18} w={18} color="$primaryNormal" />
                  <Text
                    fontFamily="Livvic_600"
                    fontSize={15}
                    color="$primaryNormal"
                  >
                    32 k
                  </Text>
                </HStack>
              </HStack>
            </HStack>
          </Box>
        </LinearGradient>
      </ImageBackground>
      <ScrollView flex={1} showsVerticalScrollIndicator={false} px={18}>
        <Box marginBottom={16}>
          <Text>
            Faire don de vos organes est un acte de générosité profond qui a le
            potentiel de transformer et de sauver des vies. Chaque jour, des
            milliers de personnes dans le monde attendent une greffe d'organe
            qui pourrait leur donner une seconde chance dans la vie.
            Malheureusement, la demande d'organes dépasse largement l'offre, ce
            qui entraîne une pénurie chronique qui peut avoir des conséquences
            dévastatrices. Cette disparité signifie que de nombreuses personnes
            perdent la vie en attendant d'être inscrites sur les listes de
            transplantation, vies qui auraient pu être sauvées avec davantage de
            donneurs. La décision de faire don de vos organes est l'une des
            contributions les plus importantes que vous puissiez apporter à la
            société. Il s'agit d'une décision qui transcende les avantages
            personnels et qui donne espoir et vie à d'autres personnes dans le
            besoin. Grâce au don d'organes, une seule personne a la capacité de
            sauver jusqu'à huit vies et d'en améliorer bien d'autres grâce au
            don de tissus et d'yeux. Au-delà du simple potentiel de sauvetage,
            le don d'organes témoigne de la force de la compassion humaine,
            offrant un héritage de gentillesse et de solidarité. De nombreuses
            personnes hésitent à s'inscrire comme donneurs d'organes en raison
            d'idées fausses, de craintes ou du manque d'informations sur le
            processus de don. Cependant, comprendre l'impact profond que votre
            don peut avoir non seulement sur les bénéficiaires, mais aussi sur
            leurs familles et leurs communautés, peut mettre en lumière
            l'importance de cette décision. Le don d'organes est une lueur
            d'espoir, un moyen de laisser une marque positive et durable sur le
            monde, même au-delà de sa vie.
          </Text>
        </Box>
      </ScrollView>
      <CommentInput />
    </Box>
  );
}
