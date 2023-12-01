import { useCallback, useEffect, useState } from "react";
import { useDashboardContext } from "src/Context/Dashboard.context";
import { PrescriptionsResponse } from "src/services/interfaces/prescriptions";
import { PrescriptionsService } from "src/services/prescriptions";


export const usePrescriptions = () => {
  const {relativeName, relativeId, token} = useDashboardContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false);

  const [prescriptions, setPrescriptions] = useState<PrescriptionsResponse[]>([]);

  const handleFetchPrescriptions = useCallback(async () => {
    try {
      setLoading(true);

      const response = await PrescriptionsService.fetchPrescriptions({
        relativeId: relativeId,
        token: token,
      })

      setPrescriptions(response);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [relativeId]);

  const refreshPrescriptions = (): void => {
    setRefreshLoading(true);
    handleFetchPrescriptions();
    setRefreshLoading(false);
  } 


  useEffect(() => {
    handleFetchPrescriptions();
  }, []);

  return {
    states: {
      loading,
      relativeName,
      prescriptions,
      refreshLoading,
    },
    actions: {
        refreshPrescriptions,
    }
  };
};
