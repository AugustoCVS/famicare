import { useNavigation } from "@react-navigation/native";
import { useDashboardContext } from "src/Context/Dashboard.context"; 
import { StackTypes } from "src/routes/stack.routes";

export const useMenu = () => {
  const navigation = useNavigation<StackTypes>();
  const { logoutFamily } = useDashboardContext(); 

  const handleLogout = async (): Promise<void> => {
    await logoutFamily(); 
    navigation.navigate("Home");
  };

  return {
    actions: {
      handleLogout,
    },
  };
};
