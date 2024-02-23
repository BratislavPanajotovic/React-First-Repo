import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Catcher in the Rye" },
    { id: 2, title: "nepodnosljiva lakoca React-a" },
    { id: 3, title: "ubiti pticu rugalicu" },
  ]);

  return (
    <BookContext.Provider value={{ books: books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
