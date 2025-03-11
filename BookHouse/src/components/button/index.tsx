import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";



type CustomButtonProps = {
    title: string;
    onPress: () => void;
};



export const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={style.buttonbox} onPress={GetLogin}>
                                    <Text style={style.button}> Entrar  </Text>
                                </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({ 
    buttonbox: {
        width: '90%',
        height: 50,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
