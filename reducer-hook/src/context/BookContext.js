import { createContext, useReducer } from "react";
import { bookReducer } from "../reducer/bookReducer.js";

export const BookContext = createContext();
const defaultBooks = [
  { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 2, title: "nepodnosljiva lakoca React-a", author: "Dzoni K" },
  { id: 3, title: "ubiti pticu rugalicu", author: "Harper Li" },
];

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, defaultBooks);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
