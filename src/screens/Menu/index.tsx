import { View, Text, Pressable } from "react-native";
import { useMenu } from "./hook";

export const Menu: React.FC = () => {
  const { actions } = useMenu();

  return (
    <View className="flex items-center justify-center h-full">
      <Text>Menu</Text>
      <Pressable onPress={actions.handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};
