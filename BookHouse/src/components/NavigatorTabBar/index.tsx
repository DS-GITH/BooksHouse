import React from "react";
import {Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { NavigationState, NavigationProp } from "@react-navigation/native";

interface Props {
    state: NavigationState;
    navigation: NavigationProp<any>;
}

const NavigatorTabBar: React.FC<Props> = ({state, navigation}) => {
    return (

        <View style={style.TabArea}>

            <TouchableOpacity>
                <Text>Esquerda</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Centro</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Direita</Text>
            </TouchableOpacity>

        </View>
    );
}

const style = StyleSheet.create({
    TabArea:{
        flexDirection: 'row',

    },

});

export default NavigatorTabBar;