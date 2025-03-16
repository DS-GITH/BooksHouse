import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pesquisa() {
    return (
        <View style={styles.container}>
            <Text>Pesquisar</Text>
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