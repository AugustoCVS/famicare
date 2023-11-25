import { NavigationContainer } from "@react-navigation/native";
import TabComponent from "./tab.routes";

export default function Routes(){
    return(
        <NavigationContainer>
            <TabComponent />
        </NavigationContainer>
    )
}