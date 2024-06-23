import { useAuthContext } from "@/hooks/useAuthContext";
import { usePledgeProgress } from "@/hooks/usePledgeProgress";
import {
  Box,
  Text,
  Progress,
  ProgressFilledTrack,
  Avatar,
  AvatarFallbackText,
} from "@gluestack-ui/themed";

export const UserCard = () => {
  const { progress, loading } = usePledgeProgress();
  const { userData } = useAuthContext();
  const fullName = `${userData?.firstName || ""} ${userData?.lastName || ""}`;
  const level = (progress: number) => {
    if (progress === 0) {
      return "Informations personnelles";
    }

    if (progress === 25) {
      return "Informations sur le don";
    }

    if (progress === 50) {
      return "Contact d'urgence";
    }

    if (progress === 75) {
      return "Informations médicales";
    }

    return "Vous avez enregistré votre consentement";
  };

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
      <Avatar bgColor="$indigo600" h={80} w={80} borderRadius="$full">
        <AvatarFallbackText fontFamily="Livvic_700" fontSize={20}>
          {fullName}
        </AvatarFallbackText>
      </Avatar>

      <Text fontSize={25} fontFamily="Livvic_600" color="$white">
        {userData?.firstName} {userData?.lastName}
      </Text>
      <Text fontSize={15} fontFamily="Livvic_400" color="$white">
        Utilisateur depuis 2024
      </Text>
      <Text fontSize={15} fontFamily="Livvic_600" color="$white" marginTop={28}>
        Évolution de l'engagement
      </Text>
      <Text fontSize={15} fontFamily="Livvic_600" color="$white">
        {progress}%
      </Text>
      <Progress value={progress} w="100%" size="xs" bgColor="$white">
        <ProgressFilledTrack bgColor="$warmGray400" />
      </Progress>
      {loading ? (
        <Text fontSize={15} color="$white">
          En cours de chargement
        </Text>
      ) : (
        <Text fontSize={15} color="$white">
          {level(progress)}
        </Text>
      )}
    </Box>
  );
};
