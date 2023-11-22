import {useRef} from 'react';
import {Modalize} from 'react-native-modalize';

export const useHome = () => {
  const modalLoginRef = useRef<Modalize>(null);
  const modalRegisterRef = useRef<Modalize>(null);

  const handleOpenModalLogin = () => {
    modalLoginRef.current?.open();
  };

  const handleOpenModalRegister = () => {
    modalRegisterRef.current?.open();
  }

  return {
    refs: {
      modalLoginRef,
      modalRegisterRef,
    },
    actions: {
      handleOpenModalLogin,
      handleOpenModalRegister,
    },
  };
};
