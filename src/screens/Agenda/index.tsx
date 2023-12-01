import { LinearGradient } from "expo-linear-gradient";
import { RefreshControl, Text, View } from "react-native";
import { ScrollView, Spinner } from "native-base";
import { useAgenda } from "./hook";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Button } from "src/components/Button";
import { ModalLoginRelative } from "src/screens/Dashboard/components/ModalLoginRelative";

export const Agenda: React.FC = () => {
  const { refs, states, actions } = useAgenda();

  function renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={states.refreshLoading}
        onRefresh={actions.refreshAgenda}
        tintColor={"#F6931F"}
      />
    );
  }

  const renderHeader = () => {
    return (
      <LinearGradient
        colors={["#FFAB48", "#F6931F", "#AF7A3C"]}
        className="w-full h-[120px] flex items-center justify-center p-8 pt-16"
      >
        <View className="flex flex-row items-center justify-between w-full h-10 gap-1 mt-1">
          <Text className="text-xl text-white-default font-bold text-center">
            {states.relativeName
              ? `Olá, ${states.relativeName}!`
              : `Olá, ${states.familyName}!`}
          </Text>
        </View>
      </LinearGradient>
    );
  };

  const renderPrescriptions = () => {
    return (
      <ScrollView
        className="w-full p-4 h-full"
        refreshControl={renderRefreshControl()}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-xl text-gray-default font-bold">Consultas</Text>

        {states.agenda.map((agenda) => {
          return (
            <View className="mt-4">
              <View className="w-full items-center justify-center mb-[-35px] z-10 ">
                <View className="flex items-center justify-center border border-gray-200 bg-orange-default rounded-full w-10 h-10">
                  <FontAwesome name="stethoscope" size={24} color="white" />
                </View>
              </View>
              <View
                className="flex flex-col items-start justify-between w-full gap-1 mt-4 border border-gray-200 rounded p-4"
                key={agenda.id}
              >
                <View className="flex flex-row items-center border-b gap-2 border-b-gray-200 w-full">
                  <FontAwesome5 name="book-medical" size={20} color="orange" />
                  <Text className="text-xl text-gray-default font-bold">
                    Data: {agenda.date}
                  </Text>
                </View>
                <Text className="p-1">
                  <Text className="font-bold">
                    <Ionicons name="medical-sharp" size={12} color="#F6931F" />{" "}
                    Tipo da Consulta:
                  </Text>{" "}
                  {agenda.type}
                </Text>
                <Text className="p-1">
                  <Text className="font-bold">
                    <Ionicons name="medical-sharp" size={12} color="#F6931F" />{" "}
                    Observações:
                  </Text>{" "}
                  {agenda.observations}
                </Text>

                <Text className="p-1">
                  <Text className="font-bold">
                    <Ionicons name="medical-sharp" size={12} color="#F6931F" />{" "}
                    Local:
                  </Text>{" "}
                  {agenda.local}
                </Text>

                <Text className="p-1">
                  <Text className="font-bold">
                    <Ionicons name="medical-sharp" size={12} color="#F6931F" />{" "}
                    Doutor(a):
                  </Text>{" "}
                  {agenda.doctor}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View className="flex flex-col h-full bg-white-default">
      {renderHeader()}

      {states.relativeId ? (
        states.loading ? (
          <View className="items-center justify-center h-full pb-40">
            <Spinner color={"#F6931F"} />
          </View>
        ) : (
          <>{renderPrescriptions()}</>
        )
      ) : (
        <View className="flex flex-col items-center justify-between mt-10 p-8">
          <Text className="text-xl font-bold text-gray-default">
            Para acessar a agenda, você precisa estar logado na conta de um
            familiar.
          </Text>

          <View className="h-24 mt-40">
          <Button
            className="flex flex-row items-center justify-center bg-white-100 w-[220px] flex-1 mx-4 mb-8 p-4 rounded-lg border border-orange-default"
            onPress={actions.handleOpenModalRelative}
          >
            <Text className="text-lg text-bold text-gray-default">
              Acesse sua conta
            </Text>
          </Button>
            </View>
        </View>
      )}

      <ModalLoginRelative modalRef={refs.modalLoginRelativeRef} />
    </View>
  );
};
