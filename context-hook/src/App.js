import logo from "./logo.svg";
import BookContextProvider from "./context/BookContext";
import "./App.css";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
