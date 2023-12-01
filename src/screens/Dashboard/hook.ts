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

  const showToast = ({
    title,
    error,
  }: {
    title: string;
    error: boolean;
  }): void => {
    toast.show({
      title: title,
      duration: 3000,
      bgColor: error ? "red.500" : "green.500",
      placement: "top",
    });
  };

  const handleOpenModalLoginRelative = () => {
    modalLoginRelative.current?.open();
  }

  const navigateToHealthHistoric = () => {
    if(relativeId) {
      navigation.navigate('HealthHistoric');
    } else {
      handleOpenModalLoginRelative();
      showToast({
        title: 'Você precisa estar logado para acessar o histórico de saúde',
        error: true,
      })
    }
  }

  const navigateToAppointments = () => {
    if(relativeId) {
      navigation.navigate('Appointments');
    } else {
      handleOpenModalLoginRelative();
      showToast({
        title: 'Você precisa estar logado para acessar o histórico de saúde',
        error: true,
      })
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
      navigateToAppointments
    },
  };
};
