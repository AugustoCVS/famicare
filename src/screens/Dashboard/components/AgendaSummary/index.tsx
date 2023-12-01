import React from "react";
import { Ionicons } from "@expo/vector-icons";

import * as T from "./types";
import { View, Text } from "react-native";

export const AgendaSummary: React.FC<T.AgendaSummaryProps> = ({
  day,
  doctor,
  hospital,
  type,
}) => {
  return (
    <View className="flex flex-col items-start justify-between bg-white-100 w-[220px] flex-1 mx-4 mb-8 p-4 rounded-lg border border-orange-default">
      <View className="bg-orange-200 items-center justify-center rounded-xl px-4 mb-2">
      <Text className="text-lg text-bold text-gray-default">
        {day}
      </Text>
      </View>
      <Text className="mb-1 text-bold">
        <Ionicons name="medical-sharp" size={12} color="#F6931F" />
        {' '}
        {doctor}
      </Text>
      <Text className="mb-1 text-bold">
        <Ionicons name="medical-sharp" size={12} color="#F6931F" />
        {' '}
        {hospital}
      </Text>
      <Text className="mb-1 text-bold">
        <Ionicons name="medical-sharp" size={12} color="#F6931F" />
        {' '}
        {type}
      </Text>
    </View>
  );
};
