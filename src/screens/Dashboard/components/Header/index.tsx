import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "src/components/Button";
import { ModalEmergencyInfo } from "../ModalEmergencyInfo";
import { useDashboardHeader } from "./hook";

import * as T from "./types";

export const DashboardHeader: React.FC<T.dashboardHeaderProps> = ({
  modalLoginRelative
}) => {
  const { headerActions, headerStates } = useDashboardHeader({ modalLoginRelative });

  return (
    <LinearGradient
      colors={["#FFAB48", "#F6931F", "#AF7A3C"]}
      className="w-full h-[160px] flex items-center justify-center p-8 pt-16"
    >
      <View className="flex flex-row items-center justify-between w-full h-10 gap-1 mt-1 gap-1">
        <Text className="text-xl text-white-default font-bold text-center">
          {headerStates.relativeId ? "Olá, " + headerStates.relativeName : `Olá, ${headerStates.familyName}!`}
        </Text>

        <Button
          className="border border-gray-default bg-white-default w-2/5 rounded-lg flex items-center justify-center h-3/4"
          onPress={headerStates.relativeId ? headerActions.handleLogout : headerActions.openModalRelativeLogin}
        >
          <Text className="font-bold uppercase text-md text-orange-default">
            {headerStates.relativeId ? "Sair" : "Integrante"}
          </Text>
        </Button>
      </View>
    </LinearGradient>
  );
};
