import React from "react";
import { View, Text, Pressable } from "react-native";
import { Fontisto, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { useDashboard } from "./hook";
import { CTA } from "src/components/CTA";
import { DashboardHeader } from "./components/Header";
import { FlatList, ScrollView } from "native-base";
import { ModalEmergencyInfo } from "./components/ModalEmergencyInfo";

import * as U from "./utils";
import { AppointmentsSummary } from "./components/AppointmentsSummary";

export const Dashboard: React.FC = () => {
  const { refs, actions } = useDashboard();

  const renderAppointmentSummary = ({ item }) => {
    return (
      <AppointmentsSummary
        day={item.day}
        doctor={item.doctor}
        hospital={item.hospital}
        type={item.type}
      />
    );
  };

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
              icon={
                <FontAwesome5 name="notes-medical" size={26} color="#F6931F" />
              }
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

        <View className="w-full">
          <Text className="text-lg text-bold text-gray-default mb-4 pl-4">
            Resumo dos agendamentos
          </Text>

          <FlatList
            horizontal
            data={U.UserMedicalAppointments}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={renderAppointmentSummary}
          />
        </View>
      </ScrollView>

      <ModalEmergencyInfo modalRef={refs.modalEmergencyInfoRef} />
    </>
  );
};
