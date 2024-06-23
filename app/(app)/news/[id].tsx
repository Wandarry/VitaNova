import React, { useEffect, useState } from "react";
import { BackIconButton } from "@/components/uikit/Buttons/BackIconButton";
import { NewsTag } from "@/components/uikit/NewsTag";
import {
  Box,
  HStack,
  ImageBackground,
  Text,
  Icon,
  ScrollView,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Share } from "@/components/icons/share";
import { router, useLocalSearchParams } from "expo-router";
import { LikeNews } from "@/components/LikeNews";
import { CommentInput } from "@/components/uikit/Input/CommentInput";
import { timeAgo } from "@/helpers/timeAgo";
import { useArticle } from "@/hooks/useArticle";
import { ArticleContent } from "@/components/ArticleContent";
import { CommentBottomSheet } from "@/components/CommentBottomSheet";

export default function ArticleDetail() {
  const { id } = useLocalSearchParams();

  const { isLoading, error, data } = useArticle(id as string);

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Chargement...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>{error}</Text>
        <BackIconButton
          isDisabled={false}
          onPress={() => {
            router.back();
          }}
        />
      </Box>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <Box flex={1} bgColor="$white">
        <ImageBackground
          source={{ uri: data.image }}
          minHeight="55%"
          justifyContent="space-between"
        >
          <HStack
            marginTop={50}
            px={18}
            justifyContent="space-between"
            alignItems="center"
          >
            <BackIconButton
              isDisabled={false}
              onPress={() => {
                router.back();
              }}
            />
            <LikeNews />
          </HStack>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255,255,255,0.24)",
              "rgba(255,255,255,0.7)",
              "rgba(255,255,255,1)",
              "rgba(255,255,255,1)",
            ]}
            locations={[0, 0.23, 0.41, 0.72, 0.99]}
            dither={false}
          >
            <Box py={28} gap={16} px={18}>
              <HStack>
                <NewsTag title={data.label} style="detail" />
              </HStack>
              <Text color="$black" fontFamily="Livvic_600" fontSize={30}>
                {data.title}
              </Text>
              <HStack justifyContent="space-between" alignItems="center">
                <HStack gap={12} alignItems="center">
                  <Text fontSize={15} fontFamily="Livvic_600">
                    Par {data.author}
                  </Text>
                  <Text fontSize={12}>
                    Il y a {timeAgo(data.publicationDate)}
                  </Text>
                </HStack>
                <HStack gap={16}>
                  <CommentBottomSheet articleID={id as string} />
                  <HStack alignItems="center" gap={8}>
                    <Icon as={Share} h={18} w={18} color="$primaryNormal" />
                    <Text
                      fontFamily="Livvic_600"
                      fontSize={15}
                      color="$primaryNormal"
                    >
                      32 k
                    </Text>
                  </HStack>
                </HStack>
              </HStack>
            </Box>
          </LinearGradient>
        </ImageBackground>
        <ScrollView flex={1} showsVerticalScrollIndicator={false} px={18}>
          <Box marginBottom={16}>
            <ArticleContent articleID={id as string} />
          </Box>
        </ScrollView>
      </Box>
      <Box position="relative" bottom={0}>
        <CommentInput articleID={id as string} />
      </Box>
    </>
  );
}
