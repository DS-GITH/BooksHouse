import react from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function User() {
    return (
        <View style={styles.container}>

            <View style={styles.uibox}>

                <View style={styles.boxtop}>

                </View>

                <View style={styles.boxmid}>

                </View>

                <View style={styles.boxbottom}>

                </View>

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
    uibox:{
        width: Dimensions.get('window').width/ 1.1,
        height: Dimensions.get('window').height / 1.2,
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
    boxtop:{
        width: '100%',
        height: Dimensions.get('window').height / 4,
        backgroundColor: 'blue',
    },
    boxmid:{
        width: '100%',
        height: Dimensions.get('window').height / 3,
        backgroundColor: 'red',
    },
    boxbottom:{
        width: '100%',
        height: Dimensions.get('window').height / 2,
        backgroundColor: 'green',
    }
})