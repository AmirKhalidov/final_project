import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayerByRk } from "./services/apiPlayers";

function Player() {
  const [player, setPlayer] = useState<any>(null);
  const { Rk } = useParams();

  useEffect(() => {
    if (Rk) {
      getPlayerByRk(Rk).then((playerData) => setPlayer(playerData));
    }
  }, [Rk]);

  console.log("player", player);

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h2>{player.Player}</h2>

      {/* General Info */}
      <section>
        <h3>General Info</h3>
        <p>
          <strong>Rank:</strong> {player.Rk}
        </p>
        <p>
          <strong>Name:</strong> {player.Player}
        </p>
        <p>
          <strong>Nation:</strong> {player.Nation}
        </p>
        <p>
          <strong>Team/Club:</strong> {player.Squad}
        </p>
        <p>
          <strong>Age:</strong> {player.Age}
        </p>
        <p>
          <strong>Birth Year:</strong> {player.Born}
        </p>
        <p>
          <strong>Competition:</strong> {player.Comp}
        </p>
        <p>
          <strong>Position:</strong> {player.Pos}
        </p>
      </section>

      {/* Playing Time */}
      <section>
        <h3>⏱️ Playing Time</h3>
        <p>
          <strong>Matches Played:</strong> {player.MP}
        </p>
        <p>
          <strong>Starts:</strong> {player.Starts}
        </p>
        <p>
          <strong>Sub Appearances:</strong> {player.Subs}
        </p>
        <p>
          <strong>Minutes:</strong> {player.Min}
        </p>
        <p>
          <strong>90s Played:</strong> {player["90s"]}
        </p>
        <p>
          <strong>Minutes per Match:</strong> {player["Mn/MP"]}
        </p>
        <p>
          <strong>Minutes per Start:</strong> {player["Mn/Start"]}
        </p>
        <p>
          <strong>Times Unused Sub:</strong> {player.unSub}
        </p>
        <p>
          <strong>Minutes %:</strong> {player["Min%"]}
        </p>
        <p>
          <strong>Points per Match:</strong> {player.PPM}
        </p>
      </section>

      {/* Goal & Assist Output */}
      <section>
        <h3>🥅 Goal & Assist Output</h3>
        <p>
          <strong>Goals:</strong> {player.Gls}
        </p>
        <p>
          <strong>Assists:</strong> {player.Ast}
        </p>
        <p>
          <strong>Goals + Assists:</strong> {player["G+A"]}
        </p>
        <p>
          <strong>Goals + Assists (No PK):</strong> {player["G+A-PK"]}
        </p>
        <p>
          <strong>Goals (No PK):</strong> {player["G-PK"]}
        </p>
        <p>
          <strong>Penalty Goals:</strong> {player.PK}
        </p>
        <p>
          <strong>Penalty Attempts:</strong> {player.PKatt}
        </p>
      </section>

      {/* Shooting */}
      <section>
        <h3>🎯 Shooting</h3>
        <p>
          <strong>Shots:</strong> {player.Sh}
        </p>
        <p>
          <strong>Shots on Target:</strong> {player.SoT}
        </p>
        <p>
          <strong>Shot Accuracy:</strong> {player["SoT%"]}
        </p>
        <p>
          <strong>Shots per 90:</strong> {player["Sh/90"]}
        </p>
        <p>
          <strong>Goals per Shot:</strong> {player["G/Sh"]}
        </p>
        <p>
          <strong>Shot Distance:</strong> {player.Dist}
        </p>
        <p>
          <strong>Free Kick Goals:</strong> {player.FK}
        </p>
      </section>

      {/* xG & Advanced Goals */}
      <section>
        <h3>🧠 xG & Advanced Goals</h3>
        <p>
          <strong>xG:</strong> {player.xG}
        </p>
        <p>
          <strong>xAG:</strong> {player.xAG}
        </p>
        <p>
          <strong>xA:</strong> {player.xA}
        </p>
        <p>
          <strong>xG+xAG:</strong> {player["xG+xAG"]}
        </p>
        <p>
          <strong>Assist Overperformance (A-xAG):</strong> {player["A-xAG"]}
        </p>
        <p>
          <strong>Goal Overperformance (G-xG):</strong> {player["G-xG"]}
        </p>
        <p>
          <strong>Non-Penalty xG:</strong> {player.npxG}
        </p>
        <p>
          <strong>True Open Play Threat (npxG+xAG):</strong>{" "}
          {player["npxG+xAG"]}
        </p>
      </section>

      {/* Defense */}
      <section>
        <h3>🧱 Defense</h3>
        <p>
          <strong>Tackles:</strong> {player.Tkl}
        </p>
        <p>
          <strong>Interceptions:</strong> {player.Int}
        </p>
        <p>
          <strong>Clearances:</strong> {player.Clr}
        </p>
        <p>
          <strong>Errors:</strong> {player.Err}
        </p>
        <p>
          <strong>Blocks:</strong> {player.Blocks}
        </p>
      </section>

      {/* Possession & Passing */}
      <section>
        <h3>🏃 Possession & Passing</h3>
        <p>
          <strong>Touches:</strong> {player.Touches}
        </p>
        <p>
          <strong>Carries:</strong> {player.Carries}
        </p>
        <p>
          <strong>Progressive Carries:</strong> {player.PrgC}
        </p>
        <p>
          <strong>Total Passes:</strong> {player.Pass}
        </p>
        <p>
          <strong>Completed Passes:</strong> {player.Cmp}
        </p>
        <p>
          <strong>Pass Completion Rate:</strong> {player["Cmp%"]}
        </p>
        <p>
          <strong>Key Passes:</strong> {player.KP}
        </p>
        <p>
          <strong>Live Passes:</strong> {player.PassLive}
        </p>
        <p>
          <strong>Dead Ball Passes:</strong> {player.PassDead}
        </p>
        <p>
          <strong>Passes into Penalty Area:</strong> {player.PPA}
        </p>
        <p>
          <strong>Final Third Passes:</strong> {player["1/3"]}
        </p>
      </section>

      {/* Shot & Goal Creation */}
      <section>
        <h3>🧠 Shot & Goal Creation</h3>
        <p>
          <strong>Shot-Creating Actions (SCA):</strong> {player.SCA}
        </p>
        <p>
          <strong>Goal-Creating Actions (GCA):</strong> {player.GCA}
        </p>
        <p>
          <strong>SCA per 90:</strong> {player.SCA90}
        </p>
        <p>
          <strong>GCA per 90:</strong> {player.GCA90}
        </p>
        <p>
          <strong>Take-ons:</strong> {player.TO}
        </p>
      </section>

      {/* Goalkeeper Stats */}
      <section>
        <h3>🧤 Goalkeeper Stats</h3>
        <p>
          <strong>Goals Against:</strong> {player.GA}
        </p>
        <p>
          <strong>Shots on Target Against:</strong> {player.SoTA}
        </p>
        <p>
          <strong>Saves:</strong> {player.Saves}
        </p>
        <p>
          <strong>Save Rate:</strong> {player["Save%"]}
        </p>
        <p>
          <strong>Post-shot xG:</strong> {player.PSxG}
        </p>
        <p>
          <strong>Over/Under Expected Saves (PSxG+/-):</strong>{" "}
          {player["PSxG+/-"]}
        </p>
      </section>

      {/* Disciplinary & Misc */}
      <section>
        <h3>🧾 Disciplinary & Misc</h3>
        <p>
          <strong>Yellow Cards:</strong> {player.CrdY}
        </p>
        <p>
          <strong>Red Cards:</strong> {player.CrdR}
        </p>
        <p>
          <strong>Fouls Committed:</strong> {player.Fls}
        </p>
        <p>
          <strong>Fouls Drawn:</strong> {player.Fld}
        </p>
        <p>
          <strong>Offsides:</strong> {player.Off}
        </p>
        <p>
          <strong>Own Goals:</strong> {player.OG}
        </p>
      </section>
    </div>
  );
}

export default Player;
