import { Box } from "@gluestack-ui/themed";
import { ArticlesFeed } from "@/components/ArticlesFeed";

export default function EventsTab() {
  return (
    <Box flex={1} bgColor="$textLight0">
      <ArticlesFeed />
    </Box>
  );
}
