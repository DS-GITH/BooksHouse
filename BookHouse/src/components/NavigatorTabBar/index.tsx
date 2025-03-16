import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabButton from "../TabButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const NavigatorTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
    return (
        <View style={styles.tabBarContainer}>
            <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
               const icons: Record<string, keyof typeof MaterialIcons.glyphMap> = {
                Livros: "menu-book",
                Inventory: "backpack",
                Usuário: "person",
            };

                    const isMiddle = route.name === "Inventory"; // Detecta a aba do meio

                    return (
                        <TabButton 
                            key={route.key}
                            icon={icons[route.name] || "help-outline"}
                            onPress={() => navigation.navigate(route.name)}
                            isActive={state.index === index}
                            isMiddle={isMiddle} 
                        />
                    );
                })}
            </View>
        </View>
    );
};
    const styles = StyleSheet.create({
        tabBarContainer: {
            alignItems: "center",
            backgroundColor: "transparent",
            paddingBottom: 10,
        },
        tabBar: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#2C2C2C",
            borderRadius: 20,
            paddingVertical: 15,
            width: "90%",
            alignSelf: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5, // Sombra para Android
        },
        tabItem: {
            flex: 1, // Faz os outros botões ocuparem o espaço corretamente
            alignItems: "center",
        },
        middleButtonWrapper: {
            flex: 1,

        },
    });

export default NavigatorTabBar;
