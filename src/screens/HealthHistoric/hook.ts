import { useCallback, useEffect, useState } from "react";
import { useDashboardContext } from "src/Context/Dashboard.context";
import { HealthHistoricServices } from "src/services/healthHistoric";
import { FetchHealthHistoricResponse } from "src/services/interfaces/healthHistoric";

export const useHealthHistoric = () => {
  const {relativeName, relativeId, token} = useDashboardContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false);

  const [healthHistoric, setHealthHistoric] = useState<FetchHealthHistoricResponse[]>([]);

  const handleGetHealthHistoric = useCallback(async () => {
    try {
      setLoading(true);

      const response = await HealthHistoricServices.fetchHealthHistoric({
        id: relativeId,
        token: token,
      });

      setHealthHistoric(response);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [relativeId]);

  const refreshHealthHistoric = (): void => {
    setRefreshLoading(true);
    handleGetHealthHistoric();
    setRefreshLoading(false);
  } 


  useEffect(() => {
    handleGetHealthHistoric();
  }, []);

  return {
    states: {
      loading,
      relativeName,
      healthHistoric,
      refreshLoading,
    },
    actions: {
      refreshHealthHistoric,
    }
  };
};
