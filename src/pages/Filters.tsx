import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import supabase from "../services/supabase";

interface Player {
  Rk: string | number;
  Player: string;
  Age?: number;
  Team?: string;
  Position?: string;
  Points?: number;
  // Add other stats as needed
}

export default function Filters() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [sortBy, setSortBy] = useState<keyof Player>(
    (searchParams.get("sortBy") as keyof Player) || "Player"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    (searchParams.get("sortOrder") as "asc" | "desc") || "asc"
  );
  const [minAge, setMinAge] = useState<number | "">(
    searchParams.get("minAge") ? Number(searchParams.get("minAge")) : ""
  );
  const [maxAge, setMaxAge] = useState<number | "">(
    searchParams.get("maxAge") ? Number(searchParams.get("maxAge")) : ""
  );
  const [team, setTeam] = useState<string>(searchParams.get("team") || "");
  const [position, setPosition] = useState<string>(
    searchParams.get("position") || ""
  );
  const [minPoints, setMinPoints] = useState<number | "">(
    searchParams.get("minPoints") ? Number(searchParams.get("minPoints")) : ""
  );
  const [maxPoints, setMaxPoints] = useState<number | "">(
    searchParams.get("maxPoints") ? Number(searchParams.get("maxPoints")) : ""
  );
  const navigate = useNavigate();

  // Update URL when filters change
  useEffect(() => {
    const params: any = {};
    if (searchTerm) params.search = searchTerm;
    if (sortBy && sortBy !== "Player") params.sortBy = sortBy;
    if (sortOrder && sortOrder !== "asc") params.sortOrder = sortOrder;
    if (minAge !== "") params.minAge = minAge;
    if (maxAge !== "") params.maxAge = maxAge;
    if (team) params.team = team;
    if (position) params.position = position;
    if (minPoints !== "") params.minPoints = minPoints;
    if (maxPoints !== "") params.maxPoints = maxPoints;

    // Only update the URL if at least one param is set
    if (Object.keys(params).length > 0) {
      setSearchParams(params);
    } else {
      setSearchParams({});
    }
  }, [
    searchTerm,
    sortBy,
    sortOrder,
    minAge,
    maxAge,
    team,
    position,
    minPoints,
    maxPoints,
    setSearchParams,
  ]);

  // Fetch filtered players from Supabase
  useEffect(() => {
    async function fetchPlayers() {
      let query = supabase.from("PlayersData").select("*");

      if (searchTerm) {
        query = query.ilike("Player", `%${searchTerm}%`);
      }
      if (minAge !== "") {
        query = query.gte("Age", minAge);
      }
      if (maxAge !== "") {
        query = query.lte("Age", maxAge);
      }
      if (team) {
        query = query.eq("Team", team);
      }
      if (position) {
        query = query.eq("Position", position);
      }
      if (minPoints !== "") {
        query = query.gte("Points", minPoints);
      }
      if (maxPoints !== "") {
        query = query.lte("Points", maxPoints);
      }

      // Sorting
      query = query.order(sortBy as string, { ascending: sortOrder === "asc" });

      const { data, error } = await query;
      if (!error) setPlayers(data || []);
    }

    fetchPlayers();
  }, [
    searchTerm,
    sortBy,
    sortOrder,
    minAge,
    maxAge,
    team,
    position,
    minPoints,
    maxPoints,
  ]);

  // Get unique teams and positions for dropdowns
  const teams = Array.from(new Set(players.map((p) => p.Team).filter(Boolean)));
  const positions = Array.from(
    new Set(players.map((p) => p.Position).filter(Boolean))
  );

  return (
    <div>
      <div className="filters">
        <input
          type="number"
          placeholder="Min Age"
          value={minAge}
          onChange={(e) =>
            setMinAge(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        <input
          type="number"
          placeholder="Max Age"
          value={maxAge}
          onChange={(e) =>
            setMaxAge(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        <select value={team} onChange={(e) => setTeam(e.target.value)}>
          <option value="">All Teams</option>
          {teams.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="">All Positions</option>
          {positions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min Points"
          value={minPoints}
          onChange={(e) =>
            setMinPoints(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        <input
          type="number"
          placeholder="Max Points"
          value={maxPoints}
          onChange={(e) =>
            setMaxPoints(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>
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
            <option value="Age">Age</option>
            <option value="Team">Team</option>
            <option value="Position">Position</option>
            <option value="Points">Points</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="sort-order-btn"
          >
            {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>
      <div className="players-count">Showing {players.length} players</div>
      <ul className="players-list">
        {players.map((player) => (
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
