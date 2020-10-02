import Book from "./Book";

class BookFactory {
  create(object) {
    return new Book(object);
  }

  createFromDB(objectFromDB) {
    const preparedBookJson = {
      title: objectFromDB.name,
      author: objectFromDB.by,
      pages: objectFromDB.nr_of_pages,
    };

    return new Book(preparedBookJson);
  }
}

export default new BookFactory();
