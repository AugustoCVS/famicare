import { RefreshControl, Text, View } from "react-native";
import { useAppointments } from "./hook";
import { ScrollView, Spinner } from "native-base";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export const Appointments: React.FC = () => {
  const { states, actions } = useAppointments();

  function renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={states.refreshLoading}
        onRefresh={actions.handleRefreshAppointments}
        tintColor={"#F6931F"}
      />
    );
  }

  const renderHeader = () => {
    return (
      <View className="flex flex-col items-start justify-between w-full h-10 gap-1 mt-1">
        <Text className="text-xl text-gray-default font-bold text-center">
          {`Olá, ${states.relativeName}!`}
        </Text>
        <Text>Aqui você pode acompanhar suas consultas realizadas!</Text>
      </View>
    );
  };

  const renderAppointments = () => {
    return (
      <View className="w-full p-4 h-full">
        {states.appointments.map((appointments) => {
          return (
            <View
              className="flex flex-col items-start justify-between w-full gap-1 mt-4 border border-gray-200 rounded p-4"
              key={appointments.id}
            >
              <View className="flex flex-row items-center border-b gap-2 border-b-gray-200 w-full">
                <FontAwesome5 name="book-medical" size={20} color="orange" />
                <Text className="text-xl text-gray-default font-bold">
                  Motivo: {' '}
                  {appointments.diagnostic}
                </Text>
              </View>
              <Text className="p-1">
                <Text className="font-bold">
                  <Ionicons name="medical-sharp" size={12} color="#F6931F" />
                  Tratamento:
                </Text>{" "}
                {appointments.treatment}
              </Text>
              <Text className="p-1">
                <Text className="font-bold">
                  <Ionicons name="medical-sharp" size={12} color="#F6931F" />
                  Medicamentos:
                </Text>{" "}
                {appointments.medicines}
              </Text>
              <Text className="p-1">
                <Text className="font-bold">
                  <Ionicons name="medical-sharp" size={12} color="#F6931F" />
                  Resultado:
                </Text>{" "}
                {appointments.results}
              </Text>

              <Text className="p-1">
                <Text className="font-bold">
                  <Ionicons name="medical-sharp" size={12} color="#F6931F" />
                  Observações:
                </Text>{" "}
                {appointments.observations}
              </Text>

              <Text className="p-1">
                <Text className="font-bold">
                  <Ionicons name="medical-sharp" size={12} color="#F6931F" />
                  Doutor(a):
                </Text>{" "}
                {appointments.doctor}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView
      className="flex flex-col h-full bg-white-default"
      refreshControl={renderRefreshControl()}
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full h-20 p-8">{renderHeader()}</View>

      {states.loading ? (
        <View className="items-center justify-center h-full pb-40">
          <Spinner color={"#F6931F"} />
        </View>
      ) : (
        <>{renderAppointments()}</>
      )}
    </ScrollView>
  );
};
