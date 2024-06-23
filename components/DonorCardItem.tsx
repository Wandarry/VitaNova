import { useAuthContext } from "@/hooks/useAuthContext";
import { Box, HStack, Image, Text } from "@gluestack-ui/themed";
import { Timestamp } from "firebase/firestore";

export const DonorCardItem = () => {
  const { userData } = useAuthContext();

  //TODO: Birthdate has a Date type in local but a Timestamp type in firestore. We have to force Timestamp type here in order to render that propriety. We'll have to do a refacto soon to fox that issue
  const birthDate = userData?.birthDate
    ? new Date((userData.birthDate as any as Timestamp).seconds * 1000)
    : null;
  const dateString = birthDate?.toLocaleDateString();

  //TODO: Have to change this to render updatedAt
  const getCurrentDateFormatted = () => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <Box
      borderWidth={1}
      borderRadius={18}
      overflow="hidden"
      borderColor="$primaryNormal"
      h={435}
      p={0}
      mt={24}
      w="100%"
      bg="$primaryLight"
    >
      <HStack
        w="100%"
        bgColor="$primaryNormal"
        minHeight={222}
        borderBottomLeftRadius={260}
        borderBottomRightRadius={510}
        px={0}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontFamily="Mansalva_400"
          fontSize={30}
          color="$white"
          w="50%"
          textAlign="left"
          lineHeight="$3xl"
        >
          Je suis donneur d'organes
        </Text>
        <Image
          source={require("@/assets/images/3dHeart.png")}
          alt="Donneur"
          h={99}
          w={123.34}
        />
      </HStack>
      <Box justifyContent="space-between" px={24} py={18}>
        <Box gap={11}>
          <Text fontFamily="Livvic_600" fontSize={16}>
            Nom :
            <Text fontSize={16}>
              {userData?.firstName} {userData?.lastName}
            </Text>
          </Text>
          <Text fontFamily="Livvic_600" fontSize={16}>
            Date de naissance : <Text fontSize={16}>{dateString}</Text>
          </Text>
          <Text fontFamily="Livvic_600" fontSize={16}>
            ID VitaNova :<Text fontSize={16}>VitaNova45GHZ274</Text>
          </Text>
          <Text fontFamily="Livvic_600" fontSize={16}>
            Date de délivrance :{" "}
            <Text fontSize={16}>{getCurrentDateFormatted()}</Text>
          </Text>
        </Box>
        <Box justifyContent="flex-end" alignItems="flex-end" mt={12}>
          <Image
            source={require("@/assets/images/miniLogo.png")}
            h={52}
            w={63}
            alt="VitaNova"
          />
        </Box>
      </Box>
    </Box>
  );
};
