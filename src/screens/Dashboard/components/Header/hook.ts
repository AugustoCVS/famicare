import AsyncStorage from "@react-native-async-storage/async-storage";
import * as T from "./types";
import { useEffect, useState } from "react";

export const useDashboardHeader = ({ modalLoginRelative }: T.dashboardHeaderProps) => {
  const [relativeId, setRelativeId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const openModalRelativeLogin = () => {
    modalLoginRelative.current?.open();
  };

  const getUserIdToken = async (): Promise<string> => {
    const id = await AsyncStorage.getItem("@userRelativeId");
    setRelativeId(id);
    return id;
  }

  const getRelativeName = async (): Promise<string> => {
    const name = await AsyncStorage.getItem("@userName");
    setUserName(name);
    return name;
  }

  const logOut = async (): Promise<void> => {
    await AsyncStorage.removeItem("@userRelativeId");
    await AsyncStorage.removeItem("@userName");
  }

  useEffect(() => {
    getUserIdToken();
    getRelativeName();
  }, [])

  return {
    headerRefs: {
      modalLoginRelative,
    },
    headerActions: {
      openModalRelativeLogin,
      logOut,
    },
    headerStates: {
      relativeId,
      userName,
    },
  };
};
