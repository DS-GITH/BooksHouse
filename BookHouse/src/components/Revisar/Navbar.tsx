import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Navbar(){
    return (

        <View style={styles.container}>

            <TouchableOpacity style={styles.searchbox}>
                <FontAwesome name="search" size={30} color="white"/>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height/7,
        backgroundColor: "#77BCA4",
        justifyContent: "center",
        alignItems: "center",
    },
    searchbox: {
        width: 60,
        height: 60,
        backgroundColor: "#6A8D73",
        borderRadius: 100,
        borderColor: "#77BCA4",
        borderWidth: 5,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: -30,
        right: 20,
    },
    });