import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./components/views/HomeView";
import LaunchesView from "./components/views/LaunchesView";
import RocketsView from "./components/views/RocketsView";
import ShipsView from "./components/views/ShipsView";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Launches" element={<LaunchesView />} />
          <Route path="/Rockets" element={<RocketsView />} />
          <Route path="/Ships" element={<ShipsView />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
