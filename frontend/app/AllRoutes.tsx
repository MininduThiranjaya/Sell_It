import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "./(tabs)/Login";

export default function AllRoutes() {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name='login' component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}