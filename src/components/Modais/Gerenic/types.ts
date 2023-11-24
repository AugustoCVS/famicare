import {RefObject} from 'react';
import {Modalize} from 'react-native-modalize';

export interface ModalProps {
  modalizeRef: RefObject<Modalize>;
  title?: string;
  onClose?: () => void;
  children: React.ReactNode;
  handleClose?: () => void;
  HeaderComponent?: React.ReactNode;
}
