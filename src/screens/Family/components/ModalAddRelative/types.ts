import { RefObject } from "react";
import {Modalize} from 'react-native-modalize';
import * as yup from 'yup';

import * as U from './utils'

export type ModalAddRelativeProps = {
    modalRef: RefObject<Modalize>;
    token: string;
    familyId: string;
}

export type useRegisterRelativeProps = yup.InferType<typeof U.addRelativeSchema>