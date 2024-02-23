import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookListItem from "./BookListItem";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <>
      {books.map((book) => (
        <BookListItem book={book} key={book.id} />
      ))}
    </>
  ) : (
    <div className="empty"> No more books to read</div>
  );
};

export default BookList;
