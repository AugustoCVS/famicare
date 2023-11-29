import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Modal } from "src/components/Modais/Gerenic";

import * as T from "./types";
import * as U from "./utils";
import { Pressable } from "native-base";

export const ModalEmergencyInfo: React.FC<T.ModalEmergencyInfoProps> = ({
  modalRef,
}) => {
  const onClose = () => {
    modalRef.current.close();
  };

  return (
    <Modal
      modalizeRef={modalRef}
      HeaderComponent={
        <View className="flex justify-center items-center mt-4">
          <Text className="text-gray-default font-bold text-2xl uppercase pt-1">
            Dados Emergencias
          </Text>

          <Pressable onPress={onClose} className="absolute right-4 top-1">
            <AntDesign name="close" size={30} color="black" />
          </Pressable>
        </View>
      }
    >
      <View className="w-full flex flex-col items-start p-4">
        {U.UserEmergencyInfo.map((item, index) => (
          <View className="flex flex-row w-full justify-between border-b-[1px] border-b-gray-default mt-4">
            <Text className="text-md text-gray-default font-bold text-center pt-4">
              {item.label}
            </Text>

            <Text className="text-md text-gray-default font-bold text-center pt-4 pl-4">
              {item.response}
            </Text>
          </View>
        ))}
      </View>
    </Modal>
  );
};
