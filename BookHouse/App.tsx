import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import  Login  from "./src/pages/Login/Login";
import Routes from "./src/routes/index.routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
   <NavigationContainer>

      <Routes />
    
   </NavigationContainer>
  )
}
