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
import { DateSchedule } from "@/components/DateSchedule";
import { GoogleMeetSchedule } from "@/components/GoogleMeetSchedule";

export default function ArticleDetail() {
  return (
    <>
      <Box flex={1} bgColor="$white">
        <ImageBackground
          source={require("@/assets/images/news1.png")}
          minHeight={450}
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
                <NewsTag title="Événements" style="detail" />
              </HStack>
              <Text color="$black" fontFamily="Livvic_600" fontSize={30}>
                Webinaire sur les dernières avancées en matière de greffes
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
          <Box marginBottom={16} gap={26}>
            <DateSchedule
              date="Mar, 21 Dec"
              hour="09h - 10h GMT + 1"
              agendaLink="qebsn"
            />
            <GoogleMeetSchedule link="https://meet.google.com/xsc-jjdi-bzy" />
            <Text fontSize={18} fontFamily="Livvic_600" color="$primaryNormal">
              À propos
            </Text>
            <Text>
              Faire don de vos organes est un acte de générosité profond qui a
              le potentiel de transformer et de sauver des vies. Chaque jour,
              des milliers de personnes dans le monde attendent une greffe
              d'organe qui pourrait leur donner une seconde chance dans la vie.
              Malheureusement, la demande d'organes dépasse largement l'offre,
              ce qui entraîne une pénurie chronique qui peut avoir des
              conséquences dévastatrices.
            </Text>
          </Box>
        </ScrollView>
      </Box>
      <Box position="relative" bottom={0}>
        <CommentInput />
      </Box>
    </>
  );
}
