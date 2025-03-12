import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../pages/Login/Login";

export default function routes() {
    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator>

            <Stack.Screen 
            name="Login"
            component={Login}
            
            />


        </Stack.Navigator>
    )
}