import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const NavigatorTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
    return (
        <View style={styles.TabArea}>
            {state.routes.map((route, index) => (
                <TouchableOpacity
                    key={route.key}
                    onPress={() => navigation.navigate(route.name)}
                    style={[
                        styles.tab,
                        state.index === index ? styles.activeTab : null,
                    ]}
                >
                    <Text>{route.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    TabArea: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#77BCA4",
        padding: 10,
    },
    tab: {
        padding: 10,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: "blue",
    },
});

export default NavigatorTabBar;
