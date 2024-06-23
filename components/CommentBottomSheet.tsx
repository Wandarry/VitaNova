import {
  Actionsheet,
  Box,
  Icon,
  Pressable,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  Text,
  ScrollView,
  HStack,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Comment } from "./icons/comment";
import { CommentInput } from "./uikit/Input/CommentInput";
import { CommentsFeed } from "./CommentsFeed";

interface CommentBottomSheetProps {
  articleID: string;
}

export const CommentBottomSheet = ({ articleID }: CommentBottomSheetProps) => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box>
      <Pressable onPress={handleClose}>
        <HStack alignItems="center" gap={8}>
          <Icon as={Comment} h={18} w={18} color="$primaryNormal" />
          <Text fontFamily="Livvic_600" fontSize={15} color="$primaryNormal">
            32 k
          </Text>
        </HStack>
      </Pressable>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        zIndex={999}
        snapPoints={[80]}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent h="$72" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <Box py={2} flex={1} w="100%">
            <Text
              fontFamily="Livvic_600"
              fontSize={16}
              color="$black"
              my={24}
              textAlign="center"
            >
              Commentaires
            </Text>
            <CommentsFeed articleId={articleID} />
          </Box>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};
