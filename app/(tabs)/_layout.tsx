import { AccountCircle } from "@/components/icons/accountCircle";
import { Approval } from "@/components/icons/approval";
import { Chat } from "@/components/icons/chat";
import { Home } from "@/components/icons/home";
import { News } from "@/components/icons/news";
import { Tabs } from "expo-router";
import { BottomTabItem } from "@/components/BottomTabItem";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 16,
          left: 14,
          right: 14,
          height: 73,
          backgroundColor: "white",
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabItem title="Accueil" focused={focused} Icon={Home} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabItem title="Actus" focused={focused} Icon={News} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabItem title="Chat privé" focused={focused} Icon={Chat} />
          ),
        }}
      />
      <Tabs.Screen
        name="pledgeCategoriesSummary"
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabItem
              title="M'engager"
              focused={focused}
              Icon={Approval}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="userProfile"
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabItem
              title="Profil"
              focused={focused}
              Icon={AccountCircle}
            />
          ),
        }}
      />
    </Tabs>
  );
}
