import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_AUTH } from "auth/FirebaseConfig";

export const useDashboard = () => {

  const handleLogout = async (): Promise<void> => {
    AsyncStorage.removeItem("@userToken");
    await FIREBASE_AUTH.signOut();
  };

  return {
    actions: {
      handleLogout,
    },
  };
};
