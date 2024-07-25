import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { locations } from "../../constant/constant";
import { crop } from "../../constant/constant";

const Home = () => {
  const months = [
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
  ];

  const stages = [
    { name: "Initial", value: "initial" },
    { name: "Development", value: "development" },
    { name: "Mid", value: "mid" },
    { name: "Late", value: "late" },
  ];

  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedCrop, setSelectedCrop] = useState();
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedStage, setSelectedStage] = useState();
  const [etc, setEtc] = useState();

  const calculateETC = () => {
    let k;
    const myLocation = locations.locations.find(
      (loc) => loc.name === selectedLocation
    );

    const mycrop = crop.crops.find((c) => c.name === selectedCrop);

    if (selectedMonth >= 5 && selectedMonth <= 8) {
      k = 38 * myLocation.temperature.min[selectedMonth];
      -63;
    } else if (selectedMonth >= 9 && selectedMonth === 0) {
      k = 73 * myLocation.temperature.min[selectedMonth];
      -1015;
    } else {
      k = 48 * myLocation.temperature.min[selectedMonth];
      -330;
    }

    const eto = (myLocation.temperature.max[selectedMonth] ^ 2.5) / k;

    const cwr = mycrop.value[selectedStage] * eto;
    return cwr;
  };

  return (
    <View className="px-10">
      <Text className="text-slate-900 text-xl mt-3 font-bold text-center p-5 rounded-md">
        Select the following to calculate ETC.
      </Text>
      <Text className="text-green-600 text-lg font-medium my-2">
        Select Your Location
      </Text>
      <Picker
        selectedValue={selectedLocation}
        onValueChange={(itemValue, itemIndex) => setSelectedLocation(itemValue)}
        className="bg-green-200 my-2 rounded-md"
      >
        <Picker.Item label="Select" value="" />
        {locations.locations.map((location, index) => (
          <Picker.Item
            key={index}
            label={location.name}
            value={location.name}
          />
        ))}
      </Picker>
      <Text className="text-green-600 text-lg font-medium my-2">
        Select Crop Type
      </Text>
      <Picker
        selectedValue={selectedCrop}
        onValueChange={(itemValue, itemIndex) => setSelectedCrop(itemValue)}
        className="bg-green-200 my-2 rounded-md"
      >
        <Picker.Item label="Select" value="" />
        {crop.crops.map((crop, index) => (
          <Picker.Item key={index} label={crop.name} value={crop.name} />
        ))}
      </Picker>
      <Text className="text-green-600 text-lg font-medium my-2">
        Select Current Month
      </Text>
      <Picker
        selectedValue={selectedMonth}
        onValueChange={(itemValue, itemIndex) => {
          console.log(itemIndex);
          setSelectedMonth(itemValue);
        }}
        className="bg-green-200 my-2 rounded-md"
      >
        <Picker.Item label="Select" value="" />
        {months.map((month, index) => (
          <Picker.Item key={index} label={month} value={index} />
        ))}
      </Picker>
      <Text className="text-green-600 text-lg font-medium my-2">
        Select Plant Growth stage
      </Text>
      <Picker
        selectedValue={selectedStage}
        onValueChange={(itemValue, itemIndex) => setSelectedStage(itemValue)}
        className="bg-green-200 my-2 rounded-md"
      >
        <Picker.Item label="Select" value="" />
        {stages.map((stage, index) => (
          <Picker.Item key={index} label={stage.name} value={stage.value} />
        ))}
      </Picker>
      <TouchableOpacity
        className="px-12 py-3 rounded-lg bg-green-600"
        onPress={() => {
          if (
            !selectedCrop ||
            !selectedLocation ||
            !selectedMonth ||
            !selectedStage
          ) {
            alert("Fill all required Failed");
          } else {
            setEtc(calculateETC());
            console.log(etc);
          }
        }}
      >
        <Text className="text-white text-lg font-medium text-center">
          Calculate
        </Text>
      </TouchableOpacity>

      <Text className="text-lg font-bold text-center mt-10">
        The Value of Etc
      </Text>
      {etc && (
        <Text className="text-lg font-medium text-center">
          {etc.toFixed(4)}
        </Text>
      )}
    </View>
  );
};

export default Home;
