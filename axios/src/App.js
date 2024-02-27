import "./App.css";
import GetUsers from "./components/GetUsers";
import PostUsers from "./components/PostUsers";
import DeleteUsers from "./components/DeleteUsers";
function App() {
  return (
    <div className="App">
      <GetUsers />
      <PostUsers />
      <DeleteUsers />
    </div>
  );
}

export default App;
