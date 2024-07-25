import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Stack, useNavigation } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          header: () => (
            <View className="flex flex-row justify-between pt-10 pb-2 items-center bg-green-600">
              <TouchableOpacity
                className="bg-green-600 w-1/3"
                onPress={() => navigation.goBack()}
              >
                <Text className="text-2xl pl-4">
                  <Ionicons
                    name="chevron-back-circle-sharp"
                    size={32}
                    color="white"
                  />
                </Text>
              </TouchableOpacity>
              <Text className="text-white w-1/3  text-center font-bold text-2xl bg-green-600">
                Home
              </Text>
              <TouchableOpacity
                className="bg-green-600 w-1/3"
                onPress={() => navigation.goBack()}
              ></TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
