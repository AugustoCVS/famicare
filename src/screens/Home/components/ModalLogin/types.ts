import {RefObject} from 'react';
import {Modalize} from 'react-native-modalize';
import * as yup from 'yup';

import * as U from './utils'

export type ModalLoginProps = {
  modalRef: RefObject<Modalize>;
}

export type useLoginProps = yup.InferType<typeof U.signInSchema>