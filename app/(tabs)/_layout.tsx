import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "react-native-paper";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? "green" : "black" }}>Todos</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="create-todo"
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? "green" : "black" }}>
              Create Todos
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
