import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./Views/Login";
import Register from "./Views/Register";
import NavStackInit from "./Components/NavStackInit";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={'none'}>
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="NavStackInit" component={NavStackInit}/>
            </Stack.Navigator>
        </NavigationContainer>
        // <Login />
    );
}
