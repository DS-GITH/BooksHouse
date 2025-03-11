import React from "react";
import './gesture-handler';
import { SafeAreaView, StatusBar } from "react-native";
import { BookList } from "./src/components/Revisar/BookList";
import { Navbar } from "./src/components/Revisar/Navbar";
import { MenuOpen } from "./src/components/Revisar/MenuOpen";
import  Login  from "./src/pages/Login";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <Login />
      
    </SafeAreaView>
  );
}
