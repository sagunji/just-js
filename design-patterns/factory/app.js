import Book from "./domain/book/Book";
import BookFactory from "./domain/book/BookFactory";

const bookObjectFromDB = {
  name: "Clean Code",
  by: "Robert Cecil Martin",
  nr_of_pages: 503,
};

const book = BookFactory.createFromDB(bookObjectFromDB);

console.log(book instanceof Book);

console.log(book);
