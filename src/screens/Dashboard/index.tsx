import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  Fontisto,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { useDashboard } from "./hook";
import { CTA } from "src/components/CTA";
import { DashboardHeader } from "./components/Header";
import { ScrollView } from "native-base";
import { ModalEmergencyInfo } from "./components/ModalEmergencyInfo";

export const Dashboard: React.FC = () => {
  const { refs, actions } = useDashboard();

  return (
    <>
      <ScrollView
        className="flex bg-white-default h-full w-full"
        showsVerticalScrollIndicator={false}
      >
        <DashboardHeader modalEmergencyInfoRef={refs.modalEmergencyInfoRef} />

        <View className="flex flex-col p-8">
          <View className="w-full flex flex-col items-center justify-center">
            <CTA
              label="Histórico"
              icon={<FontAwesome5 name="notes-medical" size={26} color="#F6931F" />}
              onPress={actions.test}
            />

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
      </ScrollView>

      <ModalEmergencyInfo modalRef={refs.modalEmergencyInfoRef} />
    </>
  );
};
