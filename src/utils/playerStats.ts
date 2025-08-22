import type { Player } from "@/types/Player";

export function getPersonalStats(player: Player | null) {
  return [
    { label: "Year of Birth", value: String(player?.Born) },
    { label: "Age", value: player?.Age },
    { label: "Nationality", value: player?.Nation },
    { label: "Club", value: player?.Squad },
    { label: "Position", value: player?.Pos },
    { label: "Competition", value: player?.Comp },
  ];
}

export function getDribblingStats(player: Player | null) {
  return [
    { label: "Carries", value: player?.Carries, maxValue: 2399 },
    { label: "Progressive Carries", value: player?.PrgC, maxValue: 213 },
    {
      label: "Progressive Carry Distance",
      value: player?.PrgDist,
      maxValue: 25308,
    },
    { label: "Progressive Runs", value: player?.PrgR, maxValue: 488 },
    { label: "Miscontrols", value: player?.Mis, maxValue: 117 },
    { label: "Dispossessed", value: player?.Dis, maxValue: 94 },
    { label: "Successful Dribbles", value: player?.Succ, maxValue: 161 },
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
  ];
}

export function getShootingStats(player: Player | null) {
  return [
    { label: "Shots", value: player?.Sh, maxValue: 152 },
    { label: "Shots on Target", value: player?.SoT, maxValue: 75 },
    {
      label: "Shots on Target Percentage",
      value: player?.["SoT%"],
      isPercentage: true,
    },
    { label: "Shots per 90", value: player?.["Sh/90"], maxValue: 90 },
    {
      label: "Shots on Target per 90",
      value: player?.["SoT/90"],
      maxValue: 90,
    },
  ];
}

export function getGoalScoringStats(player: Player | null) {
  return [
    { label: "Goals", value: player?.Gls, maxValue: 31 },
    { label: "Goals minus Penalties", value: player?.["G-PK"], maxValue: 24 },
    {
      label: "Goals minus Expected Goals",
      value: player?.["G-xG"],
      maxValue: 8.3,
    },
    { label: "Goals per Shot", value: player?.["G/Sh"], maxValue: 1 },
    {
      label: "Goals per Shot on Target",
      value: player?.["G/SoT"],
      maxValue: 1,
    },
    { label: "Goals plus Assists", value: player?.["G+A"], maxValue: 47 },
    {
      label: "Goals plus Assists minus Penalties",
      value: player?.["G+A-PK"],
      maxValue: 2.65,
    },
    { label: "Own Goals", value: player?.OG, maxValue: 3 },
    { label: "Expected Goals", value: player?.xG, maxValue: 27.1 },
    { label: "Non-penalty Expected Goals", value: player?.npxG, maxValue: 24 },
  ];
}

export function getAssistsStats(player: Player | null) {
  return [
    { label: "Assists", value: player?.Ast, maxValue: 18 },
    { label: "Expected Assists", value: player?.xA, maxValue: 12.6 },
    { label: "Expected Assisted Goals", value: player?.xAG, maxValue: 14.2 },
    { label: "Key Passes", value: player?.KP, maxValue: 95 },
    { label: "Shot Creating Actions", value: player?.SCA, maxValue: 202 },
    { label: "SCA per 90", value: player?.SCA90, maxValue: 48.46 },
    { label: "Goal Creating Actions", value: player?.GCA, maxValue: 29 },
    { label: "GCA per 90", value: player?.GCA90, maxValue: 12.86 },
  ];
}

export function getPassingStats(player: Player | null) {
  return [
    { label: "Passes Completed", value: player?.Cmp, maxValue: 3269 },
    {
      label: "Pass Completion Percentage",
      value: player?.["Cmp%"],
      isPercentage: true,
    },
    { label: "Passes Attempted", value: player?.Att, maxValue: 3652 },
    { label: "Through Balls", value: player?.TB, maxValue: 33 },
    { label: "Passes into Penalty Area", value: player?.PPA, maxValue: 111 },
    { label: "Crosses", value: player?.Crs, maxValue: 269 },
    { label: "Crosses into Penalty Area", value: player?.CrsPA, maxValue: 33 },
    { label: "Switches", value: player?.Sw, maxValue: 50 },
    { label: "Turnovers", value: player?.TO, maxValue: 38 },
  ];
}

export function getDefendingStats(player: Player | null) {
  return [
    { label: "Tackles", value: player?.Tkl, maxValue: 133 },
    { label: "Tackles Won", value: player?.TklW, maxValue: 80 },
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
    { label: "Interceptions", value: player?.Int, maxValue: 72 },
    { label: "Blocks", value: player?.Blocks, maxValue: 75 },
    { label: "Clearances", value: player?.Clr, maxValue: 249 },
    { label: "Errors", value: player?.Err, maxValue: 10 },
    { label: "Possession Lost", value: player?.Lost, maxValue: 63 },
    { label: "Duels Won", value: player?.Won, maxValue: 164 },
    {
      label: "Duels Won Percentage",
      value: player?.["Won%"],
      isPercentage: true,
    },
    { label: "Fouls Drawn", value: player?.Fld, maxValue: 18 },
    { label: "Fouls Committed", value: player?.Fls, maxValue: 83 },
    { label: "Yellow Cards", value: player?.CrdY, maxValue: 15 },
    { label: "Red Cards", value: player?.CrdR, maxValue: 3 },
    { label: "Second Yellow Cards", value: player?.["2CrdY"], maxValue: 2 },
    { label: "Penalties Won", value: player?.PKwon, maxValue: 5 },
    { label: "Penalties Conceded", value: player?.PKcon, maxValue: 4 },
  ];
}

export function getPlayingTimeStats(player: Player | null) {
  return [
    { label: "Matches Played", value: player?.MP, maxValue: 38 },
    { label: "Minutes Played", value: player?.Min, maxValue: 3420 },
    {
      label: "Percentage of Team Minutes Played",
      value: player?.["Min%"],
      isPercentage: true,
    },
    { label: "Games Started", value: player?.Starts, maxValue: 38 },
    { label: "Substitute Appearances", value: player?.Subs, maxValue: 29 },
    { label: "Minutes per Match", value: player?.["Mn/MP"], maxValue: 90 },
    { label: "Minutes per Start", value: player?.["Mn/Start"], maxValue: 90 },
    {
      label: "Minutes per Substitute Appearance",
      value: player?.["Mn/Sub"],
      maxValue: 76,
    },
    { label: "Unused Substitute", value: player?.unSub, maxValue: 37 },
  ];
}

export function getOtherStats(player: Player | null) {
  return [
    { label: "Points Per Match", value: player?.PPM, maxValue: 3 },
    { label: "Passes Received", value: player?.Rec, maxValue: 3047 },
    { label: "Recoveries", value: player?.Recov, maxValue: 254 },
    { label: "Touches", value: player?.Touches, maxValue: 3867 },
    { label: "Total Distance", value: player?.TotDist, maxValue: 58907 },
    { label: "Free Kicks", value: player?.FK, maxValue: 20 },
    { label: "Corner Kicks", value: player?.CK, maxValue: 140 },
    { label: "Throw-Ins", value: player?.TI, maxValue: 399 },
    { label: "Live Ball", value: player?.Live, maxValue: 3354 },
    { label: "Dead Ball", value: player?.Dead, maxValue: 462 },
  ];
}

export function getGoalkeepingStats(player: Player | null) {
  return [
    { label: "Clean Sheets", value: player?.CS, maxValue: 16 },
    {
      label: "Clean Sheet Percentage",
      value: player?.["CS%"],
      isPercentage: true,
    },
    { label: "Saves", value: player?.Saves, maxValue: 150 },
    { label: "Save Percentage", value: player?.["Save%"], isPercentage: true },
    { label: "Goals Against", value: player?.GA, maxValue: 77 },
    { label: "Goals Against per 90", value: player?.GA90, maxValue: 4.58 },
    { label: "Shots on Target Against", value: player?.SoTA, maxValue: 209 },
    { label: "Post-Shot Expected Goals", value: player?.PSxG, maxValue: 73.5 },
    { label: "PSxG Plus/Minus", value: player?.["PSxG+/-"], maxValue: 14.6 },
    { label: "Penalties Against", value: player?.PKA, maxValue: 13 },
    { label: "Penalty Saves", value: player?.PKsv, maxValue: 4 },
    { label: "Average Shot Distance", value: player?.AvgDist, maxValue: 28 },
    { label: "Average Punt Length", value: player?.AvgLen, maxValue: 56.3 },
    {
      label: "Long Ball Percentage",
      value: player?.["Launch%"],
      isPercentage: true,
    },
  ];
}
