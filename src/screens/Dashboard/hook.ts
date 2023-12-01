import { useNavigation } from "@react-navigation/native";
import { useToast } from "native-base";
import { useRef, useState, useCallback, useEffect } from "react";
import { Modalize } from "react-native-modalize";
import { useDashboardContext } from "src/Context/Dashboard.context";
import { StackTypes } from "src/routes/stack.routes";

import { AgendaServices } from "src/services/agenda";
import { AgendaResponse } from "src/services/interfaces/agenda";

export const useDashboard = () => {
  const toast = useToast();
  const { relativeId, token } = useDashboardContext();

  const [agenda, setAgenda] = useState<AgendaResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false);

  const navigation = useNavigation<StackTypes>();
  const modalEmergencyInfoRef = useRef<Modalize>(null);
  const modalLoginRelative = useRef<Modalize>(null);

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
  };

  const navigateToHealthHistoric = () => {
    if (relativeId) {
      navigation.navigate("HealthHistoric");
    } else {
      handleOpenModalLoginRelative();
      showToast({
        title: "Você precisa estar logado para acessar o histórico de saúde",
        error: true,
      });
    }
  };

  const navigateToAppointments = () => {
    if (relativeId) {
      navigation.navigate("Appointments");
    } else {
      handleOpenModalLoginRelative();
      showToast({
        title: "Você precisa estar logado para acessar o histórico de saúde",
        error: true,
      });
    }
  };

  const navigateToPrescriptions = () => {
    if (relativeId) {
      navigation.navigate("Prescriptions");
    } else {
      handleOpenModalLoginRelative();
      showToast({
        title: "Você precisa estar logado para acessar o histórico de saúde",
        error: true,
      });
    }
  };

  const navigateToExams = () => {
    if (relativeId) {
      navigation.navigate("Exams");
    } else {
      handleOpenModalLoginRelative();
      showToast({
        title: "Você precisa estar logado para acessar o histórico de saúde",
        error: true,
      });
    }
  };

  const handleOpenModalEmergencyInfo = () => {
    modalEmergencyInfoRef.current?.open();
  };

  const handleFetchAgenda = useCallback(async () => {
    try {
      setLoading(true);

      const response = await AgendaServices.fetchAgenda({
        relativeId: relativeId,
        token: token,
      })

      setAgenda(response);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [relativeId]);

  useEffect(() => {
    handleFetchAgenda();
  }, [relativeId]);

  const renderRefresh = () => {
    setRefreshLoading(true);
    handleFetchAgenda();
    setRefreshLoading(false);
  }

  return {
    states: {
      agenda,
      loading,
      relativeId,
      refreshLoading,
    },
    refs: {
      modalEmergencyInfoRef,
      modalLoginRelative,
    },
    actions: {
      handleOpenModalEmergencyInfo,
      navigateToHealthHistoric,
      handleOpenModalLoginRelative,
      navigateToAppointments,
      navigateToExams,
      navigateToPrescriptions,
      renderRefresh,
    },
  };
};
