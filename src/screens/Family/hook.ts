import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { AuthServices } from "src/services/auth";

import { FetchRelativesResponse } from "src/services/interfaces/auth";

export const useFamily = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false);

  const [relatives, setRelatives] = useState<FetchRelativesResponse[]>([]);
  const [token, setToken] = useState<string>("");

  const modalAddRelativeRef = useRef<Modalize>(null);

  const getToken = async () => {
    const token = await AsyncStorage.getItem("@userToken");
    setToken(token);
    return token;
  };

  const handleFetchRelatives = useCallback(async () => {
    try {
      setLoading(true);
      const response = await AuthServices.fetchRelatives({
        id: "13",
        token: token,
      });
      setRelatives(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [token]);

  const refreshFamily = (): void => {
    setRefreshLoading(true);
    handleFetchRelatives();
    setRefreshLoading(false);
  } 

  const handleOpenModalAddRelative = (): void => {
    modalAddRelativeRef.current?.open();
  }

  useEffect(() => {
    handleFetchRelatives();
    getToken();
  }, [token]);

  return {
    states: {
      loading,
      relatives,
      refreshLoading,
      token,
    },
    actions: {
      refreshFamily,
      handleOpenModalAddRelative,
    },
    refs: {
        modalAddRelativeRef,
    }
  };
};
