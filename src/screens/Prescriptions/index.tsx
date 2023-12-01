import { RefreshControl, Text, View } from "react-native";
import { usePrescriptions } from "./hook";
import { ScrollView, Spinner } from "native-base";
import React from "react";
import { FontAwesome5, Ionicons, Fontisto } from "@expo/vector-icons";

export const Prescriptions: React.FC = () => {
  const { states, actions } = usePrescriptions();

  function renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={states.refreshLoading}
        onRefresh={actions.refreshPrescriptions}
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
        <Text>Aqui você pode ter acesso as suas receitas!</Text>
      </View>
    );
  };

  const renderPrescriptions = () => {
    return (
      <View className="w-full p-4 h-full">
        {states.prescriptions.map((prescriptions) => {
          return (
            <View className="mt-4">
              <View className="w-full items-center justify-center mb-[-35px] z-10 ">
                <View className="flex items-center justify-center border border-gray-200 bg-orange-default rounded-full w-10 h-10">
                  <Fontisto name="prescription" size={24} color="white" />
                </View>
              </View>
              <View
                className="flex flex-col items-start justify-between w-full gap-1 mt-4 border border-gray-200 rounded p-4"
                key={prescriptions.id}
              >
                <View className="flex flex-row items-center border-b gap-2 border-b-gray-200 w-full">
                  <FontAwesome5 name="book-medical" size={20} color="orange" />
                  <Text className="text-xl text-gray-default font-bold">
                    Data: {prescriptions.date}
                  </Text>
                </View>
                <Text className="p-1">
                  <Text className="font-bold">
                    <Ionicons name="medical-sharp" size={12} color="#F6931F" />{" "}
                    Medicamentos:
                  </Text>{" "}
                  {prescriptions.medicine}
                </Text>
                <Text className="p-1">
                  <Text className="font-bold">
                    <Ionicons name="medical-sharp" size={12} color="#F6931F" />{" "}
                    Dosagem:
                  </Text>{" "}
                  {prescriptions.dosage}
                </Text>

                <Text className="p-1">
                  <Text className="font-bold">
                    <Ionicons name="medical-sharp" size={12} color="#F6931F" />{" "}
                    Duration:
                  </Text>{" "}
                  {prescriptions.duration}
                </Text>

                <Text className="p-1">
                  <Text className="font-bold">
                    <Ionicons name="medical-sharp" size={12} color="#F6931F" />{" "}
                    Instruções:
                  </Text>{" "}
                  {prescriptions.instructions}
                </Text>

                <Text className="p-1">
                  <Text className="font-bold">
                    <Ionicons name="medical-sharp" size={12} color="#F6931F" />{" "}
                    Doutor(a):
                  </Text>{" "}
                  {prescriptions.doctor}
                </Text>
              </View>
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
        <>{renderPrescriptions()}</>
      )}
    </ScrollView>
  );
};
