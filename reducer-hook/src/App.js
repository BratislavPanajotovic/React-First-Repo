import CounterReducer from "./components/CounterReducer";
import BookList from "./components/BookList";
import BookContextProvider from "./context/BookContext";
import BookForm from "./components/BookForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <CounterReducer />{" "}
      <BookContextProvider>
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
