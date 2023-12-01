import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type DashboardContextType = {
  dataChanged: boolean;
  notifyDataChanged: () => void;
  resetDataChanged: () => void;
  relativeId: string;
  relativeName: string;
  getRelativeIdToken: () => Promise<string>;
  getRelativeName: () => Promise<string>;
  familyName: string;
  getFamilyName: () => Promise<string>;
  familyId: string;
  getFamilyId: () => Promise<string>;
  token: string;
  getFamilyToken: () => Promise<string>;

  logoutFamily: () => Promise<void>;
  logoutRelative: () => Promise<void>;

  setRelativeName: (name: string) => void;
};

export const DashboardContext = createContext<DashboardContextType>({
  dataChanged: false,
  notifyDataChanged: () => {},
  resetDataChanged: () => {},
  relativeId: "",
  relativeName: "",
  getRelativeIdToken: async () => "",
  getRelativeName: async () => "",
  familyName: "",
  getFamilyName: async () => "",
  familyId: "",
  getFamilyId: async () => "",
  token: "",
  getFamilyToken: async () => "",

  logoutFamily: async () => {},
  logoutRelative: async () => {},

  setRelativeName: (name: string) => {},
});

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [dataChanged, setDataChanged] = useState<boolean>(false);

  const [relativeId, setRelativeId] = useState<string>("");
  const [relativeName, setRelativeName] = useState<string>("");

  const [familyName, setFamilyName] = useState<string>("");
  const [familyId, setFamilyId] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const notifyDataChanged = () => {
    setDataChanged(true);
  };

  const resetDataChanged = () => {
    setDataChanged(false);
  };

  const getRelativeIdToken = async (): Promise<string> => {
    const id = await AsyncStorage.getItem("@userRelativeId");
    setRelativeId(id);
    return id;
  };

  const getRelativeName = async (): Promise<string> => {
    const name = await AsyncStorage.getItem("@userName");
    setRelativeName(name);
    return name;
  };

  const getFamilyName = async (): Promise<string> => {
    const name = await AsyncStorage.getItem("@familyName");
    setFamilyName(name);
    return name;
  };

  const getFamilyId = async (): Promise<string> => {
    const familyId = await AsyncStorage.getItem("@familyId");
    setFamilyId(familyId);
    return familyId;
  };

  const getFamilyToken = async (): Promise<string> => {
    const token = await AsyncStorage.getItem("@userToken");
    setToken(token);
    return token;
  };

  const logoutFamily = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem("@familyName");
      await AsyncStorage.removeItem("@familyId");
      await AsyncStorage.removeItem("@userToken");

      setFamilyName("");
      setFamilyId("");
      setToken("");

      setRelativeId("");
      setRelativeName("");

      resetDataChanged();
    } catch (error) {
      console.error("Erro ao fazer logout da família:", error);
    }
  };

  const logoutRelative = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem("@userRelativeId");
      await AsyncStorage.removeItem("@userName");

      setRelativeId("");
      setRelativeName("");

      resetDataChanged();
    } catch (error) {
      console.error("Erro ao fazer logout do relativo:", error);
    }
  };

  useEffect(() => {
    getFamilyId();
    getFamilyToken();
    getRelativeIdToken();
    getRelativeName();
    getFamilyName();
  }, []);

  const value: DashboardContextType = {
    dataChanged,
    notifyDataChanged,
    resetDataChanged,
    relativeId,
    relativeName,
    getRelativeIdToken,
    getRelativeName,
    familyName,
    getFamilyName,
    familyId,
    getFamilyId,
    token,
    getFamilyToken,

    logoutFamily,
    logoutRelative,

    setRelativeName
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
