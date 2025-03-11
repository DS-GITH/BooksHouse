import { ImageSourcePropType } from "react-native";
import opoderdohabitocapa from "../assets/BookCapes/opoderdohabitocapa.png";

export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  cover: ImageSourcePropType; // Agora aceita imagens locais e URLs externas
  gen: string;
};




export const books: Book[] = [
  {
    id: "1",
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    description: "Um olhar sério sobre a ciência dos hábitos e como eles funcionam.",
    cover: require("../assets/BookCapes/opoderdohabitocapa.png"), // ✅ Correto para imagens locais
    gen: "Autoajuda",
  },
];


