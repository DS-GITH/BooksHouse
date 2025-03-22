import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Inventory() {
    return (
        <View style={styles.container}>
            <View style={styles.invbox}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    invbox:{
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
})