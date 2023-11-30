import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "src/store/auth";

export const useHealthHistoric = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const getToken = async () => {
    const token = await AsyncStorage.getItem("@userToken");
    setToken(token);
  };

  const handleGetHealthHistoric = useCallback(async () => {
    try {
      setLoading(true);
      // const response = await api.get('/healthHistoric');
      // const healthHistoric = response.data;
      // return healthHistoric;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetHealthHistoric();
  }, []);

  return {
    states: {
      loading,
    },
  };
};
