import {RefObject} from 'react';
import {Modalize} from 'react-native-modalize';
import * as yup from 'yup';

import * as U from './utils'

export type ModalLoginRelativeProps = {
  modalRef: RefObject<Modalize>;
}

export type useLoginRelativeProps = yup.InferType<typeof U.signInRelativeSchema>