import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; // Importe corretamente

// Definindo os tipos das props
type CustomInputProps = {
    label: string;
    iconName: keyof typeof MaterialIcons.glyphMap; // Use o tipo correto para o ícone
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
};

// Aplicando o tipo CustomInputProps aos parâmetros do componente
export const CustomInput: React.FC<CustomInputProps> = ({ label, iconName, placeholder, value, onChangeText }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                />
                <MaterialIcons name={iconName} size={24} color="black" style={{marginRight: 10,}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginTop: 10,
        marginRight: 140,
    },
    inputArea: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    input: {
        width: '86%',
        height: '100%',
        borderRadius: 10,
        paddingLeft: 10,
    },
});