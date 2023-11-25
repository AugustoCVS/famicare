import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "src/components/Button";
import { ModalEmergencyInfo } from "../ModalEmergencyInfo";
import { useDashboardHeader } from "./hook";

import * as T from "./types";

export const DashboardHeader: React.FC<T.dashboardHeaderProps> = ({ modalEmergencyInfoRef }) => {
  const { headerActions } = useDashboardHeader({ modalEmergencyInfoRef });

  return (
    <LinearGradient
      colors={["#FFAB48", "#F6931F", "#603D14"]}
      className="w-full h-[160px] flex items-start justify-center p-8 pt-16"
    >
      <Text className="text-xl text-white-default font-bold text-center pt-4">
        Olá, Bem vindo ao Famicare!
      </Text>

      <View className="flex flex-row w-full h-10 gap-1 mt-1">
        <Button className="border border-gray-default w-2/4 rounded-lg flex items-center justify-center">
          <Text className="text-md font-bold text-white-default">
            Carteirinha
          </Text>
        </Button>

        <Button className="border border-gray-default w-2/4 rounded-lg flex items-center justify-center"
        onPress={headerActions.openModalEmergencyInfo}
        >
          <Text className="text-xs font-bold text-white-default uppercase">
          Emergências
          </Text>
        </Button>
      </View>
    </LinearGradient>
  );
};
