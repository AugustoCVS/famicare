import { useToast } from "native-base";
import * as T from "./types";
import { useEffect } from "react";
import { useDashboardContext } from "src/Context/Dashboard.context";

export const useDashboardHeader = ({ modalLoginRelative }: T.dashboardHeaderProps) => {
  const toast = useToast();
  const { dataChanged, resetDataChanged, getFamilyId, getRelativeName, getRelativeIdToken, getFamilyName, relativeId, relativeName, familyName, logoutRelative } = useDashboardContext();

  const openModalRelativeLogin = () => {
    modalLoginRelative.current?.open();
  };

  const showToast = ({
    title,
    error,
  }: {
    title: string;
    error: boolean;
  }): void => {
    toast.show({
      title: title,
      duration: 3000,
      bgColor: error ? "red.500" : "green.500",
      placement: "top",
    });
  };

  const handleLogout = async (): Promise<void> => {
    await logoutRelative();
    showToast({ title: "Logout realizado com sucesso!", error: false });
  }

  useEffect(() => {
    if (dataChanged) {
      resetDataChanged();
      getRelativeName();
      getFamilyId();
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
