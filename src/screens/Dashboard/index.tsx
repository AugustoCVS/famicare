import React from "react";
import { View, Text, Pressable } from "react-native";
import { Fontisto, MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { useDashboard } from "./hook";
import { CTA } from "src/components/CTA";
import { DashboardHeader } from "./components/Header";
import { FlatList, ScrollView } from "native-base";
import { ModalEmergencyInfo } from "./components/ModalEmergencyInfo";

import * as U from "./utils";
import { AgendaSummary } from "./components/AgendaSummary";
import { ModalLoginRelative } from "./components/ModalLoginRelative";

export const Dashboard: React.FC = () => {
  const { refs, actions } = useDashboard();

  const renderAgendaummary = ({ item }) => {
    return (
      <AgendaSummary
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
        <DashboardHeader modalLoginRelative={refs.modalLoginRelative} />

        <View className="flex flex-col p-8">
          <View className="w-full flex flex-col items-center justify-center">

            <CTA
              label="Dados Emergenciais"
              icon={
                <Ionicons name="medical-sharp" size={26} color="#FFFFFF" />
              }
              onPress={actions.handleOpenModalEmergencyInfo}
              isEmergency
            />

            <CTA
              label="Histórico"
              icon={
                <FontAwesome5 name="notes-medical" size={26} color="#F6931F" />
              }
              onPress={actions.navigateToHealthHistoric}
            />

            <CTA
              label="Consultas"
              icon={<Fontisto name="doctor" size={26} color="#F6931F" />}
              onPress={actions.navigateToAppointments}
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
            data={U.UserMedicalAgenda}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={renderAgendaummary}
          />
        </View>
      </ScrollView>

      <ModalEmergencyInfo modalRef={refs.modalEmergencyInfoRef} />
      <ModalLoginRelative modalRef={refs.modalLoginRelative} />
    </>
  );
};
