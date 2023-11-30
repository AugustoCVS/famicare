import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Modal } from "src/components/Modais/Gerenic";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { useModalAddRelative } from "./hook";

import * as T from "./types";
import * as U from "./utils";
import { Spinner } from "native-base";

export const ModalAddRelative: React.FC<T.ModalAddRelativeProps> = ({ modalRef, token }) => {
  const { states, actions } = useModalAddRelative({modalRef, token});
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T.useRegisterRelativeProps>({
    resolver: yupResolver(U.addRelativeSchema)
  });

  const onClose = (): void => {
    modalRef.current.close();
  };

  return (
    <Modal
      modalizeRef={modalRef}
      HeaderComponent={
        <View className="flex justify-center items-center mt-4">
          <Text className="text-gray-default font-bold text-3xl">Cadastro do Familiar</Text>

          <Pressable onPress={onClose} className="absolute right-4 top-1">
            <AntDesign name="close" size={30} color="black" />
          </Pressable>
        </View>
      }
    >
      <ScrollView
        className="flex flex-col mt-4 w-80"
        style={{ maxHeight: 400 }}
        showsVerticalScrollIndicator={false}
      >
        {U.formFields.map((item) => (
          <Controller
            key={item.name}
            control={control}
            name={item.name as keyof T.useRegisterRelativeProps}
            render={({ field: { onChange } }) => (
              <>
                <Input
                  placeholder={item.placeholder}
                  onChangeText={onChange}
                  errorMessage={errors[item.name]?.message}
                />
                {item.name === "password" && (
                  <Text className="text-gray-600 text-xs px-4 mb-4 text-center">
                    A senha deve conter letras maiúsculas e minúsculas, números
                    e um caractere especial.
                  </Text>
                )}
              </>
            )}
          />
        ))}
      </ScrollView>
      <Button
        className="bg-orange-default flex items-center justify-center py-4 rounded-xl mt-12 mb-6 w-80"
        onPress={handleSubmit(actions.handleAddRelative)}
      >
        <Text className="text-white-default font-bold text-xl">
          {states.loading ? <Spinner color="white" size='sm' /> : "Cadastrar"}
        </Text>
      </Button>
    </Modal>
  );
};
