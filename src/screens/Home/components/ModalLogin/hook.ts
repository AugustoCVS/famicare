import { useState } from "react";
import { useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";

import * as T from "./types";
import * as U from "./utils";
import { StackTypes } from "src/routes/stack";
import { FIREBASE_AUTH } from "auth/FirebaseConfig";

export const useModalLogin = () => {
  const navigation = useNavigation<StackTypes>();
  const auth = FIREBASE_AUTH;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const showToast = ({title, error}: {title: string, error: boolean }): void => {
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
    showToast({title: "Funcionalidade em desenvolvimento!", error: true})
  }

  const handleSignUp = async (FormData: T.useLoginProps): Promise<void> => {
    try {
      setLoading(true);
      await U.signInSchema.validate(FormData, { abortEarly: false });
      await signInWithEmailAndPassword(auth, FormData.email, FormData.password);
    } catch (error) {
     showToast({title: "E-mail ou senha inválidos", error: true});
     console.log(error)
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
