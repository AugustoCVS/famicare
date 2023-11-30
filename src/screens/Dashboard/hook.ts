import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "native-base";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { useDashboardContext } from "src/Context/Dashboard.context";
import { StackTypes } from "src/routes/stack.routes";

export const useDashboard = () => {
  const toast = useToast();
  const { relativeId } = useDashboardContext();

  const navigation = useNavigation<StackTypes>();
  const modalEmergencyInfoRef = useRef<Modalize>(null);
  const modalLoginRelative = useRef<Modalize>(null);

  const test = () => {
    console.log('test')
  }

  const showToast = ({message}: {message: string}) => {
    toast.show({
      title: 'Funcionalidade em desenvolvimento!',
      duration: 3000,
      bgColor: 'red.500',
      placement: 'top',
    });
  }

  const handleOpenModalLoginRelative = () => {
    modalLoginRelative.current?.open();
  }

  const navigateToHealthHistoric = () => {
    if(relativeId) {
      navigation.navigate('HealthHistoric');
    } else {
      handleOpenModalLoginRelative();
    }
  }

  const handleOpenModalEmergencyInfo = () => {
    modalEmergencyInfoRef.current?.open();
  }

  return {
    refs: {
      modalEmergencyInfoRef,
      modalLoginRelative,
    },
    actions: {
      test,
      handleOpenModalEmergencyInfo,
      navigateToHealthHistoric,
      handleOpenModalLoginRelative,
    },
  };
};
