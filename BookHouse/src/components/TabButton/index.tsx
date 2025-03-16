import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface TabButtonProps {
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
    isActive: boolean;
    isMiddle?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, onPress, isActive, isMiddle }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, isActive && styles.activeButton, isMiddle && styles.middleButton]} 
            onPress={onPress}
        >
            <MaterialIcons name={icon} size={isMiddle ? 34 : 28} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
    },
    activeButton: {
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Sutil realce no botão ativo
        borderRadius: 12,
    },
    middleButton: {
        top: -30,
        backgroundColor: "#77BCA4",
        width: 70,
        height: 70,
        borderRadius: 35, // Mantém circular
        elevation: 8, // Sombra mais evidente no Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 4, // Melhor sombra no iOS
    },
});

export default TabButton;
