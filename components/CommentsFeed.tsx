import { useArticleComments } from "@/hooks/useArticleComment";
import { Box, Text } from "@gluestack-ui/themed";
import { ActivityIndicator, FlatList } from "react-native";
import { CommentItem } from "./CommentItem";
import { LinkButton } from "./uikit/Buttons/LinkButton";

interface CommentsFeedProps {
  articleId: string;
}

export const CommentsFeed = ({ articleId }: CommentsFeedProps) => {
  const { data, isLoading, error, retry } = useArticleComments(articleId);

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color="#17376D" />
      </Box>
    );
  }

  if (data) {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => <CommentItem {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
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
