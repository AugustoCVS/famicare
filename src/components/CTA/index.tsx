import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { Pressable, View, Text } from "react-native";
import * as T from "./types";

export const CTA: React.FC<T.CTAProps> = ({ label, onPress, icon }) => {
  return (
    <Pressable
      className="flex flex-row w-full h-20 bg-white-100 items-center justify-between p-8 rounded-xl mt-4"
      onPress={onPress}
    >
      <View className="flex h-20 flex-row w-full items-center gap-6">
        {icon}
        <Text className='text-lg'>{label}</Text>
      </View>

      <AntDesign name="rightcircleo" size={16} color="#F6931F" />
    </Pressable>
  );
};
