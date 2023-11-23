import { View, Text, Pressable } from "react-native";
import { useDashboard } from "./hook";

export const Dashboard: React.FC = () => {
    const {actions} = useDashboard();

    return (
        <View className="flex items-center justify-center h-full">
        <Text>Dashboard</Text>
        <Pressable onPress={actions.handleLogout}>
            <Text>Logout</Text>
        </Pressable>
        </View>
    );
}