import React from "react";
import { View, Text, Pressable } from "react-native";
import { Fontisto, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { useDashboard } from "./hook";
import { CTA } from "src/components/CTA";
import { DashboardHeader } from "./components/Header";

export const Dashboard: React.FC = () => {
  const { actions } = useDashboard();

  return (
    <View className="flex bg-white-default h-full w-full">
      <DashboardHeader />

      <View className="flex flex-col p-8">
        <View className="w-full bg-orange-default rounded-md">
          <Text className="text-xl text-white-default font-bold text-center pt-4">
            Informações para Emergências
          </Text>

          <View className="flex flex-col items-start p-4">
            <Text className="text-md text-white-default font-bold text-center pt-4">
              Tipo Sanguíneo:
            </Text>
            <Text className="text-md text-white-default font-bold text-center pt-4">
              Alergias:
            </Text>
            <Text className="text-md text-white-default font-bold text-center pt-4">
              Medicamentos:
            </Text>
          </View>
        </View>

        <View className="w-full flex flex-col items-center justify-center">
          <CTA
            label="Consultas"
            icon={<Fontisto name="doctor" size={26} color="#F6931F" />}
            onPress={actions.test}
          />

          <CTA
            label="Exames"
            icon={<MaterialIcons name="science" size={28} color="#F6931F" />}
            onPress={actions.test}
          />

          <CTA
            label="Receitas"
            icon={
              <FontAwesome5 name="laptop-medical" size={22} color="#F6931F" />
            }
            onPress={actions.test}
          />
        </View>
      </View>
    </View>
  );
};
