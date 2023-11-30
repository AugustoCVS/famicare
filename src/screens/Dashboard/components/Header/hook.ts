import AsyncStorage from "@react-native-async-storage/async-storage";
import * as T from "./types";
import { useEffect } from "react";
import { useDashboardContext } from "src/Context/Dashboard.context";

export const useDashboardHeader = ({ modalLoginRelative }: T.dashboardHeaderProps) => {

  const { dataChanged, resetDataChanged, getRelativeName, getRelativeIdToken, getFamilyName, relativeId, relativeName, familyName, logoutRelative } = useDashboardContext();

  const openModalRelativeLogin = () => {
    modalLoginRelative.current?.open();
  };

  const handleLogout = async (): Promise<void> => {
    await logoutRelative();
  }

  useEffect(() => {
    if (dataChanged) {
      resetDataChanged();
      getRelativeName();
      getRelativeIdToken();
      getFamilyName();
    }
  }, [dataChanged, resetDataChanged]);

  return {
    headerRefs: {
      modalLoginRelative,
    },
    headerActions: {
      openModalRelativeLogin,
      handleLogout,
    },
    headerStates: {
      relativeId,
      relativeName,
      familyName,
    },
  };
};
