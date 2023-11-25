import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "src/routes/stack.routes";

export const useMenu = () => {
  const navigation = useNavigation<StackTypes>();

  const handleLogout = async (): Promise<void> => {
    AsyncStorage.removeItem("@userToken");
    navigation.navigate("Home");
  };

  return {
    actions: {
      handleLogout,
    },
  };
};
