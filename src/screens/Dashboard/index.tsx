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

      <View className="w-full p-8 flex flex-col items-center justify-center">
        <CTA
          label="Consultas"
          icon={<Fontisto name="doctor" size={26} color="#F6931F" />}
          onPress={actions.test}
        />

        <CTA
          label="Exames"
          icon={<MaterialIcons name="science" size={26} color="#F6931F" />}
          onPress={actions.test}
        />

        <CTA
          label="Receitas"
          icon={<FontAwesome5 name="book-medical" size={26} color="#F6931F" />}
          onPress={actions.test}
        />
      </View>
    </View>
  );
};
