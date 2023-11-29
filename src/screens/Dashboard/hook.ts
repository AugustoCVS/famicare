import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { StackTypes } from "src/routes/stack.routes";

export const useDashboard = () => {
  const navigation = useNavigation<StackTypes>();
  const modalEmergencyInfoRef = useRef<Modalize>(null);

  const test = () => {
    console.log('test')
  }

  const navigateToHealthHistoric = () => {
    navigation.navigate('HealthHistoric');
  }

  const handleOpenModalEmergencyInfo = () => {
    modalEmergencyInfoRef.current?.open();
  }

  return {
    refs: {
      modalEmergencyInfoRef,
    },
    actions: {
      test,
      handleOpenModalEmergencyInfo,
      navigateToHealthHistoric,
    },
  };
};
