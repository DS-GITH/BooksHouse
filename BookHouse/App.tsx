import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import  Login  from "./src/pages/Login/Login";
import routes from "./src/routes/index.routes";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <Login />
      
    </SafeAreaView>
  );
}
