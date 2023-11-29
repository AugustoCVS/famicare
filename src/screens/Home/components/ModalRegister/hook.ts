import { useState } from "react";
import { useToast } from "native-base";

import * as T from "./types";
import * as U from "./utils";
import { FIREBASE_AUTH } from "auth/FirebaseConfig";
import { AuthServices } from "src/services/auth";

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
      const response = await AuthServices.registerFamily({
        name: FormData.name,
        email: FormData.email,
        password: FormData.password,
        confirm_password: FormData.confirm_password,
      });
      showToast({title: "Usuário cadastrado com sucesso!", error: false})
      modalRef.current?.close();
    } catch (error) {
      showToast({title: "Erro ao cadastrar o usuário!", error: true});
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
