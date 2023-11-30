import { useState } from "react";
import { useToast } from "native-base";

import * as T from "./types";
import * as U from "./utils";
import { AuthServices } from "src/services/auth";

export const useModalAddRelative = ({modalRef, token}: T.ModalAddRelativeProps) => {
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

  const handleAddRelative = async (FormData: T.useRegisterRelativeProps): Promise<void> => {
    try {
      setLoading(true);
      await U.addRelativeSchema.validate(FormData, { abortEarly: false });
      const response = await AuthServices.registerRelative({
        name: FormData.name,
        cpf: FormData.cpf,
        email: FormData.email,
        password: FormData.password,
        confirm_password: FormData.confirm_password,
        id: "13",
        token: token,
      });
      showToast({title: "Familiar cadastrado com sucesso!", error: false})
      modalRef.current?.close();
    } catch (error) {
      showToast({title: "Erro ao cadastrar o familiar!", error: true});
    } finally {
      setLoading(false);
    }
  };


  return {
    states: {
      loading,
    },
    actions: {
      handleAddRelative,
    },
  };
};
