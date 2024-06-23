import { useArticleContent } from "@/hooks/useArticleContent";
import { Box, Text } from "@gluestack-ui/themed";
import { ActivityIndicator } from "react-native";

interface ArticleContentProps {
  articleID: string;
}

export const ArticleContent = ({ articleID }: ArticleContentProps) => {
  const { data, isLoading, error } = useArticleContent(articleID);
  if (isLoading) {
    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" color="#17376D" />
      </Box>
    );
  }

  if (data) {
    return (
      <Text color="$black" fontSize={18}>
        {data.content}
      </Text>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center" h={300}>
      <Text textAlign="center">
        Oops, nous n'avons pas pu charger le contenu de l'article
      </Text>
    </Box>
  );
};
