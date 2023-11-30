import { useContext, useEffect, useState } from "react";
import { useToast } from "native-base";

import * as T from "./types";
import * as U from "./utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthServices } from "src/services/auth";
import { useDashboardContext } from "src/Context/Dashboard.context";

export const useModalLoginRelative = ({
  modalRef,
}: T.ModalLoginRelativeProps) => {

  const { notifyDataChanged, getFamilyToken, token, familyId } = useDashboardContext();

  const [loading, setLoading] = useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toast = useToast();

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

  const showPassword = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const forgetPassword = (): void => {
    showToast({ title: "Funcionalidade em desenvolvimento!", error: true });
  };

  const saveUserInfoOnStorage = async ({
    id,
    name,
  }: {
    id: string;
    name: string;
  }): Promise<void> => {
    await AsyncStorage.setItem("@userRelativeId", id);
    await AsyncStorage.setItem("@userName", name);
  };

  console.log(familyId, token);

  const handleRelativeSignIng = async (
    FormData: T.useLoginRelativeProps
  ): Promise<void> => {
    try {
      setLoading(true);
      await U.signInRelativeSchema.validate(FormData, { abortEarly: false });

      const response = await AuthServices.loginRelative({
        email: FormData.email,
        password: FormData.password,
        id: familyId,
        token: token,
      });

      await saveUserInfoOnStorage({ id: response.id.toString(), name: response.name });

      notifyDataChanged();
      
      modalRef.current?.close();

    } catch (error) {
      showToast({ title: "E-mail ou senha inválidos", error: true });;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFamilyToken();
  }, []);

  return {
    states: {
      secureTextEntry,
      loading,
    },
    actions: {
      handleRelativeSignIng,
      showPassword,
      forgetPassword,
    },
  };
};
