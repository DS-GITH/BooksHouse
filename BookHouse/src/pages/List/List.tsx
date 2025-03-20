import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function List() {
    return (
        <View style={styles.container}>

            <View style={styles.ListArea}>
            
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
    ListArea: {
        width: '90%',
        height: '100%',

    },
})