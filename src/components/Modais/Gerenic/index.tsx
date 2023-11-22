import React, {useCallback} from 'react';
import {Modalize} from 'react-native-modalize';
import {Center} from 'native-base';

import * as T from './types';


export const Modal: React.FC<T.ModalProps> = ({
  modalizeRef,
  title,
  children,
  handleClose,
  HeaderComponent,
  ...props
}) => {
  const onClose = useCallback(() => {
    handleClose && handleClose();
    modalizeRef.current?.close();
  }, [handleClose, modalizeRef]);

  return (
        <Modalize
          ref={modalizeRef}
          adjustToContentHeight
          childrenStyle={{
            paddingBottom: 20,
            position: 'relative',
          }}
          HeaderComponent={HeaderComponent}
          {...props}
          >
          <Center>{children}</Center>
        </Modalize>
  );
};
