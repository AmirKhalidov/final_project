import { useEffect, useState } from "react";
import "./App.css";
import { getPlayers } from "./services/apiPlayers";

interface Player {
  Rk: string | number;
  Player: string;
  // Add more fields based on your actual player data structure
  // For example:
  // Pos: string;
  // Age: number;
  // Tm: string;
  // G: number;
  // GS: number;
  // etc.
}

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<keyof Player>("Player");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    getPlayers().then((data) => {
      setPlayers(data);
      setFilteredPlayers(data);
    });
  }, []);

  useEffect(() => {
    let filtered = players.filter((player) =>
      player.Player.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort the filtered results
    filtered = filtered.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    setFilteredPlayers(filtered);
  }, [players, searchTerm, sortBy, sortOrder]);

  const handleSortChange = (field: keyof Player) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="app">
      <h1>Football Players Stats</h1>

      {/* Search Filter */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Sort Controls */}
        <div className="sort-controls">
          <label>Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as keyof Player)}
          >
            <option value="Player">Player Name</option>
            <option value="Rk">Rank</option>
            {/* Add more sorting options based on your data structure */}
          </select>

          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="sort-order-btn"
          >
            {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>

      {/* Players List */}
      <div className="players-count">
        Showing {filteredPlayers.length} of {players.length} players
      </div>

      <ul className="players-list">
        {filteredPlayers.map((player) => (
          <li key={player.Rk} className="player-item">
            <span className="player-rank">#{player.Rk}</span>
            <span className="player-name">{player.Player}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
