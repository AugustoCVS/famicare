import React from "react";
import { View, Text, Pressable, RefreshControl } from "react-native";
import {
  Fontisto,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import { useDashboard } from "./hook";
import { CTA } from "src/components/CTA";
import { DashboardHeader } from "./components/Header";
import { FlatList, ScrollView, Skeleton } from "native-base";
import { ModalEmergencyInfo } from "./components/ModalEmergencyInfo";

import * as U from "./utils";
import { AgendaSummary } from "./components/AgendaSummary";
import { ModalLoginRelative } from "./components/ModalLoginRelative";

export const Dashboard: React.FC = () => {
  const { states, refs, actions } = useDashboard();

  function renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={states.refreshLoading}
        onRefresh={actions.renderRefresh}
        tintColor={"#F6931F"}
      />
    );
  }


  const renderAgendaSummary = ({ item }) => {
    return (
      <AgendaSummary
        date={item.date}
        doctor={item.doctor}
        local={item.local}
        type={item.type}
      />
    );
  };

  return (
    <>
      <View className="flex bg-white-default h-full w-full">
        <DashboardHeader modalLoginRelative={refs.modalLoginRelative} />

        <ScrollView showsVerticalScrollIndicator={false}
        refreshControl={renderRefreshControl()}
        >
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
                  <FontAwesome5
                    name="notes-medical"
                    size={26}
                    color="#F6931F"
                  />
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
                icon={
                  <MaterialIcons name="science" size={28} color="#F6931F" />
                }
                onPress={actions.navigateToExams}
              />

              <CTA
                label="Receitas"
                icon={
                  <FontAwesome5
                    name="laptop-medical"
                    size={22}
                    color="#F6931F"
                  />
                }
                onPress={actions.navigateToPrescriptions}
              />
            </View>
          </View>

          <View className="w-full">
            <Text className="text-lg text-bold text-gray-default mb-4 pl-4">
              Resumo dos agendamentos
            </Text>

            {states.loading ? (
              <View className="flex flex-row mb-8 mx-4">
                <Skeleton width={32} h={24} marginRight={4} borderRadius={8} />
                <Skeleton width={32} h={24} marginRight={4} borderRadius={8} />
                <Skeleton width={32} h={24} marginRight={4} borderRadius={8} />
              </View>
            ) : states.relativeId ? (
              <FlatList
                horizontal
                data={states.agenda}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={renderAgendaSummary}
              />
            ) : (
              <View className="flex flex-row mb-8 mx-4">
                <Pressable
                  className="flex flex-row items-center justify-center bg-white-100 w-[220px] flex-1 mx-4 mb-8 p-4 rounded-lg border border-orange-default"
                  onPress={actions.handleOpenModalLoginRelative}
                >
                  <Text className="text-lg text-bold text-gray-default">
                    Acesse sua conta
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        </ScrollView>
      </View>

      <ModalEmergencyInfo modalRef={refs.modalEmergencyInfoRef} />
      <ModalLoginRelative modalRef={refs.modalLoginRelative} />
    </>
  );
};
