import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Players from "./pages/Players";
import PlayerDetail from "./pages/PlayerDetail";
import "./App.css";
import Filters from "./pages/Filters";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Players />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/player/:rk" element={<PlayerDetail />} />
        <Route path="/filters" element={<Filters />} />
      </Routes>
    </Router>
  );
}

export default App;
