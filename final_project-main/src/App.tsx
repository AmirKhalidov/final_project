import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import PlayersList from "./components/PlayersList";
import Player from "./Player";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayersList />} />
        <Route path="/player/:Rk" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
