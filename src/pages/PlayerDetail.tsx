import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getFifaImageUrl,
  getPlayerByRank,
  getPlayerFromFifa,
} from "../services/apiPlayers";
import { getPlayerAnnotationFromAI } from "../services/AI";
import { fetchWikipediaImage } from "../services/profileDetails";

interface Player {
  [key: string]: any;
}

const statDescriptions: { [key: string]: string } = {
  // General Info
  Age: "Player's age",
  Born: "Year of birth",
  Nation: "Nationality",
  Squad: "Team/Squad",
  Comp: "Competition",
  Pos: "Position",
  MP: "Matches played",
  Starts: "Games started",
  Subs: "Substitute appearances",
  Min: "Minutes played",
  "Min%": "Percentage of team minutes played",
  Rk: "Rank",
  Player: "Player name",

  // Goals & Assists
  Gls: "Goals scored",
  Ast: "Assists",
  "G+A": "Goals plus Assists",
  "G-PK": "Non-penalty Goals",
  "G+A-PK": "Goals plus Assists minus Penalties",
  OG: "Own Goals",
  PK: "Penalty Kicks scored",
  PKatt: "Penalty Kicks attempted",
  PKwon: "Penalty Kicks won",
  PKcon: "Penalty Kicks conceded",
  PKm: "Penalty Kicks missed",
  PKsv: "Penalty Kicks saved",

  // Expected Stats
  xG: "Expected Goals (xG)",
  xA: "Expected Assists (xA)",
  xAG: "Expected Assisted Goals",
  "xG+xAG": "Expected Goals plus Expected Assisted Goals",
  npxG: "Non-penalty Expected Goals",
  "npxG+xAG": "Non-penalty Expected Goals plus xAG",
  "G-xG": "Goals minus Expected Goals",
  "A-xAG": "Assists minus Expected Assisted Goals",

  // Shooting
  Sh: "Shots",
  SoT: "Shots on Target",
  "Sh/90": "Shots per 90 minutes",
  "SoT/90": "Shots on Target per 90 minutes",
  "SoT%": "Percentage of Shots on Target",
  "G/Sh": "Goals per Shot",
  "G/SoT": "Goals per Shot on Target",

  // Passing
  KP: "Key Passes",
  Pass: "Passes",
  Cmp: "Completed Passes",
  "Cmp%": "Pass Completion Percentage",
  Ast_stats_passing: "Assists (Passing)",
  xAG_stats_passing: "Expected Assisted Goals (Passing)",
  PrgP: "Progressive Passes",
  TB: "Through Balls",
  Crs: "Crosses",
  CrsPA: "Crosses into Penalty Area",

  // Possession
  Carries: "Carries",
  PrgC: "Progressive Carries",
  PrgR: "Progressive Passes Received",
  Touches: "Touches",
  Live: "Live Ball Touches",
  Dead: "Dead Ball Touches",
  Att: "Attacks",
  "Att Pen": "Attacks in Penalty Area",
  "Att 3rd": "Attacks in Final Third",

  // Defense
  Tkl: "Tackles",
  TklW: "Tackles Won",
  "Tkl+Int": "Tackles plus Interceptions",
  Int: "Interceptions",
  Blocks: "Blocks",
  Clr: "Clearances",
  Err: "Errors",
  Recov: "Ball Recoveries",

  // Miscellaneous
  Fls: "Fouls Committed",
  Fld: "Fouls Drawn",
  Off: "Offsides",
  CrdY: "Yellow Cards",
  CrdR: "Red Cards",
  SCA: "Shot-Creating Actions",
  GCA: "Goal-Creating Actions",
  "On-Off": "Team goal difference when on/off the pitch",
  Dist: "Distance Covered",
  TotDist: "Total Distance",
  "90s": "Number of 90-minute intervals played",

  // Goalkeeping
  GA: "Goals Against",
  CS: "Clean Sheets",
  "Save%": "Save Percentage",
  Saves: "Saves",
  PKA: "Penalty Kicks Against",
  PSxG: "Post-Shot Expected Goals",
  "PSxG+/-": "Post-Shot Expected Goals minus Goals Allowed",

  // Advanced/Other
  "1/3": "Final Third Entries",
  "1/3_stats_possession": "Final Third Entries (Possession)",
  "2CrdY": "Second Yellow Cards",
  "#OPA": "Defensive Actions Outside Penalty Area",
  "#OPA/90": "Defensive Actions Outside Penalty Area per 90",
  "+/-": "Plus/Minus",
  "+/-90": "Plus/Minus per 90",
  "/90": "Per 90 Minutes",
  AvgDist: "Average Shot Distance",
  AvgLen: "Average Pass Length",
  Dis: "Dispossessed",
  Mis: "Miscontrols",
  Sw: "Switches",
  TI: "Throw-Ins",
  TO: "Turnovers",
  Thr: "Throws",
  Stp: "Stops",
  "Stp%": "Stop Percentage",
  Succ: "Successful Dribbles",
  "Succ%": "Dribble Success Percentage",
  Won: "Duels Won",
  "Won%": "Duels Won Percentage",
  Lost: "Duels Lost",
  Cmp_stats_passing_types: "Completed Passes (Passing Types)",
  // Add more as needed, based on your data
};

function PlayerDetail() {
  const { rk } = useParams<{ rk: string }>();
  const [player, setPlayer] = useState<Player | null>(null);
  const [annotation, setAnnotation] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");
  const [fifaProfile, setFifaProfile] = useState<object>({});

  console.log(player);

  useEffect(() => {
    getPlayerByRank(Number(rk)).then(setPlayer);
  }, [rk]);

  useEffect(() => {
    if (player) {
      getPlayerAnnotationFromAI(player).then(setAnnotation);
      fetchWikipediaImage(player?.Player).then(setProfileImage);
      getPlayerFromFifa(player?.Player).then(setFifaProfile);
      getFifaImageUrl(fifaProfile);
    }
  }, [player]);
  console.log(profileImage);
  console.log("fifaProfile", fifaProfile);

  if (!player) return <div>Player not found.</div>;

  const allStatEntries = Object.entries(player).filter(
    ([key]) => key !== "Player" && key !== "Rk"
  );

  return (
    <div>
      <h2>{player.Player}</h2>
      <p>
        <strong>Rank:</strong> {player.Rk}
      </p>
      {profileImage && (
        <img src={profileImage} alt={player.Player || "Player profile"} />
      )}
      {fifaProfile && (fifaProfile as any).url && (
        <img
          src={getFifaImageUrl(fifaProfile)}
          alt={fifaProfile?.Name || "FIFA profile"}
          style={{ maxWidth: "265px", margin: "1em 0" }}
        />
      )}
      {/* FIFA Profile Stats */}
      {fifaProfile && (
        <div
          style={{
            margin: "1em 0",
            padding: "1em",
            background: "#eaf7ff",
            borderRadius: "8px",
          }}
        >
          <strong>FIFA Stats:</strong>
          <ul>
            {Object.entries(fifaProfile)
              .filter(([key]) => key !== "ID" && key !== "url")
              .map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {String(value)}
                </li>
              ))}
          </ul>
        </div>
      )}
      <div
        style={{
          margin: "1em 0",
          padding: "1em",
          background: "#f6f6f6",
          borderRadius: "8px",
        }}
      >
        <strong>AI Annotation:</strong> {annotation || "Loading..."}
      </div>
      <ul>
        {allStatEntries.map(([key, value]) => (
          <li key={key} style={{ marginBottom: "0.5em" }}>
            <strong>{statDescriptions[key] || key}:</strong> {String(value)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerDetail;
