import {
  Box,
  CalendarDaysIcon,
  HStack,
  Icon,
  Text,
} from "@gluestack-ui/themed";
import { ArrowOut } from "./icons/arrowOut";
import { ExternalLink } from "./ExternalLink";

type DateScheduleProps = {
  date: string;
  hour: string;
  agendaLink: string;
};

export const DateSchedule = ({ date, hour, agendaLink }: DateScheduleProps) => {
  return (
    <ExternalLink href={agendaLink} style={{ width: "100%" }}>
      <HStack justifyContent="space-between" alignItems="center" width="100%">
        <HStack gap={16}>
          <Box
            w={50}
            h={50}
            borderRadius="$full"
            justifyContent="center"
            alignItems="center"
            bgColor="$primaryLight"
          >
            <Icon as={CalendarDaysIcon} color="$primaryNormal" w={24} h={24} />
          </Box>
          <Box>
            <Text fontSize={16} fontFamily="Livvic_600">
              {date}
            </Text>
            <Text fontSize={16} fontFamily="Livvic_400">
              {hour}
            </Text>
          </Box>
        </HStack>
        <Icon as={ArrowOut} color="$primaryNormal" w={12} h={12} />
      </HStack>
    </ExternalLink>
  );
};
