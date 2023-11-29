import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { Pressable, View, Text } from "react-native";
import * as T from "./types";

export const CTA: React.FC<T.CTAProps> = ({ label, onPress, icon, isEmergency }) => {
  return (
    <Pressable
      className={`flex flex-row w-full h-20 ${isEmergency ? 'bg-red-default' : 'bg-white-100'} items-center justify-between p-8 rounded-xl mt-4 border border-orange-100`}
      onPress={onPress}
    >
      <View className="flex h-20 flex-row w-full items-center gap-6">
        {icon}
        <Text className={`text-lg ${isEmergency && 'text-white-default font-bold' }`}>{label}</Text>
      </View>

      <AntDesign name="rightcircleo" size={16} color={`${isEmergency ? "#FFFFFF" : "#F6931F"}`} style={{ width: 18, height: 18 }} />
    </Pressable>
  );
};
