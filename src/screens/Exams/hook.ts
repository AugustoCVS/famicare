import { useCallback, useEffect, useState } from "react";
import { useDashboardContext } from "src/Context/Dashboard.context";
import { ExamsServices } from "src/services/exams";
import { ExamsResponse } from "src/services/interfaces/exams";

export const useExams = () => {
  const {relativeName, relativeId, token} = useDashboardContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false);

  const [exams, setExams] = useState<ExamsResponse[]>([]);

  const handleFetchExams = useCallback(async () => {
    try {
      setLoading(true);

      const response = await ExamsServices.fetchExams({
        relativeId: relativeId,
        token: token,
      })

      setExams(response);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [relativeId]);

  const refreshExams = (): void => {
    setRefreshLoading(true);
    handleFetchExams();
    setRefreshLoading(false);
  } 


  useEffect(() => {
    handleFetchExams();
  }, []);

  return {
    states: {
      loading,
      relativeName,
      exams,
      refreshLoading,
    },
    actions: {
        refreshExams,
    }
  };
};
