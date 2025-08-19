// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   getFifaImageUrl,
//   getPlayerByRank,
//   getPlayerFromFifa,
// } from "../services/apiPlayers";
// import { getPlayerAnnotationFromAI } from "../services/AI";
// import { fetchWikipediaImage } from "../services/profileDetails";

// interface Player {
//   [key: string]: any;
// }

// const statDescriptions: { [key: string]: string } = {
//   // General Info
//   Age: "Player's age",
//   Born: "Year of birth",
//   Nation: "Nationality",
//   Squad: "Team/Squad",
//   Comp: "Competition",
//   Pos: "Position",
//   MP: "Matches played",
//   Starts: "Games started",
//   Subs: "Substitute appearances",
//   Min: "Minutes played",
//   "Min%": "Percentage of team minutes played",
//   Rk: "Rank",
//   Player: "Player name",

//   // Goals & Assists
//   Gls: "Goals scored",
//   Ast: "Assists",
//   "G+A": "Goals plus Assists",
//   "G-PK": "Non-penalty Goals",
//   "G+A-PK": "Goals plus Assists minus Penalties",
//   OG: "Own Goals",
//   PK: "Penalty Kicks scored",
//   PKatt: "Penalty Kicks attempted",
//   PKwon: "Penalty Kicks won",
//   PKcon: "Penalty Kicks conceded",
//   PKm: "Penalty Kicks missed",
//   PKsv: "Penalty Kicks saved",

//   // Expected Stats
//   xG: "Expected Goals (xG)",
//   xA: "Expected Assists (xA)",
//   xAG: "Expected Assisted Goals",
//   "xG+xAG": "Expected Goals plus Expected Assisted Goals",
//   npxG: "Non-penalty Expected Goals",
//   "npxG+xAG": "Non-penalty Expected Goals plus xAG",
//   "G-xG": "Goals minus Expected Goals",
//   "A-xAG": "Assists minus Expected Assisted Goals",

//   // Shooting
//   Sh: "Shots",
//   SoT: "Shots on Target",
//   "Sh/90": "Shots per 90 minutes",
//   "SoT/90": "Shots on Target per 90 minutes",
//   "SoT%": "Percentage of Shots on Target",
//   "G/Sh": "Goals per Shot",
//   "G/SoT": "Goals per Shot on Target",

//   // Passing
//   KP: "Key Passes",
//   Pass: "Passes",
//   Cmp: "Completed Passes",
//   "Cmp%": "Pass Completion Percentage",
//   Ast_stats_passing: "Assists (Passing)",
//   xAG_stats_passing: "Expected Assisted Goals (Passing)",
//   PrgP: "Progressive Passes",
//   TB: "Through Balls",
//   Crs: "Crosses",
//   CrsPA: "Crosses into Penalty Area",

//   // Possession
//   Carries: "Carries",
//   PrgC: "Progressive Carries",
//   PrgR: "Progressive Passes Received",
//   Touches: "Touches",
//   Live: "Live Ball Touches",
//   Dead: "Dead Ball Touches",
//   Att: "Attacks",
//   "Att Pen": "Attacks in Penalty Area",
//   "Att 3rd": "Attacks in Final Third",

//   // Defense
//   Tkl: "Tackles",
//   TklW: "Tackles Won",
//   "Tkl+Int": "Tackles plus Interceptions",
//   Int: "Interceptions",
//   Blocks: "Blocks",
//   Clr: "Clearances",
//   Err: "Errors",
//   Recov: "Ball Recoveries",

//   // Miscellaneous
//   Fls: "Fouls Committed",
//   Fld: "Fouls Drawn",
//   Off: "Offsides",
//   CrdY: "Yellow Cards",
//   CrdR: "Red Cards",
//   SCA: "Shot-Creating Actions",
//   GCA: "Goal-Creating Actions",
//   "On-Off": "Team goal difference when on/off the pitch",
//   Dist: "Distance Covered",
//   TotDist: "Total Distance",
//   "90s": "Number of 90-minute intervals played",

//   // Goalkeeping
//   GA: "Goals Against",
//   CS: "Clean Sheets",
//   "Save%": "Save Percentage",
//   Saves: "Saves",
//   PKA: "Penalty Kicks Against",
//   PSxG: "Post-Shot Expected Goals",
//   "PSxG+/-": "Post-Shot Expected Goals minus Goals Allowed",

//   // Advanced/Other
//   "1/3": "Final Third Entries",
//   "1/3_stats_possession": "Final Third Entries (Possession)",
//   "2CrdY": "Second Yellow Cards",
//   "#OPA": "Defensive Actions Outside Penalty Area",
//   "#OPA/90": "Defensive Actions Outside Penalty Area per 90",
//   "+/-": "Plus/Minus",
//   "+/-90": "Plus/Minus per 90",
//   "/90": "Per 90 Minutes",
//   AvgDist: "Average Shot Distance",
//   AvgLen: "Average Pass Length",
//   Dis: "Dispossessed",
//   Mis: "Miscontrols",
//   Sw: "Switches",
//   TI: "Throw-Ins",
//   TO: "Turnovers",
//   Thr: "Throws",
//   Stp: "Stops",
//   "Stp%": "Stop Percentage",
//   Succ: "Successful Dribbles",
//   "Succ%": "Dribble Success Percentage",
//   Won: "Duels Won",
//   "Won%": "Duels Won Percentage",
//   Lost: "Duels Lost",
//   Cmp_stats_passing_types: "Completed Passes (Passing Types)",
//   // Add more as needed, based on your data
// };

// function PlayerDetail() {
//   const { rk } = useParams<{ rk: string }>();
//   const [player, setPlayer] = useState<Player | null>(null);
//   const [annotation, setAnnotation] = useState<string>("");
//   const [profileImage, setProfileImage] = useState<string>("");
//   const [fifaProfile, setFifaProfile] = useState<object>({});
//   const [fifaProfileImage, setFifaProfileImage] = useState<string>("");

//   console.log(player);

//   useEffect(() => {
//     getPlayerByRank(Number(rk)).then(setPlayer);
//   }, [rk]);

//   useEffect(() => {
//     if (player) {
//       getPlayerAnnotationFromAI(player).then(setAnnotation);
//       fetchWikipediaImage(player?.Player).then(setProfileImage);
//       getPlayerFromFifa(player?.Player).then(setFifaProfile);
//       setFifaProfileImage(getFifaImageUrl(fifaProfile));
//     }
//   }, [player, fifaProfile]);
//   console.log(profileImage);
//   console.log("fifaProfile", fifaProfile);

//   if (!player) return <div>Player not found.</div>;

//   const allStatEntries = Object.entries(player).filter(
//     ([key]) => key !== "Player" && key !== "Rk"
//   );

//   return (
//     <div>
//       <h2>{player.Player}</h2>
//       <p>
//         <strong>Rank:</strong> {player.Rk}
//       </p>
//       {profileImage && (
//         <img src={profileImage} alt={player.Player || "Player profile"} />
//       )}
//       {fifaProfile && (fifaProfile as any).url && (
//         <img
//           src={fifaProfileImage}
//           alt={fifaProfile?.Name || "FIFA profile"}
//           style={{ maxWidth: "265px", margin: "1em 0" }}
//         />
//       )}
//       {/* FIFA Profile Stats */}
//       {fifaProfile && (
//         <div
//           style={{
//             margin: "1em 0",
//             padding: "1em",
//             background: "#eaf7ff",
//             borderRadius: "8px",
//           }}
//         >
//           <strong>FIFA Stats:</strong>
//           <ul>
//             {Object.entries(fifaProfile)
//               .filter(([key]) => key !== "ID" && key !== "url")
//               .map(([key, value]) => (
//                 <li key={key}>
//                   <strong>{key}:</strong> {String(value)}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       )}
//       <div
//         style={{
//           margin: "1em 0",
//           padding: "1em",
//           background: "#f6f6f6",
//           borderRadius: "8px",
//         }}
//       >
//         <strong>AI Annotation:</strong> {annotation || "Loading..."}
//       </div>
//       <ul>
//         {allStatEntries.map(([key, value]) => (
//           <li key={key} style={{ marginBottom: "0.5em" }}>
//             <strong>{statDescriptions[key] || key}:</strong> {String(value)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PlayerDetail;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  getFifaImageUrl,
  getPlayerByRank,
  getPlayerFromFifa,
} from "@/services/apiPlayers";
import { getPlayerAnnotationFromAI } from "@/services/AI";
import { fetchWikipediaImage } from "@/services/profileDetails";
import type { Player } from "@/types/Player";
import type { FifaPlayerProfile } from "@/types/FifaPlayerProfile";

// interface Player {
//   id: number;
//   name: string;
//   position: string;
//   team: string;
//   number: number;
//   age: number;
//   nationality: string;
//   yearOfBirth: number;
//   competition: string;
//   realImage: string;
//   fifaCardImage: string;
//   realStats: {
//     // Personal
//     yearOfBirth: number;
//     age: number;
//     nationality: string;
//     club: string;
//     position: string;
//     competition: string;

//     // Dribbling & Carrying
//     carries: number;
//     progressiveCarries: number;
//     progressiveCarryDistance: number;
//     progressiveRuns: number;
//     miscontrols: number;
//     dispossessed: number;
//     successfulDribbles: number;
//     dribbleSuccessPercentage: number;
//     dribblesInAttackingThird: number;
//     dribblesInPenaltyArea: number;

//     // Shooting
//     shots: number;
//     shotsOnTarget: number;
//     shotsOnTargetPercentage: number;
//     shotsPer90: number;
//     averageShotDistance: number;

//     // Goals & Scoring
//     goals: number;
//     goalsMinusPenalties: number;
//     goalsMinusExpectedGoals: number;
//     goalsPerShot: number;
//     goalsPerShotOnTarget: number;
//     goalsPlusAssists: number;
//     goalsPlusAssistsMinusPenalties: number;
//     ownGoals: number;
//     expectedGoals: number;
//     nonPenaltyExpectedGoals: number;

//     // Assists & Creation
//     assists: number;
//     expectedAssists: number;
//     expectedAssistedGoals: number;
//     keyPasses: number;
//     shotCreatingActions: number;
//     scaPer90: number;
//     goalCreatingActions: number;
//     gcaPer90: number;

//     // Passing
//     passesCompleted: number;
//     passCompletionPercentage: number;
//     passesAttempted: number;
//     throughBalls: number;
//     passesIntoPenaltyArea: number;
//     crosses: number;
//     crossesIntoPenaltyArea: number;
//     switches: number;
//     turnovers: number;

//     // Defending
//     tackles: number;
//     tacklesWon: number;
//     tacklesPlusInterceptions: number;
//     tackleSuccessPercentage: number;
//     interceptions: number;
//     blocks: number;
//     clearances: number;
//     errors: number;
//     possessionLost: number;
//     duelsWon: number;
//     duelsWonPercentage: number;
//     foulsDrawn: number;
//     foulsCommitted: number;
//     yellowCards: number;
//     redCards: number;
//     secondYellowCards: number;
//     penaltiesWon: number;
//     penaltiesConceded: number;

//     // Goalkeeping
//     cleanSheets: number;
//     cleanSheetPercentage: number;
//     saves: number;
//     savePercentage: number;
//     goalsAgainst: number;
//     goalsAgainstPer90: number;
//     shotsOnTargetAgainst: number;
//     postShotExpectedGoals: number;
//     psxgPlusMinus: number;
//     penaltiesAgainst: number;
//     penaltySaves: number;
//     averageShotDistanceAgainst: number;
//     averagePuntLength: number;
//     longBallPercentage: number;

//     // Playing Time
//     matchesPlayed: number;
//     minutesPlayed: number;
//     percentageOfTeamMinutesPlayed: number;
//     gamesStarted: number;
//     substituteAppearances: number;
//     minutesPerMatch: number;
//     minutesPerStart: number;
//     minutesPerSubstituteAppearance: number;
//     unusedSubstitute: number;

//     // Other
//     pointsPerMatch: number;
//     passesReceived: number;
//     recoveries: number;
//     touches: number;
//     totalDistance: number;
//     freeKicks: number;
//     cornerKicks: number;
//     throwIns: number;
//     liveBall: number;
//     deadBall: number;
//   };
//   fifaStats: {
//     overall: number;
//     pace: number;
//     shooting: number;
//     passing: number;
//     dribbling: number;
//     defending: number;
//     physical: number;

//     // Detailed FIFA stats
//     acceleration: number;
//     sprintSpeed: number;
//     positioning: number;
//     finishing: number;
//     shotPower: number;
//     longShots: number;
//     volleys: number;
//     penalties: number;
//     vision: number;
//     crossing: number;
//     freeKickAccuracy: number;
//     shortPassing: number;
//     longPassing: number;
//     curve: number;
//     dribbling_detailed: number;
//     agility: number;
//     balance: number;
//     reactions: number;
//     ballControl: number;
//     composure: number;
//     interceptions: number;
//     headingAccuracy: number;
//     defAwareness: number;
//     standingTackle: number;
//     slidingTackle: number;
//     jumping: number;
//     stamina: number;
//     strength: number;
//     aggression: number;

//     // Player info
//     weakFoot: number;
//     skillMoves: number;
//     preferredFoot: string;
//     height: string;
//     weight: string;
//     alternativePositions: string;
//     nation: string;
//     league: string;
//     team: string;
//     playStyle: string;

//     // Goalkeeper stats (empty for outfield players)
//     gkDiving?: number;
//     gkHandling?: number;
//     gkKicking?: number;
//     gkPositioning?: number;
//     gkReflexes?: number;
//   };
//   recentMatches: Array<{
//     opponent: string;
//     result: string;
//     goals: number;
//     assists: number;
//     rating: number;
//   }>;
// }

export default function PlayerDetail() {
  const { rk } = useParams<{ rk: string }>();
  const [player, setPlayer] = useState<Player | null>(null);
  const [annotation, setAnnotation] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");
  const [fifaProfile, setFifaProfile] = useState<FifaPlayerProfile | null>({});
  const [fifaProfileImage, setFifaProfileImage] = useState<string>("");

  console.log(player);

  useEffect(() => {
    getPlayerByRank(Number(rk)).then(setPlayer);
  }, [rk]);

  useEffect(() => {
    if (player) {
      getPlayerAnnotationFromAI(player).then(setAnnotation);
      fetchWikipediaImage(player?.Player).then(setProfileImage);
      getPlayerFromFifa(player?.Player).then(setFifaProfile);
    }
  }, [player]);

  useEffect(() => {
    setFifaProfileImage(getFifaImageUrl(fifaProfile));
  }, [fifaProfile]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [rk]);

  const StatWithProgress = ({
    label,
    value,
    maxValue = 100,
    isPercentage = false,
  }: {
    label: string;
    value: number | string;
    maxValue?: number;
    isPercentage?: boolean;
  }) => {
    const numericValue =
      typeof value === "string"
        ? Number.parseFloat(value.split("-")[1] || value)
        : value;
    const percentage = isPercentage
      ? numericValue
      : (numericValue / maxValue) * 100;

    return (
      <div className="py-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="font-semibold text-sm">
            {typeof value === "number" ? value.toLocaleString() : value}
            {isPercentage ? "%" : ""}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 relative overflow-hidden">
          <div
            className="h-2 rounded-full transition-all duration-700 ease-out relative animate-pulse shadow-lg"
            style={{
              width: `${Math.min(percentage, 100)}%`,
              background: "#15803d",
              boxShadow: "0 0 16px 2px #15803d66",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>
    );
  };

  const StatGroup = ({
    title,
    stats,
    showProgress = false,
  }: {
    title: string;
    stats: Array<{
      label: string;
      value: string | number;
      isPercentage?: boolean;
      maxValue?: number;
    }>;
    showProgress?: boolean;
  }) => (
    <Card className="mb-4 border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group bg-[#15803d]/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg group-hover:text-primary/90 transition-colors duration-300 text-[#15803d]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 ">
        {stats.map((stat, index) =>
          showProgress ? (
            <StatWithProgress
              key={index}
              label={stat.label}
              value={stat.value}
              maxValue={stat.maxValue}
              isPercentage={stat.isPercentage}
            />
          ) : (
            <div key={index} className="flex justify-between items-center py-1">
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
              <span className="font-semibold text-sm">
                {typeof stat.value === "number"
                  ? stat.value.toLocaleString()
                  : stat.value}
                {stat.isPercentage ? "%" : ""}
              </span>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className=" text-4xl font-bold   mb-2 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text  animate-pulse text-[#15803d]">
            {player?.Player}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-xl text-muted-foreground">{player?.Pos}</span>
            <span className="text-xl text-muted-foreground">•</span>
            <span className="text-xl text-muted-foreground">
              {player?.Squad}
            </span>
          </div>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Real Player Stats */}
          <div className="space-y-6 p-6 bg-background rounded-lg border border-primary/10 shadow-xl shadow-primary/5 backdrop-blur-sm">
            {/* Player Photo */}
            <Card className="overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 bg-[#15803d]/10">
              <CardContent className="p-0">
                <div className="flex justify-center">
                  <div className="relative aspect-[3/4] max-w-md w-full">
                    <img
                      src={profileImage || "/src/assets/placeholder.jpg"}
                      alt={player?.Player}
                      className="object-cover rounded-lg transition-transform duration-500 hover:scale-105 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Player Info */}
            <StatGroup
              title="Personal"
              stats={[
                { label: "Year of Birth", value: player?.Born },
                { label: "Age", value: player?.Age },
                { label: "Nationality", value: player?.Nation },
                { label: "Club", value: player?.Squad },
                { label: "Position", value: player?.Pos },
                { label: "Competition", value: player?.Comp },
              ]}
            />

            {/* Career Stats with Progress Bars */}
            <StatGroup
              title="Dribbling & Carrying"
              showProgress={true}
              stats={[
                { label: "Carries", value: player?.Carries, maxValue: 2399 },
                {
                  label: "Progressive Carries",
                  value: player?.PrgC,
                  maxValue: 213,
                },
                {
                  label: player?.PrgDist,
                  value: "850-1200",
                  maxValue: 25308,
                },
                {
                  label: "Progressive Runs",
                  value: player?.PrgR,
                  maxValue: 488,
                },
                { label: "Miscontrols", value: "8-15", maxValue: 117 },
                { label: "Dispossessed", value: "12-20", maxValue: 94 },
                {
                  label: "Successful Dribbles",
                  value: player?.Succ,
                  maxValue: 161,
                },
                {
                  label: "Dribble Success Percentage",
                  value: player?.["Succ%"],
                  isPercentage: true,
                },
                {
                  label: "Dribbles in Attacking Third",
                  value: player?.["Att 3rd"],
                  maxValue: 27,
                },
                {
                  label: "Dribbles in Penalty Area",
                  value: player?.["Att Pen"],
                  maxValue: 356,
                },
              ]}
            />

            <StatGroup
              title="Shooting"
              showProgress={true}
              stats={[
                { label: "Shots", value: "120-180", maxValue: 152 },
                { label: "Shots on Target", value: "65-95", maxValue: 75 },
                {
                  label: "Shots on Target Percentage",
                  value: "50-65",
                  isPercentage: true,
                },
                { label: "Shots per 90", value: "4.2-6.8", maxValue: 90 },
                {
                  label: "Average Shot Distance",
                  value: "16-22",
                  maxValue: 90,
                },
              ]}
            />

            <StatGroup
              title="Goals & Scoring"
              showProgress={true}
              stats={[
                { label: "Goals", value: player?.Gls, maxValue: 31 },
                {
                  label: "Goals minus Penalties",
                  value: player?.["G-PK"],
                  maxValue: 24,
                },
                {
                  label: "Goals minus Expected Goals",
                  value: player?.["G-xG"],
                  maxValue: 8.3,
                },
                {
                  label: "Goals per Shot",
                  value: player?.["G/Sh"],
                  maxValue: 1,
                },
                {
                  label: "Goals per Shot on Target",
                  value: player?.["G/SoT"],
                  maxValue: 1,
                },
                {
                  label: "Goals plus Assists",
                  value: player?.["G+A"],
                  maxValue: 47,
                },
                {
                  label: "Goals plus Assists minus Penalties",
                  value: player?.["G+A-PK"],
                  maxValue: 2.65,
                },
                { label: "Own Goals", value: player?.OG, maxValue: 3 },
                { label: "Expected Goals", value: player?.xG, maxValue: 27.1 },
                {
                  label: "Non-penalty Expected Goals",
                  value: player?.npxG,
                  maxValue: 24,
                },
              ]}
            />

            <StatGroup
              title="Assists & Creation"
              showProgress={true}
              stats={[
                {
                  label: "Assists",
                  value: player?.Ast,
                  maxValue: 18,
                },
                {
                  label: "Expected Assists",
                  value: player?.xA,
                  maxValue: 12.6,
                },
                {
                  label: "Expected Assisted Goals",
                  value: player?.xAG,
                  maxValue: 14.2,
                },
                {
                  label: "Key Passes",
                  value: player?.KP,
                  maxValue: 95,
                },
                {
                  label: "Shot Creating Actions",
                  value: player?.SCA,
                  maxValue: 202,
                },
                {
                  label: "SCA per 90",
                  value: player?.SCA90,
                  maxValue: 48.46,
                },
                {
                  label: "Goal Creating Actions",
                  value: player?.GCA,
                  maxValue: 29,
                },
                {
                  label: "GCA per 90",
                  value: player?.GCA90,
                  maxValue: 12.86,
                },
              ]}
            />

            <StatGroup
              title="Passing"
              showProgress={true}
              stats={[
                {
                  label: "Passes Completed",
                  value: player?.Cmp,
                  maxValue: 3269,
                },
                {
                  label: "Pass Completion Percentage",
                  value: player?.["Cmp%"],
                  isPercentage: true,
                },
                {
                  label: "Passes Attempted",
                  value: player?.Att,
                  maxValue: 3652,
                },
                {
                  label: "Through Balls",
                  value: player?.TB,
                  maxValue: 33,
                },
                {
                  label: "Passes into Penalty Area",
                  value: player?.PPA,
                  maxValue: 111,
                },
                {
                  label: "Crosses",
                  value: player?.Crs,
                  maxValue: 269,
                },
                {
                  label: "Crosses into Penalty Area",
                  value: player?.CrsPA,
                  maxValue: 33,
                },
                {
                  label: "Switches",
                  value: player?.Sw,
                  maxValue: 50,
                },
                {
                  label: "Turnovers",
                  value: player?.TO,
                  maxValue: 38,
                },
              ]}
            />

           

            

            

            <StatGroup
              title="Other"
              showProgress={true}
              stats={[
                {
                  label: "Points Per Match",
                  value: player?.PPM,
                  maxValue: 3,
                },
                {
                  label: "Passes Received",
                  value: player?.Rec,
                  maxValue: 3047,
                },
                {
                  label: "Recoveries",
                  value: player?.Recov,
                  maxValue: 254,
                },
                {
                  label: "Touches",
                  value: player?.Touches,
                  maxValue: 3867,
                },
                {
                  label: "Total Distance",
                  value: player?.TotDist,
                  maxValue: 58907,
                },
                {
                  label: "Free Kicks",
                  value: player?.FK,
                  maxValue: 20,
                },
                {
                  label: "Corner Kicks",
                  value: player?.CK,
                  maxValue: 140,
                },
                {
                  label: "Throw-Ins",
                  value: player?.TI,
                  maxValue: 399,
                },
                {
                  label: "Live Ball",
                  value: player?.Live,
                  maxValue: 3354,
                },
                {
                  label: "Dead Ball",
                  value: player?.Dead,
                  maxValue: 462,
                },
              ]}
            />
          </div>

          {/* Right Side - FIFA Card and Game Stats */}
          <div className="space-y-6 p-6 bg-background rounded-lg border border-primary/10 shadow-xl shadow-primary/5 backdrop-blur-sm">
            {/* FIFA Card */}
            <Card className="overflow-hidden border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/20 hover:shadow-3xl hover:shadow-yellow-400/30 transition-all duration-500 bg-[#15803d]/10">
              <CardHeader>
                <CardTitle className="text-[#15803d]">
                  FIFA Ultimate Team Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center">
                  <img
                    src={fifaProfileImage || "/src/assets/placeholder2.jpg"}
                    alt={fifaProfile?.Name}
                    className="object-cover rounded w-48 h-64"
                  />
                </div>
              </CardContent>
            </Card>

            {/* FIFA Stats Breakdown */}
            <Card className="bg-[#15803d]/10">
              <CardHeader>
                <CardTitle className="text-[#15803d]">
                  FIFA Detailed Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      PACE
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Acceleration</span>
                        <span className="font-semibold">
                          {fifaProfile?.Acceleration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sprint Speed</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Sprint Speed"]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      SHOOTING
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Positioning</span>
                        <span className="font-semibold">
                          {fifaProfile?.Positioning}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Finishing</span>
                        <span className="font-semibold">
                          {fifaProfile?.Finishing}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shot Power</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Shot Power"]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Long Shots</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Long Shots"]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Volleys</span>
                        <span className="font-semibold">
                          {fifaProfile?.Volleys}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Penalties</span>
                        <span className="font-semibold">
                          {fifaProfile?.Penalties}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      PASSING
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Vision</span>
                        <span className="font-semibold">
                          {fifaProfile?.Vision}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Crossing</span>
                        <span className="font-semibold">
                          {fifaProfile?.Crossing}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Free Kick Accuracy</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Free Kick Accuracy"]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Short Passing</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Short Passing"]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Long Passing</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Long Passing"]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Curve</span>
                        <span className="font-semibold">
                          {fifaProfile?.Curve}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      DRIBBLING
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Agility</span>
                        <span className="font-semibold">
                          {fifaProfile?.Agility}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Balance</span>
                        <span className="font-semibold">
                          {fifaProfile?.Balance}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reactions</span>
                        <span className="font-semibold">
                          {fifaProfile?.Reactions}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ball Control</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Ball Control"]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Composure</span>
                        <span className="font-semibold">
                          {fifaProfile?.Composure}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      DEFENDING
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Interceptions</span>
                        <span className="font-semibold">
                          {fifaProfile?.Interceptions}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Heading Accuracy</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Heading Accuracy"]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Def Awareness</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Def Awareness"]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Standing Tackle</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Standing Tackle"]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sliding Tackle</span>
                        <span className="font-semibold">
                          {fifaProfile?.["Sliding Tackle"]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      PHYSICAL
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Jumping</span>
                        <span className="font-semibold">
                          {fifaProfile?.Jumping}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Stamina</span>
                        <span className="font-semibold">
                          {fifaProfile?.Stamina}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Strength</span>
                        <span className="font-semibold">
                          {fifaProfile?.Strength}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Aggression</span>
                        <span className="font-semibold">
                          {fifaProfile?.Aggression}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                    PLAYER INFO
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span>Weak Foot</span>
                      <span className="font-semibold">
                        {fifaProfile?.["Weak foot"]}★
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Skill Moves</span>
                      <span className="font-semibold">
                        {fifaProfile?.["Skill moves"]}★
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Preferred Foot</span>
                      <span className="font-semibold">
                        {fifaProfile?.["Preferred foot"]}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Height</span>
                      <span className="font-semibold">
                        {fifaProfile?.Height}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weight</span>
                      <span className="font-semibold">
                        {fifaProfile?.Weight}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Alt. Positions</span>
                      <span className="font-semibold">
                        {fifaProfile?.["Alternative positions"]}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#15803d]/10">
              <CardHeader>
                <CardTitle className="text-[#15803d]">AI Portrait</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed font-semibold">
                    {annotation}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 bg-[#15803d]/10">
              <CardHeader>
                <CardTitle className="text-[#15803d]">
                  Player Characteristics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-120 flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Hexagon grid lines */}
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="hsl(var(--muted))"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>

                    {/* Background hexagons */}
                    {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, index) => (
                      <polygon
                        key={index}
                        points={[
                          [200 + 100 * scale, 200],
                          [200 + 50 * scale, 200 - 86.6 * scale],
                          [200 - 50 * scale, 200 - 86.6 * scale],
                          [200 - 100 * scale, 200],
                          [200 - 50 * scale, 200 + 86.6 * scale],
                          [200 + 50 * scale, 200 + 86.6 * scale],
                        ]
                          .map(([x, y]) => `${x},${y}`)
                          .join(" ")}
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Axis lines */}
                    {[
                      [200, 200, 300, 200], // Right
                      [200, 200, 250, 113.4], // Top Right
                      [200, 200, 150, 113.4], // Top Left
                      [200, 200, 100, 200], // Left
                      [200, 200, 150, 286.6], // Bottom Left
                      [200, 200, 250, 286.6], // Bottom Right
                    ].map(([x1, y1, x2, y2], index) => (
                      <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="hsl(var(--muted))"
                        strokeWidth="1"
                      />
                    ))}

                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <polygon
                      points={[
                        [200 + (fifaProfile?.["Shot Power"] / 100) * 100, 200],
                        [
                          200 + (fifaProfile?.PAC / 100) * 50,
                          200 - (fifaProfile?.PAC / 100) * 86.6,
                        ],
                        [
                          200 - (fifaProfile?.PAS / 100) * 50,
                          200 - (fifaProfile?.PAS / 100) * 86.6,
                        ],
                        [200 - (fifaProfile?.DEF / 100) * 100, 200],
                        [
                          200 - (fifaProfile?.PHY / 100) * 50,
                          200 + (fifaProfile?.PHY / 100) * 86.6,
                        ],
                        [
                          200 + (fifaProfile?.Dribbling / 100) * 50,
                          200 + (fifaProfile?.Dribbling / 100) * 86.6,
                        ],
                      ]
                        .map(([x, y]) => `${x},${y}`)
                        .join(" ")}
                      fill="hsl(var(--primary))"
                      fillOpacity="0.4"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      filter="url(#glow)"
                      className="animate-pulse"
                    />

                    {[
                      {
                        x: 200 + (fifaProfile?.SHO / 100) * 100,
                        y: 200,
                        label: "Shooting",
                        value: fifaProfile?.SHO,
                      },
                      {
                        x: 200 + (fifaProfile?.PAC / 100) * 50,
                        y: 200 - (fifaProfile?.PAC / 100) * 86.6,
                        label: "Pace",
                        value: fifaProfile?.PAC,
                      },
                      {
                        x: 200 - (fifaProfile?.PAS / 100) * 50,
                        y: 200 - (fifaProfile?.PAS / 100) * 86.6,
                        label: "Passing",
                        value: fifaProfile?.PAS,
                      },
                      {
                        x: 200 - (fifaProfile?.DEF / 100) * 100,
                        y: 200,
                        label: "Defending",
                        value: fifaProfile?.DEF,
                      },
                      {
                        x: 200 - (fifaProfile?.PHY / 100) * 50,
                        y: 200 + (fifaProfile?.PHY / 100) * 86.6,
                        label: "Physical",
                        value: fifaProfile?.PHY,
                      },
                      {
                        x: 200 + (fifaProfile?.DRI / 100) * 50,
                        y: 200 + (fifaProfile?.DRI / 100) * 86.6,
                        label: "Dribbling",
                        value: fifaProfile?.DRI,
                      },
                    ].map((point, index) => (
                      <circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill="hsl(var(--primary))"
                        stroke="white"
                        strokeWidth="3"
                        filter="url(#glow)"
                        className="animate-pulse"
                      />
                    ))}

                    {/* Labels */}
                    <text
                      x="320"
                      y="205"
                      textAnchor="start"
                      className="fill-foreground text-sm font-semibold"
                    >
                      Shooting ({fifaProfile?.SHO})
                    </text>
                    <text
                      x="270"
                      y="100"
                      textAnchor="start"
                      className="fill-foreground text-sm font-semibold"
                    >
                      Pace ({fifaProfile?.PAC})
                    </text>
                    <text
                      x="130"
                      y="100"
                      textAnchor="end"
                      className="fill-foreground text-sm font-semibold"
                    >
                      Passing ({fifaProfile?.PAS})
                    </text>
                    <text
                      x="80"
                      y="205"
                      textAnchor="end"
                      className="fill-foreground text-sm font-semibold"
                    >
                      Defending ({fifaProfile?.DEF})
                    </text>
                    <text
                      x="130"
                      y="310"
                      textAnchor="end"
                      className="fill-foreground text-sm font-semibold"
                    >
                      Physical ({fifaProfile?.PHY})
                    </text>
                    <text
                      x="270"
                      y="310"
                      textAnchor="start"
                      className="fill-foreground text-sm font-semibold"
                    >
                      Dribbling ({fifaProfile?.DRI})
                    </text>
                  </svg>
                </div>
              </CardContent>
            </Card>

             <StatGroup
              title="Defending"
              showProgress={true}
              stats={[
                {
                  label: "Tackles",
                  value: player?.Tkl,
                  maxValue: 133,
                },
                {
                  label: "Tackles Won",
                  value: player?.TklW,
                  maxValue: 80,
                },
                {
                  label: "Tackles plus Interceptions",
                  value: player?.["Tkl+Int"],
                  maxValue: 181,
                },
                {
                  label: "Tackle Success Percentage",
                  value: player?.["Tkl%"],
                  isPercentage: true,
                },
                {
                  label: "Interceptions",
                  value: player?.Int,
                  maxValue: 72,
                },
                {
                  label: "Blocks",
                  value: player?.Blocks,
                  maxValue: 75,
                },
                {
                  label: "Clearances",
                  value: player?.Clr,
                  maxValue: 249,
                },
                {
                  label: "Errors",
                  value: player?.Err,
                  maxValue: 10,
                },
                {
                  label: "Possession Lost",
                  value: player?.Lost,
                  maxValue: 63,
                },
                {
                  label: "Duels Won",
                  value: player?.Won,
                  maxValue: 164,
                },
                {
                  label: "Duels Won Percentage",
                  value: player?.["Won%"],
                  isPercentage: true,
                },
                {
                  label: "Fouls Drawn",
                  value: player?.Fld,
                  maxValue: 18,
                },
                {
                  label: "Fouls Committed",
                  value: player?.Fls,
                  maxValue: 83,
                },
                {
                  label: "Yellow Cards",
                  value: player?.CrdY,
                  maxValue: 15,
                },
                {
                  label: "Red Cards",
                  value: player?.CrdR,
                  maxValue: 3,
                },
                {
                  label: "Second Yellow Cards",
                  value: player?.["2CrdY"],
                  maxValue: 2,
                },
                {
                  label: "Penalties Won",
                  value: player?.PKwon,
                  maxValue: 5,
                },
                {
                  label: "Penalties Conceded",
                  value: player?.PKcon,
                  maxValue: 4,
                },
              ]}
            />

            <StatGroup
              title="Playing Time"
              showProgress={true}
              stats={[
                {
                  label: "Matches Played",
                  value: player?.MP,
                  maxValue: 38,
                },
                {
                  label: "Minutes Played",
                  value: player?.Min,
                  maxValue: 3420,
                },
                {
                  label: "Percentage of Team Minutes Played",
                  value: player?.["Min%"],
                  isPercentage: true,
                },
                {
                  label: "Games Started",
                  value: player?.Starts,
                  maxValue: 38,
                },
                {
                  label: "Substitute Appearances",
                  value: player?.Subs,
                  maxValue: 29,
                },
                {
                  label: "Minutes per Match",
                  value: player?.["Mn/MP"],
                  maxValue: 90,
                },
                {
                  label: "Minutes per Start",
                  value: player?.["Mn/Start"],
                  maxValue: 90,
                },
                {
                  label: "Minutes per Substitute Appearance",
                  value: player?.["Mn/Sub"],
                  maxValue: 76,
                },
                {
                  label: "Unused Substitute",
                  value: player?.unSub,
                  maxValue: 37,
                },
              ]}
            />

            <StatGroup
              title="Goalkeeping"
              showProgress={true}
              stats={[
                {
                  label: "Clean Sheets",
                  value: player?.CS,
                  maxValue: 16,
                },
                {
                  label: "Clean Sheet Percentage",
                  value: player?.["CS%"],
                  isPercentage: true,
                },
                {
                  label: "Saves",
                  value: player?.Saves,
                  maxValue: 150,
                },
                {
                  label: "Save Percentage",
                  value: player?.["Save%"],
                  isPercentage: true,
                },
                {
                  label: "Goals Against",
                  value: player?.GA,
                  maxValue: 77,
                },
                {
                  label: "Goals Against per 90",
                  value: player?.GA90,
                  maxValue: 4.58,
                },
                {
                  label: "Shots on Target Against",
                  value: player?.SoTA,
                  maxValue: 209,
                },
                {
                  label: "Post-Shot Expected Goals",
                  value: player?.PSxG,
                  maxValue: 73.5,
                },
                {
                  label: "PSxG Plus/Minus",
                  value: player?.["PSxG+/-"],
                  maxValue: 14.6,
                },
                {
                  label: "Penalties Against",
                  value: player?.PKA,
                  maxValue: 13,
                },
                {
                  label: "Penalty Saves",
                  value: player?.PKsv,
                  maxValue: 4,
                },
                {
                  label: "Average Shot Distance",
                  value: player?.AvgDist,
                  maxValue: 28,
                },
                {
                  label: "Average Punt Length",
                  value: player?.AvgLen,
                  maxValue: 56.3,
                },
                {
                  label: "Long Ball Percentage",
                  value: player?.["Launch%"],
                  isPercentage: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
