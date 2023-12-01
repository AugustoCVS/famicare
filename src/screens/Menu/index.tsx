import { View, Text } from "react-native";
import { useMenu } from "./hook";
import { Button } from "src/components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "src/components/Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as T from "./types";
import * as U from "./utils";
import { Spinner } from "native-base";

export const Menu: React.FC = () => {
  const { states, actions } = useMenu();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T.useUpdateRelativeSchema>({
    resolver: yupResolver(U.updateRelativeSchema),
  });

  const renderFamilyProfile = () => {
    return (
      <View className="flex flex-col items-center justify-center mt-12">
        <View className="w-20 h-20 rounded-full bg-gray-200 items-center justify-center">
          <FontAwesome name="camera-retro" size={24} color="gray" />
        </View>

        <Text className="text-gray-default font-bold text-xl pt-4">
          {states.familyName}
        </Text>
      </View>
    );
  };

  const renderRelative = () => {
    return (
      <View className="flex flex-col items-center justify-center border border-gray-200 w-full p-4">
        <View className="w-20 h-20 rounded-full bg-gray-200 items-center justify-center">
          <FontAwesome name="camera-retro" size={24} color="gray" />
        </View>

        <View className="flex flex-col mt-4 w-80">
          {U.formFields.map((item) => (
            <Controller
              key={item.name}
              control={control}
              name={item.name as keyof T.useUpdateRelativeSchema}
              render={({ field: { onChange } }) => (
                <>
                  <Input
                    placeholder={states.relative[item.name]}
                    onChangeText={onChange}
                    errorMessage={errors[item.name]?.message}
                  />
                  {item.name === "password" && (
                    <Text className="text-gray-600 text-xs px-4 mb-4 text-center">
                      A senha deve conter letras maiúsculas e minúsculas,
                      números e um caractere especial.
                    </Text>
                  )}
                </>
              )}
            />
          ))}
        </View>

        <Button
          className="bg-orange-default flex items-center justify-center py-1 rounded-xl mt-12 w-80"
          onPress={handleSubmit(actions.handleUpdateRelative)}
        >
          <Text className="text-white-default font-bold text-xl">
            {states.updateLoading ? (
              <Spinner color="white" size="sm" />
            ) : (
              "Atualizar"
            )}
          </Text>
        </Button>
      </View>
    );
  };

  return (
    <View className="flex items-center justify-between h-full p-8">
      {renderFamilyProfile()}

      {states.relative && renderRelative()}

      <Button
        className="bg-orange-default flex items-center justify-center py-4 rounded-xl mt-12 w-80"
        onPress={actions.handleLogout}
      >
        <Text className="text-white-default font-bold text-xl">Sair</Text>
      </Button>
    </View>
  );
};
