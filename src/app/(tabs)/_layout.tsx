import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='home'
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='search'
              size={24}
              color={focused ? "white" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
