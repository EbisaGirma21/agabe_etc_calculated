import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");

  return (
    <View className="flex-1  justify-end items-center space-y-10 relative">
      <Image
        source={require("../assets/welcome.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      />
      <StatusBar style="light" />

      {/* Title and Button */}
      <View className="flex items-center justify-center py-28 max-w-[80%]">
        <View className=" p-4 rounded-3xl">
          <Image
            source={require("../assets/images/images.png")}
            style={{
              width: 150,
              height: 150,
            }}
          />
        </View>
        <Text className="text-white text-4xl font-bold tracking-widest ">
          ETcCalculator(Agape)
        </Text>

        <Text className="text-white tracking-widest mb-2 text-lg text-center font-medium">
          Calculate and find wets that bring your better crop.
        </Text>
      </View>

      <View className="my-4 mb-36">
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          className="text-white"
        >
          <Picker.Item label="English" value="ENG" />
          <Picker.Item label="አማርኛ" value="AM" />
        </Picker>
        <TouchableOpacity
          className="px-12 py-3 rounded-lg bg-green-600"
          onPress={() =>
            navigation.navigate("home", { language: selectedLanguage })
          }
        >
          <Text className="text-white text-lg font-medium">Go To</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
