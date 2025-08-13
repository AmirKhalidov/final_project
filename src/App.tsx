import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Players from "./pages/Players";
import PlayerDetail from "./pages/PlayerDetail";
import "./App.css";
import Filters from "./pages/Filters";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Football Players Stats</h1>
        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/player/:rk" element={<PlayerDetail />} />
          <Route path="/filters" element={<Filters />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
