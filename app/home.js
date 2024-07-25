import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  cropsname,
  city,
  crop,
  data,
  locations,
  stagename,
} from "../constant/constant";
import { useRoute } from "@react-navigation/native";

const Home = () => {
  const routes = useRoute();

  const language = routes.params.language;

  const months =
    language === "ENG"
      ? [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]
      : [
          "ጥር",
          "የካቲት",
          "መጋቢት",
          "ሚያዚያ",
          "ግንቦት",
          "ሰኔ",
          "ሀምሌ",
          "ነሐሴ",
          "መስከረም",
          "ጥቅምት",
          "ህዳር",
          "ታህሳስ",
        ];

  const stages = [
    { name: "Initial", value: "initial" },
    { name: "Development", value: "development" },
    { name: "Mid", value: "mid" },
    { name: "Late", value: "late" },
  ];

  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedCrop, setSelectedCrop] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedStage, setSelectedStage] = useState();
  const [etc, setEtc] = useState();

  const yourLocation = selectedLocation
    ? locations.locations.find((loc) => loc.name === selectedLocation)
    : [];
  const yourCrop = selectedCrop
    ? crop.crops.find((c) => c.name === selectedCrop)
    : [];

  const calculateETC = () => {
    let k;
    const myLocation = locations.locations.find(
      (loc) => loc.name === selectedLocation
    );

    const mycrop = crop.crops.find((c) => c.name === selectedCrop);

    if (selectedMonth >= 5 && selectedMonth <= 8) {
      k = data[selectedLocation].wet;
    } else if (selectedMonth >= 9 && selectedMonth === 0) {
      k = data[selectedLocation].dry;
    } else {
      k = data[selectedLocation].kwd;
    }

    const eto = myLocation.temperature.max[selectedMonth] ** 2.5 / k;

    const cwr = mycrop.value[selectedStage] * eto;

    return cwr;
  };

  return (
    <ScrollView className="px-10">
      <Text className="text-slate-900 text-xl mt-3 font-bold text-center p-5 rounded-md">
        {language === "ENG"
          ? "Select the following to calculate ETC."
          : "ETCን ለማስላት የሚከተለውን ይምረጡ።"}
      </Text>
      <Text className="text-green-600 text-lg font-medium my-2">
        {language === "ENG" ? "Select Your Location " : "አካባቢዎን ይምረጡ"}
      </Text>
      <Picker
        selectedValue={selectedLocation}
        onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}
        className="bg-green-200 my-2 rounded-md"
      >
        <Picker.Item
          label={language === "ENG" ? " Select  " : "ይምረጡ"}
          value=""
        />
        {locations.locations.map((location, index) => (
          <Picker.Item
            key={index}
            label={language === "ENG" ? location.name : city[location.name]}
            value={location.name}
          />
        ))}
      </Picker>
      <Text className="text-green-600 text-lg font-medium my-2">
        {language === "ENG" ? " Select Crop Type " : "የሰብል ዓይነት ይምረጡ"}
      </Text>
      <Picker
        selectedValue={selectedCrop}
        onValueChange={(itemValue, itemIndex) => setSelectedCrop(itemValue)}
        className="bg-green-200 my-2 rounded-md"
      >
        <Picker.Item
          label={language === "ENG" ? " Select  " : "ይምረጡ"}
          value=""
        />
        {crop.crops.map((crop, index) => (
          <Picker.Item
            key={index}
            label={language === "ENG" ? crop.name : cropsname[crop.name]}
            value={crop.name}
          />
        ))}
      </Picker>
      <Text className="text-green-600 text-lg font-medium my-2">
        {language === "ENG" ? "  Select Current Month " : "የአሁኑን ወር ይምረጡ"}
      </Text>
      <Picker
        selectedValue={selectedMonth}
        onValueChange={(itemValue, itemIndex) => {
          console.log(itemIndex);
          setSelectedMonth(itemValue);
        }}
        className="bg-green-200 my-2 rounded-md"
      >
        <Picker.Item
          label={language === "ENG" ? " Select  " : "ይምረጡ"}
          value=""
        />
        {months.map((month, index) => (
          <Picker.Item key={index} label={month} value={index} />
        ))}
      </Picker>
      <Text className="text-green-600 text-lg font-medium my-2">
        {language === "ENG"
          ? " Select Plant Growth stage "
          : "የእፅዋት እድገት ደረጃን ይምረጡ"}
      </Text>
      <Picker
        selectedValue={selectedStage}
        onValueChange={(itemValue, itemIndex) => setSelectedStage(itemValue)}
        className="bg-green-200 my-2 rounded-md"
      >
        <Picker.Item
          label={language === "ENG" ? " Select  " : "ይምረጡ"}
          value=""
        />
        {stages.map((stage, index) => (
          <Picker.Item
            key={index}
            label={language === "ENG" ? stage.name : stagename[stage.name]}
            value={stage.value}
          />
        ))}
      </Picker>
      <Text className="text-xl font-bold text-center mt-10 mb-5">
        {language === "ENG"
          ? "Infromation you have select   "
          : "እርስዎ የመረጡት መረጃ"}
      </Text>

      <View className=" flex flex-row  items-center justify-between mb-2">
        <Text className=" text-lg font-bold">
          {language === "ENG" ? " Location  " : "አካባቢዎት"}
        </Text>
        <Text>
          {language === "ENG" ? selectedLocation : city[selectedLocation]}
        </Text>
        <Text className=" text-lg font-bold"> Tmax (°C)</Text>
        {selectedMonth >= 0 && selectedLocation && (
          <Text> {yourLocation.temperature.max[selectedMonth]}</Text>
        )}
      </View>

      <View className=" flex flex-row  items-center justify-between ">
        <Text className=" text-lg font-bold">
          {language === "ENG" ? " Crop/Stage  " : "የሰብል ዓይነት "}
        </Text>
        <Text>
          {" "}
          {language === "ENG" ? selectedCrop : cropsname[selectedCrop]}
        </Text>
        <Text className=" text-lg font-bold capitalize">
          {language === "ENG" ? selectedStage : stagename[selectedStage]}
        </Text>
        {selectedStage && selectedCrop && (
          <Text> {yourCrop.value[selectedStage]}</Text>
        )}
      </View>
      <Text className="text-xl font-bold text-center mt-10">
        {language === "ENG" ? "  Result " : "ውጤት"}
      </Text>

      {etc && (
        <View>
          <Text className="text-xl font-medium text-center">
            ETc={etc.toFixed(4)} mm/day
          </Text>
          <Text className="text-xl font-medium text-center">
            {language === "ENG"
              ? `The crop Need ${etc.toFixed(
                  4
                )}mm of water depth per day at this stage.`
              : `ሰብሉ በዚህ ደረጃ ላይ በቀን ${etc.toFixed(4)} mm የዉሃ ጥልቀት ያስፈልገዋል.`}
          </Text>
        </View>
      )}
      <TouchableOpacity
        className="px-12 py-3 mt-5 rounded-lg bg-green-600 mb-10"
        onPress={() => {
          if (
            !selectedCrop ||
            !selectedLocation ||
            selectedMonth < 0 ||
            !selectedStage
          ) {
            Alert.alert(
              language === "ENG" ? "Warning" : "ማስጠንቀቂያ",
              language === "ENG"
                ? "Select all required fields"
                : "ሁሉንም አስፈላጊ መስኮች ይምረጡ",
              [{ text: language === "ENG" ? "OK" : "እሺ" }]
            );
          } else {
            setEtc(calculateETC());
            console.log(etc);
          }
        }}
      >
        <Text className="text-white text-lg font-medium text-center ">
          {language === "ENG" ? "  Calculate  " : "አስላ"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
