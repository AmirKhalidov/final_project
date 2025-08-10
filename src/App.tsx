import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Players from "./pages/Players";
import PlayerDetail from "./pages/PlayerDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Football Players Stats</h1>
        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/player/:rk" element={<PlayerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
