import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  Box,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  Input,
  InputField,
  InputSlot,
  InputIcon,
} from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Search } from "./icons/search";
import { ArticleSearchItem } from "./ArticleSearchItem";
import articleCollectionInstance from "@/firebase/collections/ArticleCollection";
import { ArticleEntity } from "@/types/collections/article";

export const BottomSheet = () => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<ArticleEntity[]>([]);

  useEffect(() => {
    let ignore = false;
    const fetchResults = async () => {
      const results = await articleCollectionInstance.searchByTitle(searchText);
      if (!ignore) {
        setSearchResults(results);
      }
    };

    fetchResults();

    return () => {
      ignore = true;
    };
  }, [searchText]);

  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <Box>
      <Pressable onPress={handleClose}>
        <Icon as={Search} h={28} w={28} color="$primaryNormal" />
      </Pressable>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        zIndex={999}
        snapPoints={[80]}
      >
        <KeyboardAvoidingView
          behavior="position"
          style={{
            position: "relative",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <ActionsheetBackdrop />
          <ActionsheetContent h="$72" zIndex={999}>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <Box px={4} py={2}>
              <Input
                w="100%"
                my={16}
                px={12}
                h={56}
                borderRadius={28}
                bgColor="$primaryLight"
              >
                <InputField
                  placeholder="Rechercher..."
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
                  borderRadius={8}
                  py={2}
                  px={2}
                  bgColor="$gray200"
                />
                <InputSlot>
                  <InputIcon>
                    <Icon as={Search} ml={2} />
                  </InputIcon>
                </InputSlot>
              </Input>
            </Box>
            <FlatList
              data={searchResults}
              renderItem={({ item }) => (
                <ArticleSearchItem image={item.image} title={item.title} />
              )}
              keyExtractor={(item) => item.id}
            />
          </ActionsheetContent>
        </KeyboardAvoidingView>
      </Actionsheet>
    </Box>
  );
};
