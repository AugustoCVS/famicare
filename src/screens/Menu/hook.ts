import { useNavigation } from "@react-navigation/native";
import { useCallback, useState, useEffect } from "react";
import { useDashboardContext } from "src/Context/Dashboard.context"; 
import { StackTypes } from "src/routes/stack.routes";
import { AuthServices } from "src/services/auth";
import { FetchRelativeByIdResponse } from "src/services/interfaces/auth";

import * as T from "./types";

export const useMenu = () => {
  const navigation = useNavigation<StackTypes>();
  const { logoutFamily, familyName, relativeId, familyId, token, setRelativeName, resetDataChanged } = useDashboardContext(); 

  const [relative, setRelative] = useState<FetchRelativeByIdResponse>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);

  const handleLogout = async (): Promise<void> => {
    await logoutFamily(); 
    navigation.navigate("Home");
  };

  const handleFetchRelativeInfo = useCallback(async (): Promise<void> => {
    try{
      setLoading(true);

      const response = await AuthServices.fetchRelativeById({
        familyId: familyId,
        relativeId: relativeId,
        token: token,
      })

      setRelative(response);

    } catch(error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }, [])

  const handleUpdateRelative = useCallback(async (FormData: T.useUpdateRelativeSchema): Promise<void> => {
    try{
      setUpdateLoading(true);

      const response = await AuthServices.updateRelative({
        familyId: familyId,
        relativeId: relativeId,
        token: token,
        name: FormData.name,
        email: FormData.email,
        cpf: FormData.cpf,
      })

      setRelative(response);
      
      resetDataChanged();

      setRelativeName(response.name);
      

    } catch(error) {
      console.log(error)
    } finally {
      setUpdateLoading(false);
    }
  }, [])

  useEffect(() => {
    handleFetchRelativeInfo();
    resetDataChanged();
  }, [])

  return {
    states: {
      familyName,
      relative,
      loading,
      updateLoading,
      relativeId,
    },
    actions: {
      handleLogout,
      handleUpdateRelative,
    },
  };
};
