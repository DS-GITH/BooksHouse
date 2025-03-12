import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function List() {
    return (
        <View style={styles.container}>
            <Text>Lista de Livros</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})