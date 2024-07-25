import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          header: () => (
            <Text className="text-white pt-8 text-center font-bold text-4xl bg-green-600">
              Home
            </Text>
          ),
          tabBarIcon: () => (
            <Ionicons
              name="home"
              className="bg-green-600"
              color={"#16a34a"}
              size={20}
            />
          ),

          tabBarLabel: "Home",
          tabBarActiveBackgroundColor: "#c7e2d9",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#00a76f",
            marginBottom: 5,
          },
        }}
      />
      <Tabs.Screen name="etc" />
    </Tabs>
  );
}
