import React from "react";

import * as T from "./types";
import { View, Text } from "react-native";

export const AppointmentsSummary: React.FC<T.AppointmentsSummaryProps> = ({
  day,
  doctor,
  hospital,
  type,
}) => {
  return (
    <View className="flex flex-col items-start justify-between bg-white-100 w-[220px] flex-1 mx-4 p-4 rounded-lg border border-orange-default">
      <Text className="mb-2 text-lg text-bold text-gray-default">{day}</Text>
      <Text className="mb-1 text-bold">{doctor}</Text>
      <Text className="mb-1 text-bold">{hospital}</Text>
      <Text className="mb-1 text-bold">{type}</Text>
    </View>
  );
};
