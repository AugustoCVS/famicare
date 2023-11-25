import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "src/routes/stack.routes";

export const useDashboard = () => {
  const navigation = useNavigation<StackTypes>();

  const test = () => {
    console.log("test");
  }

  return {
    actions: {
      test,
    },
  };
};
