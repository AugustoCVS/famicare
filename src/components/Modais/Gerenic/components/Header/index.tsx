import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {Center } from 'native-base';
import { AntDesign } from '@expo/vector-icons';


export const GenericModalHeader = ({title, onClose}) => {
  return (
    <Center
      h="60px"
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
      bg="bg-white">
      {title && (
        <View className="flex items-center justify-center text-center text-lg">
         <Text>{title}</Text>
        </View>
      )}

      <Pressable onPress={onClose} className="absolute right-4 top-4">
        <AntDesign name="close" size={24} color="black"/>
      </Pressable>
    </Center>
  );
};

