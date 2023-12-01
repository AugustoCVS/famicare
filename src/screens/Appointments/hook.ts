import { useToast } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { useDashboardContext } from "src/Context/Dashboard.context";
import { AppointmentsServices } from "src/services/appointments";
import { AppointmentsResponse } from "src/services/interfaces/appointments";

export const useAppointments = () => {
  const { relativeName, relativeId, token } = useDashboardContext();

  const [appointments, setAppointments] = useState<AppointmentsResponse[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false);

  const handleFetchAppointments = useCallback(async () => {
    setLoading(true);
    try {
      const response = await AppointmentsServices.fetchAppointments({
        relativeId: relativeId,
        token: token,
      });

      setAppointments(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  console.log(appointments);

  const handleRefreshAppointments = async () => {
    setRefreshLoading(true);
    handleFetchAppointments();
    setRefreshLoading(false);
  };

  useEffect(() => {
    handleFetchAppointments();
  }, []);

  return {
    states: {
      loading,
      refreshLoading,
      relativeName,
      appointments,
    },
    actions: {
      handleRefreshAppointments,
    },
  };
};
