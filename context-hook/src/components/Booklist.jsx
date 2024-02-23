import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
const Booklist = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const theme = isLightTheme ? light : dark;

  const { isAuth } = useContext(AuthContext);

  return (
    <div
      style={{ color: theme.syntax, background: theme.bg }}
      className="book-list-wrapper"
    >
      {" "}
      {isAuth ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <div> You are not logged in. Please login to see the list. </div>
      )}
    </div>
  );
};

export default Booklist;
