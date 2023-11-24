import { RefObject } from "react";
import {Modalize} from 'react-native-modalize';
import * as yup from 'yup';

import * as U from './utils'

export type ModalRegisterProps = {
    modalRef: RefObject<Modalize>;
}

export type useRegisterProps = yup.InferType<typeof U.signUpSchema>