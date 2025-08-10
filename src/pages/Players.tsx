import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPlayers } from "../services/apiPlayers";

interface Player {
  Rk: string | number;
  Player: string;
}

function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<keyof Player>("Player");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const navigate = useNavigate();

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

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="sort-controls">
          <label>Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as keyof Player)}
          >
            <option value="Player">Player Name</option>
            <option value="Rk">Rank</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="sort-order-btn"
          >
            {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>
      <div className="players-count">
        Showing {filteredPlayers.length} of {players.length} players
      </div>
      <ul className="players-list">
        {filteredPlayers.map((player) => (
          <li
            key={player.Rk}
            className="player-item"
            onClick={() => navigate(`/player/${player.Rk}`)}
            style={{ cursor: "pointer" }}
          >
            <span className="player-rank">#{player.Rk}</span>
            <span className="player-name">{player.Player}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Players;
