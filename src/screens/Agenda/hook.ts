import { useCallback, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { useDashboardContext } from "src/Context/Dashboard.context";
import { AgendaServices } from "src/services/agenda";
import { AgendaResponse } from "src/services/interfaces/agenda";

export const useAgenda = () => {
  const {relativeName, relativeId, token, familyName} = useDashboardContext();

  const modalLoginRelativeRef = useRef<Modalize>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false);

  const [agenda, setAgenda] = useState<AgendaResponse[]>([]);

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

  const refreshAgenda = (): void => {
    setRefreshLoading(true);
    handleFetchAgenda();
    setRefreshLoading(false);
  } 

  const handleOpenModalRelative = (): void => {
    modalLoginRelativeRef.current?.open();
  }


  useEffect(() => {
    handleFetchAgenda();
  }, []);

  return {
    refs: {
      modalLoginRelativeRef,
    },
    states: {
      loading,
      relativeName,
      agenda,
      refreshLoading,
      familyName,
      relativeId,
    },
    actions: {
        refreshAgenda,
        handleOpenModalRelative,
    }
  };
};
