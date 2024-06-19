import { Box, Text, Progress, ProgressFilledTrack } from "@gluestack-ui/themed";
import { usePledgeProgress } from "@/hooks/usePledgeProgress";

export function PledgeProgress() {
  const { progress, loading } = usePledgeProgress();
  return (
    <Box w="100%" bgColor="$primaryLight" borderRadius={18} px="$3" py="$5">
      <Text fontSize={15} fontFamily="Livvic_600">
        Évolution de mon engagement
      </Text>
      <Box>
        {loading ? (
          <Text
            fontSize={11}
            fontFamily="Livvic_600"
            marginBottom={4}
            marginTop={4}
          >
            En cours de chargement...
          </Text>
        ) : (
          <Text
            fontSize={11}
            fontFamily="Livvic_600"
            marginBottom={4}
            marginTop={4}
          >
            {progress}%
          </Text>
        )}
        <Progress value={progress} w={"100%"} size="xs" bgColor="$white">
          <ProgressFilledTrack bgColor="$primaryNormal" />
        </Progress>
      </Box>
    </Box>
  );
}
