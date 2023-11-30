import { View, Text, RefreshControl } from "react-native";
import { useFamily } from "./hook";
import { Button } from "src/components/Button";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { ModalAddRelative } from "./components/ModalAddRelative";
import { Spinner } from "native-base";

export const Family: React.FC = () => {
  const { refs, states, actions } = useFamily();

  function renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={states.refreshLoading}
        onRefresh={actions.refreshFamily}
        tintColor={"#F6931F"}
      />
    );
  }

  function renderFamilyMembers() {
    return (
      <View>
        <ScrollView
          className="flex flex-col h-full p-6"
          refreshControl={renderRefreshControl()}
        >
          <Text className="text-xl text-gray-default font-bold">
            Membros da Familía
          </Text>
          {states.relatives.map((relative) => (
            <View
              className="flex flex-col items-start justify-between w-full gap-1 mt-1 border border-gray-default rounded-lg p-4"
              key={relative.id}
            >
              <Text className="text-lg text-gray-default font-bold">
                {relative.name}
              </Text>
              <Text>CPF: {relative.cpf}</Text>
              <Text>E-mail: {relative.email}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View className="w-full h-full">
      <LinearGradient
        colors={["#FFAB48", "#F6931F", "#AF7A3C"]}
        className="w-full h-[120px] flex items-center justify-center p-8 pt-16"
      >
        <View className="flex flex-row items-center justify-between w-full h-10 gap-1 mt-1">
          <Text className="text-xl text-white-default font-bold text-center">
            {`Olá, ${states.familyName}!`}
          </Text>

          <Button className="pr-4" onPress={actions.handleOpenModalAddRelative}>
            <Text className="text-lg text-white-default font-bold">
              <AntDesign name="adduser" size={26} color="white" />
            </Text>
          </Button>
        </View>
      </LinearGradient>
      {states.loading ? (
        <View className="items-center justify-center h-full pb-40">
          <Spinner color={"#F6931F"} />
        </View>
      ) : (
        <>{renderFamilyMembers()}</>
      )}
      <ModalAddRelative
        modalRef={refs.modalAddRelativeRef}
        token={states.token}
        familyId={states.familyId}
      />
    </View>
  );
};
