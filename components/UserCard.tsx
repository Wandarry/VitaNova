import { useAuthContext } from "@/hooks/useAuthContext";
import {
  Box,
  Image,
  Text,
  Progress,
  ProgressFilledTrack,
} from "@gluestack-ui/themed";

export const UserCard = () => {
  const { userData } = useAuthContext();
  return (
    <Box
      borderRadius={18}
      alignItems="center"
      justifyContent="center"
      bgColor="$primaryNormal"
      px={18}
      py={24}
      gap={8}
      minHeight={250}
      w="100%"
      marginTop={12}
    >
      <Image
        source={require("@/assets/images/news2.png")}
        alt="user avatar"
        h={80}
        w={80}
        borderRadius={9999}
      />
      <Text fontSize={25} fontFamily="Livvic_600" color="$white">
        {userData?.firstName} {userData?.lastName}
      </Text>
      <Text fontSize={15} fontFamily="Livvic_400" color="$white">
        Utilisateur depuis février 2024
      </Text>
      <Text fontSize={15} fontFamily="Livvic_600" color="$white" marginTop={28}>
        Évolution de l'engagement
      </Text>
      <Text fontSize={15} fontFamily="Livvic_600" color="$white">
        30%
      </Text>
      <Progress value={40} w="100%" size="xs" bgColor="$white">
        <ProgressFilledTrack bgColor="$warmGray400" />
      </Progress>
      <Text fontSize={15} color="$white">
        Information sur le don
      </Text>
    </Box>
  );
};
