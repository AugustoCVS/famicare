import { useState } from "react";
import { useToast } from "native-base";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

import * as T from "./types";
import * as U from "./utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "src/routes/stack.routes";
import { AuthServices } from "src/services/auth";
import { useDashboardContext } from "src/Context/Dashboard.context";

export const useModalLogin = () => {
  const { notifyDataChanged } = useDashboardContext();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<StackTypes>();

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

  const saveUserTokenOnStorage = async ({
    token,
    familyName,
    familyId,
  }: T.FamilyProps): Promise<void> => {
    await AsyncStorage.setItem("@userToken", token);
    await AsyncStorage.setItem("@familyName", familyName);
    await AsyncStorage.setItem("@familyId", familyId);
  };

  const handleSignUp = async (FormData: T.useLoginProps): Promise<void> => {
    try {
      setLoading(true);
      await U.signInSchema.validate(FormData, { abortEarly: false });

      const response = await AuthServices.loginFamily({
        email: FormData.email,
        password: FormData.password,
      });

      const decoded = jwtDecode<T.JwtfamilyPayload>(response.token);

      await saveUserTokenOnStorage({
        token: response.token,
        familyName: decoded.name,
        familyId: decoded.id.toString(),
      });

      notifyDataChanged(); 

      navigation.navigate("TabDashboard");
    } catch (error) {
      showToast({ title: "E-mail ou senha inválidos", error: true });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    states: {
      secureTextEntry,
      loading,
    },
    actions: {
      handleSignUp,
      showPassword,
      forgetPassword,
    },
  };
};
