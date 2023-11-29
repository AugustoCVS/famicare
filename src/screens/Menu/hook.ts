import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StackTypes } from "src/routes/stack.routes";

export const useMenu = () => {
  const navigation = useNavigation<StackTypes>();

  const handleLogout = async (): Promise<void> => {
    await AsyncStorage.removeItem("@userToken");
    navigation.navigate("Home");
  };

  return {
    actions: {
      handleLogout,
    },
  };
};
