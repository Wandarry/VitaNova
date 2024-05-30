import { Box, HStack, ImageBackground, Text } from "@gluestack-ui/themed";
import { LinkButton } from "./uikit/Buttons/LinkButton";
import { ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type PinNewsProps = {
  newsImage: ImageSourcePropType;
  newsTitle: string;
  newsDescription: string;
};

export function PinNews({
  newsImage,
  newsTitle,
  newsDescription,
}: PinNewsProps) {
  return (
    <Box gap="$4" px={18}>
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize={21} fontWeight="$semibold">
          Actus
        </Text>
        <LinkButton
          title="Tout voir"
          withIcon={true}
          isDisabled={false}
          onpress={() => console.log("Link button pressed")}
        />
      </HStack>
      <ImageBackground
        source={newsImage}
        w={"100%"}
        borderRadius={18}
        overflow="hidden"
      >
        <LinearGradient colors={["rgba(23,55,109,0.5)", "#081326"]}>
          <Box gap={12} px={18} py={20}>
            <Text color="$white" fontSize={21} fontWeight="$semibold">
              {newsTitle}
            </Text>
            <Text color="$white" fontSize={15}>
              {newsDescription}
            </Text>
          </Box>
        </LinearGradient>
      </ImageBackground>
    </Box>
  );
}
