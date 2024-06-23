import React, { useState } from "react";
import {
  HStack,
  FormControl,
  Textarea,
  TextareaInput,
  Box,
  Icon,
  Pressable,
} from "@gluestack-ui/themed";
import { Send } from "@/components/icons/send";
import { useUserData } from "@/hooks/useUserData";
import { useAuthContext } from "@/hooks/useAuthContext";
import articleCommentCollectionInstance from "@/firebase/collections/ArticleCommentCollection";

interface CommentInputProps {
  articleID: string;
}

export const CommentInput = ({ articleID }: CommentInputProps) => {
  const [comment, setComment] = useState("");
  const { user } = useAuthContext();
  const { userID } = useUserData(user);

  const handleSendComment = async () => {
    if (comment.trim() && userID) {
      try {
        await articleCommentCollectionInstance.createComment(
          articleID,
          userID,
          comment,
        );
        setComment("");
      } catch {
        console.log(comment);
      }
    }
  };

  return (
    <HStack
      bgColor="$white"
      justifyContent="space-between"
      px={16}
      py={22}
      h={98}
    >
      <FormControl w="80%">
        <Textarea px={11} bgColor="$primaryLight" h="100%">
          <TextareaInput
            placeholder="Laissez un commentaire..."
            fontSize={13}
            placeholderTextColor="$primaryNormal"
            value={comment}
            onChangeText={setComment}
          />
        </Textarea>
      </FormControl>
      <Pressable
        borderRadius="$full"
        bgColor="$primaryLight"
        justifyContent="center"
        px={19}
        onPress={handleSendComment}
      >
        <Icon as={Send} color="$primaryNormal" w={19} />
      </Pressable>
    </HStack>
  );
};
