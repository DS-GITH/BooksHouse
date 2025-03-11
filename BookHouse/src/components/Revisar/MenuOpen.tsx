import React from "react";
import { View, Text, StyleSheet, Dimensions,} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function MenuOpen(){
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.iconbox}>
                <FontAwesome name="user" size={30} color="white"/>
                </View>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width/2.5,
        height: "100%",
        backgroundColor: "grey",

    },
    header:{
        height: "20%",
        width: "100%",
        backgroundColor: "#77BCA4",
        justifyContent: "center",
        alignItems: "center",
    },
    iconbox:{
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    });