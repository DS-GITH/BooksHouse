import React from "react";
import { View, Text, Image, StyleSheet,FlatList } from "react-native";
import { Book, books } from "../../data/books";
import { BookBox } from "./BookBox";

export function BookList(){
    return (
        <View style={styles.container}>
            <FlatList
            data={books} // Array de livros
            keyExtractor={(item) => item.id} // Chave única para cada item
            renderItem={({ item }) => <BookBox book={item} />}
            contentContainerStyle={styles.listContent} // Estilização da lista
        
            />
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#white",
    padding: 10,
    marginTop: "20%",
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#B0B0B0",
    marginBottom: "20%",
  },
  listContent: {
    paddingBottom: 20,
  },
});