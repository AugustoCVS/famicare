import { useEffect, useState } from "react";
import { useToast } from "native-base";

import * as T from "./types";
import * as U from "./utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthServices } from "src/services/auth";

export const useModalLoginRelative = ({
  modalRef,
}: T.ModalLoginRelativeProps) => {
  const [loading, setLoading] = useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [token, setToken] = useState<string>("");

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
    id: number;
    name: string;
  }): Promise<void> => {
    await AsyncStorage.setItem("@userRelativeId", id.toString());
    await AsyncStorage.setItem("@userName", name);
  };

  const getToken = async () => {
    const token = await AsyncStorage.getItem("@userToken");
    setToken(token);
    return token;
  };

  const handleRelativeSignIng = async (
    FormData: T.useLoginRelativeProps
  ): Promise<void> => {
    try {
      setLoading(true);
      await U.signInRelativeSchema.validate(FormData, { abortEarly: false });

      const response = await AuthServices.loginRelative({
        email: FormData.email,
        password: FormData.password,
        id: "13",
        token: token,
      });

      await saveUserInfoOnStorage({ id: response.id, name: response.name });
      
      modalRef.current?.close();
      

    } catch (error) {
      showToast({ title: "E-mail ou senha inválidos", error: true });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getToken();
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
