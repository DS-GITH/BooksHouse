import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabButton from "../TabButton/index"; // Importando o novo componente
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const icons: Record<string, keyof typeof MaterialIcons.glyphMap> = {
    Livros: "menu-book",
    Pesquisa: "search",
    Usuário: "person",
};

const NavigatorTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
    return (
        <View style={styles.tabArea}>
            {state.routes.map((route, index) => (
                <TabButton
                    key={route.key}
                    icon={icons[route.name] || "help-outline"}
                    label={route.name}
                    onPress={() => navigation.navigate(route.name)}
                    isActive={state.index === index}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    tabArea: {
        flexDirection: "row",
        backgroundColor: "#77BCA4",
        padding: 10,
        elevation: 5,
    },
});

export default NavigatorTabBar;
