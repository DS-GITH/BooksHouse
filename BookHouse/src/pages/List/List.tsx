import react from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BookBox } from '../../components/Revisar/BookBox';
import { BookList } from '../../components/Revisar/BookList';

export default function List() {
    return (
        <View style={styles.container}>
            <BookList />
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