import { useCallback, useEffect, useState } from "react";
import { useDashboardContext } from "src/Context/Dashboard.context";
import { AgendaServices } from "src/services/agenda";
import { AgendaResponse } from "src/services/interfaces/agenda";

export const useAgenda = () => {
  const {relativeName, relativeId, token} = useDashboardContext();

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


  useEffect(() => {
    handleFetchAgenda();
  }, []);

  return {
    states: {
      loading,
      relativeName,
      agenda,
      refreshLoading,
    },
    actions: {
        refreshAgenda,
    }
  };
};
