import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "src/components/Button";

export const DashboardHeader: React.FC = () => {
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

        <Button className="border border-gray-default w-2/4 rounded-lg flex items-center justify-center">
          <Text className="text-md font-bold text-white-default">
            Histórico
          </Text>
        </Button>
      </View>
    </LinearGradient>
  );
};
