import supabase from "@/services/supabase";
import type { useFiltersStore } from "@/stores/useFiltersStore";

type FilterState = ReturnType<typeof useFiltersStore.getState>;

export function buildPlayerQuery(filters: FilterState) {
  let query = supabase.from("PlayersData").select("*", { count: "exact" });

  if (filters.searchValue) {
    query = query.ilike("Player", `%${filters.searchValue}%`);
  }

  if (filters.minYear !== 1982) {
    query = query.gte("Born", filters.minYear);
  }
  if (filters.maxYear !== 2008) {
    query = query.lte("Born", filters.maxYear);
  }
  if (filters.minAge !== 16) {
    query = query.gte("Age", filters.minAge);
  }
  if (filters.maxAge !== 41) {
    query = query.lte("Age", filters.maxAge);
  }
  if (filters.nationality) {
    query = query.ilike("Nation", `%${filters.nationality}%`);
  }
  if (filters.club) {
    query = query.ilike("Squad", `%${filters.club}%`);
  }
  if (filters.position) {
    query = query.eq("Pos", filters.position);
  }
  if (filters.competition) {
    query = query.eq("Comp", filters.competition);
  }

  if (filters.minCarries !== 0) {
    query = query.gte("Carries", filters.minCarries);
  }
  if (filters.maxCarries !== 2399) {
    query = query.lte("Carries", filters.maxCarries);
  }
  if (filters.minPrgC !== 0) {
    query = query.gte("PrgC", filters.minPrgC);
  }
  if (filters.maxPrgC !== 213) {
    query = query.lte("PrgC", filters.maxPrgC);
  }
  if (filters.minPrgDist !== 0) {
    query = query.gte("PrgDist", filters.minPrgDist);
  }
  if (filters.maxPrgDist !== 25308) {
    query = query.lte("PrgDist", filters.maxPrgDist);
  }
  if (filters.minPrgR !== 0) {
    query = query.gte("PrgR", filters.minPrgR);
  }
  if (filters.maxPrgR !== 488) {
    query = query.lte("PrgR", filters.maxPrgR);
  }
  if (filters.minMis !== 0) {
    query = query.gte("Mis", filters.minMis);
  }
  if (filters.maxMis !== 117) {
    query = query.lte("Mis", filters.maxMis);
  }
  if (filters.minDis !== 0) {
    query = query.gte("Dis", filters.minDis);
  }
  if (filters.maxDis !== 94) {
    query = query.lte("Dis", filters.maxDis);
  }
  if (filters.minSucc !== 0) {
    query = query.gte("Succ", filters.minSucc);
  }
  if (filters.maxSucc !== 161) {
    query = query.lte("Succ", filters.maxSucc);
  }
  if (filters.minSuccPct !== 0) {
    query = query.gte('"Succ%"', filters.minSuccPct);
  }
  if (filters.maxSuccPct !== 100) {
    query = query.lte('"Succ%"', filters.maxSuccPct);
  }
  if (filters.minAtt3rd !== 0) {
    query = query.gte("Att 3rd", filters.minAtt3rd);
  }
  if (filters.maxAtt3rd !== 27) {
    query = query.lte("Att 3rd", filters.maxAtt3rd);
  }
  if (filters.minAttPen !== 0) {
    query = query.gte("Att Pen", filters.minAttPen);
  }
  if (filters.maxAttPen !== 356) {
    query = query.lte("Att Pen", filters.maxAttPen);
  }

  if (filters.minSh !== undefined && filters.minSh !== 0) {
    query = query.gte("Sh", filters.minSh);
  }
  if (filters.maxSh !== undefined && filters.maxSh !== 152) {
    query = query.lte("Sh", filters.maxSh);
  }
  if (filters.minSoT !== undefined && filters.minSoT !== 0) {
    query = query.gte("SoT", filters.minSoT);
  }
  if (filters.maxSoT !== undefined && filters.maxSoT !== 75) {
    query = query.lte("SoT", filters.maxSoT);
  }
  if (filters.minSoTPct !== undefined && filters.minSoTPct !== 0) {
    query = query.gte('"SoT%"', filters.minSoTPct);
  }
  if (filters.maxSoTPct !== undefined && filters.maxSoTPct !== 100) {
    query = query.lte('"SoT%"', filters.maxSoTPct);
  }
  if (filters.minSh90 !== undefined && filters.minSh90 !== 0) {
    query = query.gte('"Sh/90"', filters.minSh90);
  }
  if (filters.maxSh90 !== undefined && filters.maxSh90 !== 90) {
    query = query.lte('"Sh/90"', filters.maxSh90);
  }
  if (filters.minSoT90 !== undefined && filters.minSoT90 !== 0) {
    query = query.gte('"SoT/90"', filters.minSoT90);
  }
  if (filters.maxSoT90 !== undefined && filters.maxSoT90 !== 90) {
    query = query.lte('"SoT/90"', filters.maxSoT90);
  }

  if (filters.minGls !== undefined && filters.minGls !== 0) {
    query = query.gte("Gls", filters.minGls);
  }
  if (filters.maxGls !== undefined && filters.maxGls !== 31) {
    query = query.lte("Gls", filters.maxGls);
  }
  if (filters.minGlsMinusPK !== undefined && filters.minGlsMinusPK !== 0) {
    query = query.gte('"G-PK"', filters.minGlsMinusPK);
  }
  if (filters.maxGlsMinusPK !== undefined && filters.maxGlsMinusPK !== 24) {
    query = query.lte('"G-PK"', filters.maxGlsMinusPK);
  }
  if (filters.minGlsMinusxG !== undefined && filters.minGlsMinusxG !== 0) {
    query = query.gte('"G-xG"', filters.minGlsMinusxG);
  }
  if (filters.maxGlsMinusxG !== undefined && filters.maxGlsMinusxG !== 8.3) {
    query = query.lte('"G-xG"', filters.maxGlsMinusxG);
  }
  if (filters.minGlsPerSh !== undefined && filters.minGlsPerSh !== 0) {
    query = query.gte('"G/Sh"', filters.minGlsPerSh);
  }
  if (filters.maxGlsPerSh !== undefined && filters.maxGlsPerSh !== 1) {
    query = query.lte('"G/Sh"', filters.maxGlsPerSh);
  }
  if (filters.minGlsPerSoT !== undefined && filters.minGlsPerSoT !== 0) {
    query = query.gte('"G/SoT"', filters.minGlsPerSoT);
  }
  if (filters.maxGlsPerSoT !== undefined && filters.maxGlsPerSoT !== 1) {
    query = query.lte('"G/SoT"', filters.maxGlsPerSoT);
  }
  if (filters.minGplusA !== undefined && filters.minGplusA !== 0) {
    query = query.gte('"G+A"', filters.minGplusA);
  }
  if (filters.maxGplusA !== undefined && filters.maxGplusA !== 47) {
    query = query.lte('"G+A"', filters.maxGplusA);
  }
  if (filters.minGplusAminusPK !== undefined && filters.minGplusAminusPK !== 0) {
    query = query.gte('"G+A-PK"', filters.minGplusAminusPK);
  }
  if (filters.maxGplusAminusPK !== undefined && filters.maxGplusAminusPK !== 2.65) {
    query = query.lte('"G+A-PK"', filters.maxGplusAminusPK);
  }
  if (filters.minOG !== undefined && filters.minOG !== 0) {
    query = query.gte("OG", filters.minOG);
  }
  if (filters.maxOG !== undefined && filters.maxOG !== 3) {
    query = query.lte("OG", filters.maxOG);
  }
  if (filters.minxG !== undefined && filters.minxG !== 0) {
    query = query.gte("xG", filters.minxG);
  }
  if (filters.maxxG !== undefined && filters.maxxG !== 27.1) {
    query = query.lte("xG", filters.maxxG);
  }
  if (filters.minnpxG !== undefined && filters.minnpxG !== 0) {
    query = query.gte("npxG", filters.minnpxG);
  }
  if (filters.maxnpxG !== undefined && filters.maxnpxG !== 24) {
    query = query.lte("npxG", filters.maxnpxG);
  }

  if (filters.minAst !== undefined && filters.minAst !== 0) {
    query = query.gte("Ast", filters.minAst);
  }
  if (filters.maxAst !== undefined && filters.maxAst !== 18) {
    query = query.lte("Ast", filters.maxAst);
  }
  if (filters.minxA !== undefined && filters.minxA !== 0) {
    query = query.gte("xA", filters.minxA);
  }
  if (filters.maxxA !== undefined && filters.maxxA !== 12.6) {
    query = query.lte("xA", filters.maxxA);
  }
  if (filters.minxAG !== undefined && filters.minxAG !== 0) {
    query = query.gte("xAG", filters.minxAG);
  }
  if (filters.maxxAG !== undefined && filters.maxxAG !== 14.2) {
    query = query.lte("xAG", filters.maxxAG);
  }
  if (filters.minKP !== undefined && filters.minKP !== 0) {
    query = query.gte("KP", filters.minKP);
  }
  if (filters.maxKP !== undefined && filters.maxKP !== 91) {
    query = query.lte("KP", filters.maxKP);
  }
  if (filters.minSCA !== undefined && filters.minSCA !== 0) {
    query = query.gte("SCA", filters.minSCA);
  }
  if (filters.maxSCA !== undefined && filters.maxSCA !== 193) {
    query = query.lte("SCA", filters.maxSCA);
  }
  if (filters.minSCA90 !== undefined && filters.minSCA90 !== 0) {
    query = query.gte("SCA90", filters.minSCA90);
  }
  if (filters.maxSCA90 !== undefined && filters.maxSCA90 !== 32.73) {
    query = query.lte("SCA90", filters.maxSCA90);
  }
  if (filters.minGCA !== undefined && filters.minGCA !== 0) {
    query = query.gte("GCA", filters.minGCA);
  }
  if (filters.maxGCA !== undefined && filters.maxGCA !== 27) {
    query = query.lte("GCA", filters.maxGCA);
  }
  if (filters.minGCA90 !== undefined && filters.minGCA90 !== 0) {
    query = query.gte("GCA90", filters.minGCA90);
  }
  if (filters.maxGCA90 !== undefined && filters.maxGCA90 !== 5.63) {
    query = query.lte("GCA90", filters.maxGCA90);
  }

  if (filters.minCmp !== undefined && filters.minCmp !== 0) {
    query = query.gte("Cmp", filters.minCmp);
  }
  if (filters.maxCmp !== undefined && filters.maxCmp !== 3269) {
    query = query.lte("Cmp", filters.maxCmp);
  }
  if (filters.minCmpPct !== undefined && filters.minCmpPct !== 0) {
    query = query.gte('"Cmp%"', filters.minCmpPct);
  }
  if (filters.maxCmpPct !== undefined && filters.maxCmpPct !== 100) {
    query = query.lte('"Cmp%"', filters.maxCmpPct);
  }
  if (filters.minAtt !== undefined && filters.minAtt !== 0) {
    query = query.gte("Att", filters.minAtt);
  }
  if (filters.maxAtt !== undefined && filters.maxAtt !== 3652) {
    query = query.lte("Att", filters.maxAtt);
  }
  if (filters.minTB !== undefined && filters.minTB !== 0) {
    query = query.gte("TB", filters.minTB);
  }
  if (filters.maxTB !== undefined && filters.maxTB !== 33) {
    query = query.lte("TB", filters.maxTB);
  }
  if (filters.minPPA !== undefined && filters.minPPA !== 0) {
    query = query.gte("PPA", filters.minPPA);
  }
  if (filters.maxPPA !== undefined && filters.maxPPA !== 111) {
    query = query.lte("PPA", filters.maxPPA);
  }
  if (filters.minCrs !== undefined && filters.minCrs !== 0) {
    query = query.gte("Crs", filters.minCrs);
  }
  if (filters.maxCrs !== undefined && filters.maxCrs !== 269) {
    query = query.lte("Crs", filters.maxCrs);
  }
  if (filters.minCrsPA !== undefined && filters.minCrsPA !== 0) {
    query = query.gte("CrsPA", filters.minCrsPA);
  }
  if (filters.maxCrsPA !== undefined && filters.maxCrsPA !== 33) {
    query = query.lte("CrsPA", filters.maxCrsPA);
  }
  if (filters.minSw !== undefined && filters.minSw !== 0) {
    query = query.gte("Sw", filters.minSw);
  }
  if (filters.maxSw !== undefined && filters.maxSw !== 50) {
    query = query.lte("Sw", filters.maxSw);
  }

  if (filters.minTO !== undefined && filters.minTO !== 0) {
    query = query.gte("TO", filters.minTO);
  }
  if (filters.maxTO !== undefined && filters.maxTO !== 38) {
    query = query.lte("TO", filters.maxTO);
  }
  if (filters.minTkl !== undefined && filters.minTkl !== 0) {
    query = query.gte("Tkl", filters.minTkl);
  }
  if (filters.maxTkl !== undefined && filters.maxTkl !== 133) {
    query = query.lte("Tkl", filters.maxTkl);
  }
  if (filters.minTklW !== undefined && filters.minTklW !== 0) {
    query = query.gte("TklW", filters.minTklW);
  }
  if (filters.maxTklW !== undefined && filters.maxTklW !== 80) {
    query = query.lte("TklW", filters.maxTklW);
  }
  if (filters.minTklInt !== undefined && filters.minTklInt !== 0) {
    query = query.gte('"Tkl+Int"', filters.minTklInt);
  }
  if (filters.maxTklInt !== undefined && filters.maxTklInt !== 181) {
    query = query.lte('"Tkl+Int"', filters.maxTklInt);
  }
  if (filters.minTklPct !== undefined && filters.minTklPct !== 0) {
    query = query.gte('"Tkl%"', filters.minTklPct);
  }
  if (filters.maxTklPct !== undefined && filters.maxTklPct !== 100) {
    query = query.lte('"Tkl%"', filters.maxTklPct);
  }
  if (filters.minInt !== undefined && filters.minInt !== 0) {
    query = query.gte("Int", filters.minInt);
  }
  if (filters.maxInt !== undefined && filters.maxInt !== 72) {
    query = query.lte("Int", filters.maxInt);
  }
  if (filters.minBlocks !== undefined && filters.minBlocks !== 0) {
    query = query.gte("Blocks", filters.minBlocks);
  }
  if (filters.maxBlocks !== undefined && filters.maxBlocks !== 75) {
    query = query.lte("Blocks", filters.maxBlocks);
  }
  if (filters.minClr !== undefined && filters.minClr !== 0) {
    query = query.gte("Clr", filters.minClr);
  }
  if (filters.maxClr !== undefined && filters.maxClr !== 249) {
    query = query.lte("Clr", filters.maxClr);
  }
  if (filters.minErr !== undefined && filters.minErr !== 0) {
    query = query.gte("Err", filters.minErr);
  }
  if (filters.maxErr !== undefined && filters.maxErr !== 10) {
    query = query.lte("Err", filters.maxErr);
  }

  if (filters.minLost !== undefined && filters.minLost !== 0) {
    query = query.gte("Lost", filters.minLost);
  }
  if (filters.maxLost !== undefined && filters.maxLost !== 63) {
    query = query.lte("Lost", filters.maxLost);
  }
  if (filters.minWon !== undefined && filters.minWon !== 0) {
    query = query.gte("Won", filters.minWon);
  }
  if (filters.maxWon !== undefined && filters.maxWon !== 164) {
    query = query.lte("Won", filters.maxWon);
  }
  if (filters.minWonPct !== undefined && filters.minWonPct !== 0) {
    query = query.gte('"Won%"', filters.minWonPct);
  }
  if (filters.maxWonPct !== undefined && filters.maxWonPct !== 100) {
    query = query.lte('"Won%"', filters.maxWonPct);
  }

  if (filters.minFld !== undefined && filters.minFld !== 0) {
    query = query.gte("Fld", filters.minFld);
  }
  if (filters.maxFld !== undefined && filters.maxFld !== 18) {
    query = query.lte("Fld", filters.maxFld);
  }
  if (filters.minFls !== undefined && filters.minFls !== 0) {
    query = query.gte("Fls", filters.minFls);
  }
  if (filters.maxFls !== undefined && filters.maxFls !== 83) {
    query = query.lte("Fls", filters.maxFls);
  }
  if (filters.minCrdY !== undefined && filters.minCrdY !== 0) {
    query = query.gte("CrdY", filters.minCrdY);
  }
  if (filters.maxCrdY !== undefined && filters.maxCrdY !== 15) {
    query = query.lte("CrdY", filters.maxCrdY);
  }
  if (filters.minCrdR !== undefined && filters.minCrdR !== 0) {
    query = query.gte("CrdR", filters.minCrdR);
  }
  if (filters.maxCrdR !== undefined && filters.maxCrdR !== 3) {
    query = query.lte("CrdR", filters.maxCrdR);
  }
  if (filters.min2CrdY !== undefined && filters.min2CrdY !== 0) {
    query = query.gte('"2CrdY"', filters.min2CrdY);
  }
  if (filters.max2CrdY !== undefined && filters.max2CrdY !== 2) {
    query = query.lte('"2CrdY"', filters.max2CrdY);
  }
  if (filters.minPKwon !== undefined && filters.minPKwon !== 0) {
    query = query.gte("PKwon", filters.minPKwon);
  }
  if (filters.maxPKwon !== undefined && filters.maxPKwon !== 5) {
    query = query.lte("PKwon", filters.maxPKwon);
  }
  if (filters.minPKcon !== undefined && filters.minPKcon !== 0) {
    query = query.gte("PKcon", filters.minPKcon);
  }
  if (filters.maxPKcon !== undefined && filters.maxPKcon !== 4) {
    query = query.lte("PKcon", filters.maxPKcon);
  }

  if (filters.minCS !== undefined && filters.minCS !== 0) {
    query = query.gte("CS", filters.minCS);
  }
  if (filters.maxCS !== undefined && filters.maxCS !== 16) {
    query = query.lte("CS", filters.maxCS);
  }
  if (filters.minCSPct !== undefined && filters.minCSPct !== 0) {
    query = query.gte('"CS%"', filters.minCSPct);
  }
  if (filters.maxCSPct !== undefined && filters.maxCSPct !== 200) {
    query = query.lte('"CS%"', filters.maxCSPct);
  }
  if (filters.minSaves !== undefined && filters.minSaves !== 0) {
    query = query.gte("Saves", filters.minSaves);
  }
  if (filters.maxSaves !== undefined && filters.maxSaves !== 150) {
    query = query.lte("Saves", filters.maxSaves);
  }
  if (filters.minSavePct !== undefined && filters.minSavePct !== 0) {
    query = query.gte('"Save%"', filters.minSavePct);
  }
  if (filters.maxSavePct !== undefined && filters.maxSavePct !== 100) {
    query = query.lte('"Save%"', filters.maxSavePct);
  }
  if (filters.minGA !== undefined && filters.minGA !== 0) {
    query = query.gte("GA", filters.minGA);
  }
  if (filters.maxGA !== undefined && filters.maxGA !== 77) {
    query = query.lte("GA", filters.maxGA);
  }
  if (filters.minGA90 !== undefined && filters.minGA90 !== 0) {
    query = query.gte("GA90", filters.minGA90);
  }
  if (filters.maxGA90 !== undefined && filters.maxGA90 !== 4.58) {
    query = query.lte("GA90", filters.maxGA90);
  }
  if (filters.minSoTA !== undefined && filters.minSoTA !== 0) {
    query = query.gte("SoTA", filters.minSoTA);
  }
  if (filters.maxSoTA !== undefined && filters.maxSoTA !== 209) {
    query = query.lte("SoTA", filters.maxSoTA);
  }
  if (filters.minPSxG !== undefined && filters.minPSxG !== 0) {
    query = query.gte("PSxG", filters.minPSxG);
  }
  if (filters.maxPSxG !== undefined && filters.maxPSxG !== 73.5) {
    query = query.lte("PSxG", filters.maxPSxG);
  }
  if (filters.minPSxGPlusMinus !== undefined && filters.minPSxGPlusMinus !== 0) {
    query = query.gte('"PSxG+/-"', filters.minPSxGPlusMinus);
  }
  if (filters.maxPSxGPlusMinus !== undefined && filters.maxPSxGPlusMinus !== 14.6) {
    query = query.lte('"PSxG+/-"', filters.maxPSxGPlusMinus);
  }
  if (filters.minPKA !== undefined && filters.minPKA !== 0) {
    query = query.gte("PKA", filters.minPKA);
  }
  if (filters.maxPKA !== undefined && filters.maxPKA !== 13) {
    query = query.lte("PKA", filters.maxPKA);
  }
  if (filters.minPKsv !== undefined && filters.minPKsv !== 0) {
    query = query.gte("PKsv", filters.minPKsv);
  }
  if (filters.maxPKsv !== undefined && filters.maxPKsv !== 4) {
    query = query.lte("PKsv", filters.maxPKsv);
  }
  if (filters.minAvgDist !== undefined && filters.minAvgDist !== 2) {
    query = query.gte("AvgDist", filters.minAvgDist);
  }
  if (filters.maxAvgDist !== undefined && filters.maxAvgDist !== 28) {
    query = query.lte("AvgDist", filters.maxAvgDist);
  }
  if (filters.minAvgLen !== undefined && filters.minAvgLen !== 6) {
    query = query.gte("AvgLen", filters.minAvgLen);
  }
  if (filters.maxAvgLen !== undefined && filters.maxAvgLen !== 56.3) {
    query = query.lte("AvgLen", filters.maxAvgLen);
  }
  if (filters.minLaunchPct !== undefined && filters.minLaunchPct !== 0) {
    query = query.gte('"Launch%"', filters.minLaunchPct);
  }
  if (filters.maxLaunchPct !== undefined && filters.maxLaunchPct !== 92.3) {
    query = query.lte('"Launch%"', filters.maxLaunchPct);
  }

  if (filters.minMP !== undefined && filters.minMP !== 1) {
    query = query.gte("MP", filters.minMP);
  }
  if (filters.maxMP !== undefined && filters.maxMP !== 38) {
    query = query.lte("MP", filters.maxMP);
  }
  if (filters.minMin !== undefined && filters.minMin !== 1) {
    query = query.gte("Min", filters.minMin);
  }
  if (filters.maxMin !== undefined && filters.maxMin !== 3420) {
    query = query.lte("Min", filters.maxMin);
  }
  if (filters.minMinPct !== undefined && filters.minMinPct !== 0) {
    query = query.gte('"Min%"', filters.minMinPct);
  }
  if (filters.maxMinPct !== undefined && filters.maxMinPct !== 100) {
    query = query.lte('"Min%"', filters.maxMinPct);
  }
  if (filters.minStarts !== undefined && filters.minStarts !== 0) {
    query = query.gte("Starts", filters.minStarts);
  }
  if (filters.maxStarts !== undefined && filters.maxStarts !== 38) {
    query = query.lte("Starts", filters.maxStarts);
  }
  if (filters.minIn !== undefined && filters.minIn !== 0) {
    query = query.gte("Subs", filters.minIn);
  }
  if (filters.maxIn !== undefined && filters.maxIn !== 29) {
    query = query.lte("Subs", filters.maxIn);
  }
  if (filters.minMnPerMP !== undefined && filters.minMnPerMP !== 1) {
    query = query.gte('"Mn/MP"', filters.minMnPerMP);
  }
  if (filters.maxMnPerMP !== undefined && filters.maxMnPerMP !== 90) {
    query = query.lte('"Mn/MP"', filters.maxMnPerMP);
  }
  if (filters.minMnPerStart !== undefined && filters.minMnPerStart !== 9) {
    query = query.gte('"Mn/Start"', filters.minMnPerStart);
  }
  if (filters.maxMnPerStart !== undefined && filters.maxMnPerStart !== 90) {
    query = query.lte('"Mn/Start"', filters.maxMnPerStart);
  }
  if (filters.minMnPerSub !== undefined && filters.minMnPerSub !== 1) {
    query = query.gte('"Mn/Sub"', filters.minMnPerSub);
  }
  if (filters.maxMnPerSub !== undefined && filters.maxMnPerSub !== 76) {
    query = query.lte('"Mn/Sub"', filters.maxMnPerSub);
  }
  if (filters.minUnSub !== undefined && filters.minUnSub !== 0) {
    query = query.gte("unSub", filters.minUnSub);
  }
  if (filters.maxUnSub !== undefined && filters.maxUnSub !== 37) {
    query = query.lte("unSub", filters.maxUnSub);
  }

  if (filters.minPPM !== undefined && filters.minPPM !== 0) {
    query = query.gte("PPM", filters.minPPM);
  }
  if (filters.maxPPM !== undefined && filters.maxPPM !== 3) {
    query = query.lte("PPM", filters.maxPPM);
  }
  if (filters.minRec !== undefined && filters.minRec !== 0) {
    query = query.gte("Rec", filters.minRec);
  }
  if (filters.maxRec !== undefined && filters.maxRec !== 3047) {
    query = query.lte("Rec", filters.maxRec);
  }
  if (filters.minRecov !== undefined && filters.minRecov !== 0) {
    query = query.gte("Recov", filters.minRecov);
  }
  if (filters.maxRecov !== undefined && filters.maxRecov !== 254) {
    query = query.lte("Recov", filters.maxRecov);
  }
  if (filters.minTouches !== undefined && filters.minTouches !== 0) {
    query = query.gte("Touches", filters.minTouches);
  }
  if (filters.maxTouches !== undefined && filters.maxTouches !== 3867) {
    query = query.lte("Touches", filters.maxTouches);
  }
  if (filters.minFK !== undefined && filters.minFK !== 0) {
    query = query.gte("FK", filters.minFK);
  }
  if (filters.maxFK !== undefined && filters.maxFK !== 20) {
    query = query.lte("FK", filters.maxFK);
  }
  if (filters.minCK !== undefined && filters.minCK !== 0) {
    query = query.gte("CK", filters.minCK);
  }
  if (filters.maxCK !== undefined && filters.maxCK !== 140) {
    query = query.lte("CK", filters.maxCK);
  }
  if (filters.minTI !== undefined && filters.minTI !== 0) {
    query = query.gte("TI", filters.minTI);
  }
  if (filters.maxTI !== undefined && filters.maxTI !== 399) {
    query = query.lte("TI", filters.maxTI);
  }
  if (filters.minLive !== undefined && filters.minLive !== 0) {
    query = query.gte("Live", filters.minLive);
  }
  if (filters.maxLive !== undefined && filters.maxLive !== 3354) {
    query = query.lte("Live", filters.maxLive);
  }
  if (filters.minDead !== undefined && filters.minDead !== 0) {
    query = query.gte("Dead", filters.minDead);
  }
  if (filters.maxDead !== undefined && filters.maxDead !== 462) {
    query = query.lte("Dead", filters.maxDead);
  }

  return query;
}

export async function fetchPlayersWithFilters(
  filters: FilterState,
  page: number,
  pageSize: number = 25
) {
  const query = buildPlayerQuery(filters);
  
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  
  const finalQuery = query.range(from, to);
  
  const { data, error, count } = await finalQuery;
  
  if (error) {
    throw new Error(`Failed to fetch players: ${error.message}`);
  }
  
  return {
    players: data || [],
    total: count || 0
  };
}