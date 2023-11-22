import React from "react";
import { FormControl, Input as NativeBaseInput } from 'native-base';

import * as T from "./types";


export const Input: React.FC<T.InputProps> = ({ placeholder, value, onChangeText, secureTextEntry, isInvalid, errorMessage }) => {
    const invalid = !!errorMessage || isInvalid

    return (
        <FormControl mb={4} isInvalid={invalid}>
            <NativeBaseInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                bg='gray.100'
                h={12}
                w={80}
                _focus={{
                    bg: 'gray.200',
                    borderWidth: 2,
                    borderColor: '#F6931F',
                }}
                _invalid={{
                    borderWidth: 2,
                    borderColor: 'red.500',
                }}
                borderWidth={1}
                borderColor={'#173042FC'}
                borderRadius={10}
                isInvalid={invalid}
            />

            <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        </FormControl>
    );

}