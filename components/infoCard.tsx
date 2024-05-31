import { HStack, VStack, Text, Image } from "@gluestack-ui/themed";

export function InfoCard() {
  return (
    <HStack
      w={"100%"}
      h={175}
      bgColor="$primaryNormal"
      borderRadius={18}
      marginTop="$3"
      px="$4.5"
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack w={"65%"} gap="$3">
        <Text color="$white" fontFamily="Mansalva_400">
          Le savais-tu ?
        </Text>
        <Text color="$white">
          Un donateur peut aider plus de 80 personnes à retrouver le chemin de
          la santé.
        </Text>
      </VStack>
      <Image
        source={require("@/assets/images/organ-donation.png")}
        size="lg"
        alt="VitaNova"
      />
    </HStack>
  );
}
