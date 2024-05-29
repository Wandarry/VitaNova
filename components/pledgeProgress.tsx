import { Box, Text, Progress, ProgressFilledTrack } from "@gluestack-ui/themed";

export function PledgeProgress() {
  return (
    <Box w={"100%"} bgColor="$primaryLight" borderRadius={18} px="$3" py="$5">
      <Text fontSize={15} fontWeight="$semibold">
        Évolution de mon engagement
      </Text>
      <Box>
        <Text
          fontSize={11}
          fontWeight="$semibold"
          marginBottom={4}
          marginTop={4}
        >
          0%
        </Text>
        <Progress value={1} w={"100%"} size="xs" bgColor="$white">
          <ProgressFilledTrack bgColor="$primaryNormal" />
        </Progress>
      </Box>
    </Box>
  );
}
