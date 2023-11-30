import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as T from "./types";
import * as U from "./utils";
import { Modal } from "src/components/Modais/Gerenic";
import { Pressable, View, Text } from "react-native";
import { Button } from "src/components/Button";
import { useModalLoginRelative } from "./hook";
import { Input } from "src/components/Input";
import { Spinner } from "native-base";

export const ModalLoginRelative: React.FC<T.ModalLoginRelativeProps> = ({
  modalRef,
}) => {
  const { states, actions } = useModalLoginRelative({ modalRef });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T.useLoginRelativeProps>({
    resolver: yupResolver(U.signInRelativeSchema),
  });

  const onClose = () => {
    modalRef.current.close();
  };

  return (
    <Modal
      modalizeRef={modalRef}
      HeaderComponent={
        <View className="flex justify-center items-center mt-4">
          <Text className="text-gray-default font-bold text-3xl">Login do Familiar</Text>

          <Pressable onPress={onClose} className="absolute right-4 top-1">
            <AntDesign name="close" size={30} color="black" />
          </Pressable>
        </View>
      }
    >
      <View className="flex flex-col mt-4 w-80">
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <View>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                onChangeText={onChange}
                errorMessage={errors.password?.message}
                secureTextEntry={states.secureTextEntry}
              />
            )}
          />

          <Pressable
            className="absolute right-4 top-3"
            onPress={actions.showPassword}
          >
            {states.secureTextEntry ? (
              <Entypo name="eye-with-line" size={24} color="#B3B3B3" />
            ) : (
              <AntDesign name="eyeo" size={24} color="#B3B3B3" />
            )}
          </Pressable>
        </View>
      </View>

      <Button
        className="bg-orange-default flex items-center justify-center py-4 rounded-xl mt-12 w-80"
        onPress={handleSubmit(actions.handleRelativeSignIng)}
      >
        <Text className="text-white-default font-bold text-xl">
          {states.loading ? <Spinner color="white" size="sm" /> : "Continuar"}
        </Text>
      </Button>
      <Pressable className="mt-4" onPress={actions.forgetPassword}>
        <Text className="text-gray-600">Esqueci a Senha</Text>
      </Pressable>
    </Modal>
  );
};
