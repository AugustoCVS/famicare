import { View, Text, RefreshControl } from "react-native";
import { useHealthHistoric } from "./hook";
import { ScrollView, Spinner } from "native-base";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export const HealthHistoric = () => {
  const { states, actions } = useHealthHistoric();

  function renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={states.refreshLoading}
        onRefresh={actions.refreshHealthHistoric}
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
        <Text>Aqui você pode acompanhar seu histórico médico!</Text>
      </View>
    );
  };

  const renderHealthHistoric = () => {
    return (
      <View className="w-full p-4 h-full">
        {states.healthHistoric.map((historic) => {
          return (
            <View
              className="flex flex-col items-start justify-between w-full h-40 gap-1 mt-4 border border-gray-200 rounded p-4"
              key={historic.id}
            >
              <View className="flex flex-row items-center border-b gap-2 border-b-gray-200 w-full">
                <FontAwesome5 name="book-medical" size={20} color="orange" />
                <Text className="text-xl text-gray-default font-bold">
                  {historic.diagnostic}
                </Text>
              </View>
              <Text>
                <Text className="font-bold">
                  <Ionicons name="medical-sharp" size={12} color="#F6931F" />
                  Tratamento:
                </Text>{" "}
                {historic.treatment}
              </Text>
              <Text>
                <Text className="font-bold">
                  <Ionicons name="medical-sharp" size={12} color="#F6931F" />
                  Alergia:
                </Text>{" "}
                {historic.allergies}
              </Text>
              <Text>
                <Text className="font-bold">
                  <Ionicons name="medical-sharp" size={12} color="#F6931F" />
                  Resultado:
                </Text>{" "}
                {historic.results}
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
    >
      <View className="w-full h-20 p-8">{renderHeader()}</View>

      {states.loading ? (
        <View className="items-center justify-center h-full pb-40">
          <Spinner color={"#F6931F"} />
        </View>
      ) : (
        <>{renderHealthHistoric()}</>
      )}
    </ScrollView>
  );
};
