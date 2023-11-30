import {RefObject} from 'react';
import {Modalize} from 'react-native-modalize';
import * as yup from 'yup';

import * as U from './utils'

export type ModalLoginProps = {
  modalRef: RefObject<Modalize>;
}

export type FamilyProps = {
  familyName: string;
  familyId: string;
  token: string;
}

export type JwtfamilyPayload = {
  id: string;
  name: string;
}

export type useLoginProps = yup.InferType<typeof U.signInSchema>