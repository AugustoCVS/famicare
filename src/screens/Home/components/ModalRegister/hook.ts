import { useState } from "react";
import { useToast } from "native-base";

import * as T from "./types";
import * as U from "./utils";
import { FIREBASE_AUTH } from "auth/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useModalRegister = ({modalRef}: T.ModalRegisterProps) => {
  const auth = FIREBASE_AUTH;
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const showToast = ({title, error}: {title: string, error: boolean }): void => {
    toast.show({
      title: title,
      duration: 3000,
      bgColor: error ? "red.500" : "green.500",
      placement: "top",
    });
  };

  const handleSignUp = async (FormData: T.useRegisterProps): Promise<void> => {
    try {
      setLoading(true);
      await U.signUpSchema.validate(FormData, { abortEarly: false });
      await createUserWithEmailAndPassword(auth, FormData.email, FormData.password);
      showToast({title: "Usuário cadastrado com sucesso!", error: false})
      modalRef.current?.close();
    } catch (error) {
      showToast({title: "Erro ao cadastrar o usuário", error: true});
    } finally {
      setLoading(false);
    }
  };


  return {
    states: {
      loading,
    },
    actions: {
      handleSignUp,
    },
  };
};
