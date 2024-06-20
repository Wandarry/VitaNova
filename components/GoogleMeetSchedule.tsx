import { Box, HStack, Icon, LinkIcon, Text } from "@gluestack-ui/themed";
import { ArrowOut } from "./icons/arrowOut";
import { ExternalLink } from "./ExternalLink";

type GoogleMeetScheduleProps = {
  link: string;
};

export const GoogleMeetSchedule = ({ link }: GoogleMeetScheduleProps) => {
  return (
    <ExternalLink href={link} style={{ width: "100%" }}>
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        <HStack gap={16}>
          <Box
            w={50}
            h={50}
            borderRadius="$full"
            justifyContent="center"
            alignItems="center"
            bgColor="$primaryLight"
          >
            <Icon as={LinkIcon} color="$primaryNormal" w={24} h={24} />
          </Box>
          <Box>
            <Text fontSize={16} fontFamily="Livvic_600">
              Google meet
            </Text>
            <Text
              fontSize={16}
              fontFamily="Livvic_400"
              isTruncated
              maxWidth={250}
            >
              {link}
            </Text>
          </Box>
        </HStack>
        <Icon as={ArrowOut} color="$primaryNormal" w={12} h={12} />
      </HStack>
    </ExternalLink>
  );
};
