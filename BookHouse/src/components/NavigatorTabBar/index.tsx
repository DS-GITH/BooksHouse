import React from "react";
import {Text} from "react-native";
import { NavigationState, NavigationProp } from "@react-navigation/native";

interface Props {
    state: NavigationState;
    navigation: NavigationProp<any>;
}

const NavigatorTabBar: React.FC<Props> = ({state, navigation}) => {
    return (
        <Text>

        </Text>
    );
}

export default NavigatorTabBar;