import { Box, HStack, Icon, Text } from "@gluestack-ui/themed";
import { ArrowOut } from "./icons/arrowOut";
import { ExternalLink } from "./ExternalLink";
import { Location } from "./icons/location";

type PlaceLocationProps = {
  place: string;
  location: string;
  mapLink: string;
};

export const PlaceLocation = ({
  place,
  location,
  mapLink,
}: PlaceLocationProps) => {
  return (
    <ExternalLink href={mapLink}>
      <HStack justifyContent="space-between" alignItems="center">
        <HStack gap={16}>
          <Box
            w={50}
            h={50}
            borderRadius="$full"
            justifyContent="center"
            alignItems="center"
            bgColor="$primaryLight"
          >
            <Icon as={Location} color="$primaryNormal" w={24} h={24} />
          </Box>
          <Box>
            <Text fontSize={16} fontFamily="Livvic_600">
              {place}
            </Text>
            <Text fontSize={16} fontFamily="Livvic_400">
              {location}
            </Text>
          </Box>
        </HStack>
        <Icon as={ArrowOut} color="$primaryNormal" w={12} h={12} />
      </HStack>
    </ExternalLink>
  );
};
