import React from "react";
import { View, Text, Image, StyleSheet, } from "react-native";
import { Book } from "../../data/books";



type BookitemProps = {
    book: Book;
};

export function BookBox({ book }: { book: Book }) {
  return (
        <View style={styles.container}>

            <Image source={book.cover} style={styles.cover} />
            

            
            <View style={styles.info}>
              
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text style={styles.description}>{book.description}</Text>
                <Text style={styles.gen}>{book.gen}</Text>
                

            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#F0F0F0",
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#B0B0B0",
        
      },
      cover: {
        width: 60,
        height: 90,
        borderRadius: 4,
      },
      info: {
        marginLeft: 10,
        flex: 1,
      },
      title: {
        fontSize: 16,
        fontWeight: "bold",
      },
      author: {
        fontSize: 14,
        color: "#666",
      },
      description: {
        fontSize: 12,
        color: "#999",
      },
      gen:{
        fontSize: 11,
        color: "black",

      },
    });
