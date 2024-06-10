import { Box, HStack, Icon, Text } from "@gluestack-ui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ArticlesList from "@/components/ArticlesList";
import EventsList from "@/components/EventsList";
import { Search } from "@/components/icons/search";
import { StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          textTransform: "none",
          fontFamily: "Livvic_600",
        },
        tabBarIndicatorStyle: styles.indicator,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#17376D",
        tabBarInactiveTintColor: "#17376D",
      }}
    >
      <Tab.Screen name="Articles" component={ArticlesList} />
      <Tab.Screen name="Événements" component={EventsList} />
    </Tab.Navigator>
  );
}

export default function News() {
  return (
    <Box flex={1} bgColor="$white">
      <Box
        h={110}
        px={18}
        justifyContent="flex-end"
        paddingBottom="$2"
        bgColor="$white"
      >
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="$primaryNormal" fontFamily="Livvic_600" fontSize={30}>
            Actus
          </Text>
          <Icon as={Search} h={28} w={28} color="$primaryNormal" />
        </HStack>
      </Box>
      <TabsNavigation />
    </Box>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  indicator: {
    backgroundColor: "#17376D",
    height: 3,
    borderRadius: 2,
  },
});
