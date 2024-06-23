import { useUser } from "@/hooks/useUser";
import {
  Avatar,
  AvatarFallbackText,
  Box,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import { LinkButton } from "./uikit/Buttons/LinkButton";

interface CommentItemProps {
  authorID: string;
  comment: string;
}

export const CommentItem = ({ authorID, comment }: CommentItemProps) => {
  const { data, isLoading, error, retry } = useUser(authorID);
  const fullName = `${data?.firstName || ""} ${data?.lastName || ""}`;

  if (isLoading) {
    return (
      <Box h={200}>
        <Text>En cours de chargement</Text>
      </Box>
    );
  }

  if (data) {
    return (
      <HStack
        gap={8}
        justifyContent="flex-start"
        px={4}
        w="100%"
        marginBottom={32}
      >
        <Avatar bgColor="$primaryLightHover" size="md" borderRadius="$full">
          <AvatarFallbackText color="$primaryDark" fontFamily="Livvic_600">
            {fullName}
          </AvatarFallbackText>
        </Avatar>
        <Box gap={4} flexShrink={1}>
          <Text fontFamily="Livvic_400" fontSize={13}>
            {data?.firstName} {data?.lastName}
          </Text>
          <Text fontFamily="Livvic_500" fontSize={15} flexWrap="wrap">
            {comment}
          </Text>
        </Box>
      </HStack>
    );
  }

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Oops, une erreur s'est produite</Text>
      <LinkButton
        onpress={retry}
        title="Réessayer"
        isDisabled={false}
        withIcon={false}
      />
    </Box>
  );
};
