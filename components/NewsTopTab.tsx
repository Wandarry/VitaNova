import { StyleSheet } from "react-native";
import ArticlesTab from "./ArticlesTab";
import EventsTab from "./EventsTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export function NewsTopTab() {
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
      <Tab.Screen name="Articles" component={ArticlesTab} />
      <Tab.Screen name="Événements" component={EventsTab} />
    </Tab.Navigator>
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
