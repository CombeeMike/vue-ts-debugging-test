import Author from "@/types/Author";
import Book from "@/types/Book";

export const authors: Author[] = [
  {
    id: 0,
    name: "Ernest Hemingway",
  },
  {
    id: 1,
    name: "J.K. Rowling",
  },
  {
    id: 2,
    name: "George Orwell",
  },
];

export const books: Book[] = [
  {
    id: 0,
    authorId: 0,
    name: "In Our Time",
  },
  {
    id: 1,
    authorId: 0,
    name: "The Old Man and the Sea",
  },
  {
    id: 2,
    authorId: 0,
    name: "The Christmas Pic",
  },
  {
    id: 3,
    authorId: 1,
    name: "Harry Potter",
  },
  {
    id: 4,
    authorId: 1,
    name: "The Casual Vacancy",
  },
  {
    id: 5,
    authorId: 2,
    name: "Animal Fram",
  },
  {
    id: 6,
    authorId: 2,
    name: "Nineteen Eighty-Four",
  },
  {
    id: 7,
    authorId: 2,
    name: "Burmese Days",
  },
  {
    id: 8,
    authorId: 2,
    name: "A Clergyman's Daugher",
  },
];
