import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface TabButtonProps {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
    isActive: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, onPress, isActive }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, isActive ? styles.activeButton : null]}
        >
            <MaterialIcons 
                name={icon} 
                size={24} 
                color={isActive ? "blue" : "black"} 
            />
            <Text style={[styles.text, isActive ? styles.activeText : null]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        paddingVertical: 10,
        flex: 1,
    },
    activeButton: {
        borderBottomWidth: 2,
        borderBottomColor: "blue",
    },
    text: {
        fontSize: 12,
        color: "black",
        marginTop: 4,
    },
    activeText: {
        color: "blue",
        fontWeight: "bold",
    },
});

export default TabButton;
