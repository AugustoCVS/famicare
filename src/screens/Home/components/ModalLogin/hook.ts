import { useState } from "react";
import { useToast } from "native-base";
import { signInWithEmailAndPassword } from "firebase/auth";

import * as T from "./types";
import * as U from "./utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "src/routes/stack.routes";
import { AuthServices } from "src/services/auth";

export const useModalLogin = () => {
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

  const saveUserTokenOnStorage = async (token: string): Promise<void> => {
    await AsyncStorage.setItem("@userToken", token);
  };

  const handleSignUp = async (FormData: T.useLoginProps): Promise<void> => {
    try {
      setLoading(true);
      await U.signInSchema.validate(FormData, { abortEarly: false });

      const response = await AuthServices.loginFamily({
        email: FormData.email,
        password: FormData.password,
      });

      await saveUserTokenOnStorage(response.token);

      navigation.navigate("Dashboard");
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
