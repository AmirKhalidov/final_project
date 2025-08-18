import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import supabase from "@/services/supabase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFiltersStore } from "@/stores/useFiltersStore";
import { useFilterSync } from "@/hooks/useFilterSync";
import type { Player } from "@/types/Player";
import { PlayerCard } from "@/components/PlayerCard";

export default function Home() {
  const [players, setPlayers] = useState<Player[] | null>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const pageSize = 25;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  function renderPageLinks() {
    const pages = [];
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, page + 2);

    if (page <= 3) {
      start = 1;
      end = Math.min(5, totalPages);
    } else if (page >= totalPages - 2) {
      start = Math.max(1, totalPages - 4);
      end = totalPages;
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === page}
            onClick={(e) => {
              e.preventDefault();
              setPage(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pages;
  }

  function uniquePlayers(players: Player[] | null): Player[] {
    if (!players) return [];
    const seen = new Set();
    return players.filter((player) => {
      if (seen.has(player.Player)) return false;
      seen.add(player.Player);
      return true;
    });
  }

  // Use the filter sync hook
  useFilterSync();

  // Get all filter values from store
  const {
    hydrated,
    searchValue,
    minYear,
    maxYear,
    minAge,
    maxAge,
    nationality,
    club,
    position,
    competition,
    minCarries,
    maxCarries,
    minPrgC,
    maxPrgC,
    minPrgDist,
    maxPrgDist,
    minPrgR,
    maxPrgR,
    minMis,
    maxMis,
    minDis,
    maxDis,
    minSucc,
    maxSucc,
    minSuccPct,
    maxSuccPct,
    minAtt3rd,
    maxAtt3rd,
    minAttPen,
    maxAttPen,
    minSh,
    maxSh,
    minSoT,
    maxSoT,
    minSoTPct,
    maxSoTPct,
    minSh90,
    maxSh90,
    minSoT90,
    maxSoT90,
    minGls,
    maxGls,
    minGlsMinusPK,
    maxGlsMinusPK,
    minGlsMinusxG,
    maxGlsMinusxG,
    minGlsPerSh,
    maxGlsPerSh,
    minGlsPerSoT,
    maxGlsPerSoT,
    minGplusA,
    maxGplusA,
    minGplusAminusPK,
    maxGplusAminusPK,
    minOG,
    maxOG,
    minxG,
    maxxG,
    minnpxG,
    maxnpxG,
    minAst,
    maxAst,
    minxA,
    maxxA,
    minxAG,
    maxxAG,
    minKP,
    maxKP,
    minSCA,
    maxSCA,
    minSCA90,
    maxSCA90,
    minGCA,
    maxGCA,
    minGCA90,
    maxGCA90,
    minCmp,
    maxCmp,
    minCmpPct,
    maxCmpPct,
    minAtt,
    maxAtt,
    minTB,
    maxTB,
    minPPA,
    maxPPA,
    minCrs,
    maxCrs,
    minCrsPA,
    maxCrsPA,
    minSw,
    maxSw,
    minTO,
    maxTO,
    minTkl,
    maxTkl,
    minTklW,
    maxTklW,
    minTklInt,
    maxTklInt,
    minTklPct,
    maxTklPct,
    minInt,
    maxInt,
    minBlocks,
    maxBlocks,
    minClr,
    maxClr,
    minErr,
    maxErr,
    minLost,
    maxLost,
    minWon,
    maxWon,
    minWonPct,
    maxWonPct,
    minFld,
    maxFld,
    minFls,
    maxFls,
    minCrdY,
    maxCrdY,
    minCrdR,
    maxCrdR,
    min2CrdY,
    max2CrdY,
    minPKwon,
    maxPKwon,
    minPKcon,
    maxPKcon,
    minCS,
    maxCS,
    minCSPct,
    maxCSPct,
    minSaves,
    maxSaves,
    minSavePct,
    maxSavePct,
    minGA,
    maxGA,
    minGA90,
    maxGA90,
    minSoTA,
    maxSoTA,
    minPSxG,
    maxPSxG,
    minPSxGPlusMinus,
    maxPSxGPlusMinus,
    minPKA,
    maxPKA,
    minPKsv,
    maxPKsv,
    minAvgDist,
    maxAvgDist,
    minAvgLen,
    maxAvgLen,
    minLaunchPct,
    maxLaunchPct,
    minMP,
    maxMP,
    minMin,
    maxMin,
    minMinPct,
    maxMinPct,
    minStarts,
    maxStarts,
    minIn,
    maxIn,
    minMnPerMP,
    maxMnPerMP,
    minMnPerStart,
    maxMnPerStart,
    minMnPerSub,
    maxMnPerSub,
    minUnSub,
    maxUnSub,
    minPPM,
    maxPPM,
    minRec,
    maxRec,
    minRecov,
    maxRecov,
    minTouches,
    maxTouches,
    minFK,
    maxFK,
    minCK,
    maxCK,
    minTI,
    maxTI,
    minLive,
    maxLive,
    minDead,
    maxDead,
  } = useFiltersStore();

  // Fetch players when filters change
  useEffect(() => {
    if (!hydrated) return;
    async function fetchPlayers() {
      let query = supabase.from("PlayersData").select("*", { count: "exact" });
      // console.log("Starting fetch...");

      // // First, let's check the total count without any filters
      // const { count: totalCount } = await supabase
      //   .from("PlayersData")
      //   .select("*", { count: "exact", head: true });

      // console.log("Total records in database:", totalCount);

      // let allPlayers: any[] = [];
      // let from = 0;
      // const batchSize = 1000;
      // let fetchMore = true;
      // let batchNumber = 1;

      // while (fetchMore) {
      //   console.log(
      //     `Fetching batch ${batchNumber} (records ${from} to ${
      //       from + batchSize - 1
      //     })`
      //   );

      // let query = supabase.from("PlayersData").select("*");

      if (searchValue) query = query.ilike("Player", `%${searchValue}%`);

      if (minYear !== 1982) query = query.gte("Born", minYear);
      if (maxYear !== 2008) query = query.lte("Born", maxYear);

      if (minAge !== 16) query = query.gte("Age", minAge);
      if (maxAge !== 41) query = query.lte("Age", maxAge);

      if (nationality) query = query.ilike("Nation", `%${nationality}%`);
      if (club) query = query.ilike("Squad", `%${club}%`);
      if (position) query = query.eq("Pos", position);
      if (competition) query = query.eq("Comp", competition);

      if (minCarries !== 0) query = query.gte("Carries", minCarries);
      if (maxCarries !== 2399) query = query.lte("Carries", maxCarries);

      if (minPrgC !== 0) query = query.gte("PrgC", minPrgC);
      if (maxPrgC !== 213) query = query.lte("PrgC", maxPrgC);

      if (minPrgDist !== 0) query = query.gte("PrgDist", minPrgDist);
      if (maxPrgDist !== 25308) query = query.lte("PrgDist", maxPrgDist);

      if (minPrgR !== 0) query = query.gte("PrgR", minPrgR);
      if (maxPrgR !== 488) query = query.lte("PrgR", maxPrgR);

      if (minMis !== 0) query = query.gte("Mis", minMis);
      if (maxMis !== 117) query = query.lte("Mis", maxMis);

      if (minDis !== 0) query = query.gte("Dis", minDis);
      if (maxDis !== 94) query = query.lte("Dis", maxDis);

      if (minSucc !== 0) query = query.gte("Succ", minSucc);
      if (maxSucc !== 161) query = query.lte("Succ", maxSucc);

      if (minSuccPct !== 0) query = query.gte('"Succ%"', minSuccPct);
      if (maxSuccPct !== 100) query = query.lte('"Succ%"', maxSuccPct);

      if (minAtt3rd !== 0) query = query.gte("Att 3rd", minAtt3rd);
      if (maxAtt3rd !== 27) query = query.lte("Att 3rd", maxAtt3rd);

      if (minAttPen !== 0) query = query.gte("Att Pen", minAttPen);
      if (maxAttPen !== 356) query = query.lte("Att Pen", maxAttPen);

      if (minSh !== undefined && minSh !== 0) {
        query = query.gte("Sh", minSh);
      }
      if (maxSh !== undefined && maxSh !== 152) {
        query = query.lte("Sh", maxSh);
      }
      if (minSoT !== undefined && minSoT !== 0) {
        query = query.gte("SoT", minSoT);
      }
      if (maxSoT !== undefined && maxSoT !== 75) {
        query = query.lte("SoT", maxSoT);
      }
      if (minSoTPct !== undefined && minSoTPct !== 0) {
        query = query.gte('"SoT%"', minSoTPct); // special symbol
      }
      if (maxSoTPct !== undefined && maxSoTPct !== 100) {
        query = query.lte('"SoT%"', maxSoTPct); // special symbol
      }
      if (minSh90 !== undefined && minSh90 !== 0) {
        query = query.gte('"Sh/90"', minSh90); // special symbol
      }
      if (maxSh90 !== undefined && maxSh90 !== 90) {
        query = query.lte('"Sh/90"', maxSh90); // special symbol
      }
      if (minSoT90 !== undefined && minSoT90 !== 0) {
        query = query.gte('"SoT/90"', minSoT90); // special symbol
      }
      if (maxSoT90 !== undefined && maxSoT90 !== 90) {
        query = query.lte('"SoT/90"', maxSoT90); // special symbol
      }

      if (minGls !== undefined && minGls !== 0) {
        query = query.gte("Gls", minGls);
      }
      if (maxGls !== undefined && maxGls !== 31) {
        query = query.lte("Gls", maxGls);
      }
      if (minGlsMinusPK !== undefined && minGlsMinusPK !== 0) {
        query = query.gte('"G-PK"', minGlsMinusPK); // special symbol
      }
      if (maxGlsMinusPK !== undefined && maxGlsMinusPK !== 24) {
        query = query.lte('"G-PK"', maxGlsMinusPK); // special symbol
      }
      if (minGlsMinusxG !== undefined && minGlsMinusxG !== 0) {
        query = query.gte('"G-xG"', minGlsMinusxG); // special symbol
      }
      if (maxGlsMinusxG !== undefined && maxGlsMinusxG !== 8.3) {
        query = query.lte('"G-xG"', maxGlsMinusxG); // special symbol
      }
      if (minGlsPerSh !== undefined && minGlsPerSh !== 0) {
        query = query.gte('"G/Sh"', minGlsPerSh); // special symbol
      }
      if (maxGlsPerSh !== undefined && maxGlsPerSh !== 1) {
        query = query.lte('"G/Sh"', maxGlsPerSh); // special symbol
      }
      if (minGlsPerSoT !== undefined && minGlsPerSoT !== 0) {
        query = query.gte('"G/SoT"', minGlsPerSoT); // special symbol
      }
      if (maxGlsPerSoT !== undefined && maxGlsPerSoT !== 1) {
        query = query.lte('"G/SoT"', maxGlsPerSoT); // special symbol
      }
      if (minGplusA !== undefined && minGplusA !== 0) {
        query = query.gte('"G+A"', minGplusA); // special symbol
      }
      if (maxGplusA !== undefined && maxGplusA !== 47) {
        query = query.lte('"G+A"', maxGplusA); // special symbol
      }
      if (minGplusAminusPK !== undefined && minGplusAminusPK !== 0) {
        query = query.gte('"G+A-PK"', minGplusAminusPK); // special symbol
      }
      if (maxGplusAminusPK !== undefined && maxGplusAminusPK !== 2.65) {
        query = query.lte('"G+A-PK"', maxGplusAminusPK); // special symbol
      }
      if (minOG !== undefined && minOG !== 0) {
        query = query.gte("OG", minOG);
      }
      if (maxOG !== undefined && maxOG !== 3) {
        query = query.lte("OG", maxOG);
      }
      if (minxG !== undefined && minxG !== 0) {
        query = query.gte("xG", minxG);
      }
      if (maxxG !== undefined && maxxG !== 27.1) {
        query = query.lte("xG", maxxG);
      }
      if (minnpxG !== undefined && minnpxG !== 0) {
        query = query.gte("npxG", minnpxG);
      }
      if (maxnpxG !== undefined && maxnpxG !== 24) {
        query = query.lte("npxG", maxnpxG);
      }

      if (minAst !== undefined && minAst !== 0) {
        query = query.gte("Ast", minAst);
      }
      if (maxAst !== undefined && maxAst !== 18) {
        query = query.lte("Ast", maxAst);
      }
      if (minxA !== undefined && minxA !== 0) {
        query = query.gte("xA", minxA);
      }
      if (maxxA !== undefined && maxxA !== 12.6) {
        query = query.lte("xA", maxxA);
      }
      if (minxAG !== undefined && minxAG !== 0) {
        query = query.gte("xAG", minxAG);
      }
      if (maxxAG !== undefined && maxxAG !== 14.2) {
        query = query.lte("xAG", maxxAG);
      }
      if (minKP !== undefined && minKP !== 0) {
        query = query.gte("KP", minKP);
      }
      if (maxKP !== undefined && maxKP !== 91) {
        query = query.lte("KP", maxKP);
      }
      if (minSCA !== undefined && minSCA !== 0) {
        query = query.gte("SCA", minSCA);
      }
      if (maxSCA !== undefined && maxSCA !== 193) {
        query = query.lte("SCA", maxSCA);
      }
      if (minSCA90 !== undefined && minSCA90 !== 0) {
        query = query.gte("SCA90", minSCA90);
      }
      if (maxSCA90 !== undefined && maxSCA90 !== 32.73) {
        query = query.lte("SCA90", maxSCA90);
      }
      if (minGCA !== undefined && minGCA !== 0) {
        query = query.gte("GCA", minGCA);
      }
      if (maxGCA !== undefined && maxGCA !== 27) {
        query = query.lte("GCA", maxGCA);
      }
      if (minGCA90 !== undefined && minGCA90 !== 0) {
        query = query.gte("GCA90", minGCA90);
      }
      if (maxGCA90 !== undefined && maxGCA90 !== 5.63) {
        query = query.lte("GCA90", maxGCA90);
      }

      if (minCmp !== undefined && minCmp !== 0) {
        query = query.gte("Cmp", minCmp);
      }
      if (maxCmp !== undefined && maxCmp !== 3269) {
        query = query.lte("Cmp", maxCmp);
      }
      if (minCmpPct !== undefined && minCmpPct !== 0) {
        query = query.gte('"Cmp%"', minCmpPct); // special symbol
      }
      if (maxCmpPct !== undefined && maxCmpPct !== 100) {
        query = query.lte('"Cmp%"', maxCmpPct); // special symbol
      }
      if (minAtt !== undefined && minAtt !== 0) {
        query = query.gte("Att", minAtt);
      }
      if (maxAtt !== undefined && maxAtt !== 3652) {
        query = query.lte("Att", maxAtt);
      }
      if (minTB !== undefined && minTB !== 0) {
        query = query.gte("TB", minTB);
      }
      if (maxTB !== undefined && maxTB !== 33) {
        query = query.lte("TB", maxTB);
      }

      if (minPPA !== undefined && minPPA !== 0) {
        query = query.gte("PPA", minPPA);
      }
      if (maxPPA !== undefined && maxPPA !== 111) {
        query = query.lte("PPA", maxPPA);
      }
      if (minCrs !== undefined && minCrs !== 0) {
        query = query.gte("Crs", minCrs);
      }
      if (maxCrs !== undefined && maxCrs !== 269) {
        query = query.lte("Crs", maxCrs);
      }
      if (minCrsPA !== undefined && minCrsPA !== 0) {
        query = query.gte("CrsPA", minCrsPA);
      }
      if (maxCrsPA !== undefined && maxCrsPA !== 33) {
        query = query.lte("CrsPA", maxCrsPA);
      }
      if (minSw !== undefined && minSw !== 0) {
        query = query.gte("Sw", minSw);
      }
      if (maxSw !== undefined && maxSw !== 50) {
        query = query.lte("Sw", maxSw);
      }
      if (minTO !== undefined && minTO !== 0) {
        query = query.gte("TO", minTO);
      }
      if (maxTO !== undefined && maxTO !== 38) {
        query = query.lte("TO", maxTO);
      }
      if (minTkl !== undefined && minTkl !== 0) {
        query = query.gte("Tkl", minTkl);
      }
      if (maxTkl !== undefined && maxTkl !== 133) {
        query = query.lte("Tkl", maxTkl);
      }
      if (minTklW !== undefined && minTklW !== 0) {
        query = query.gte("TklW", minTklW);
      }
      if (maxTklW !== undefined && maxTklW !== 80) {
        query = query.lte("TklW", maxTklW);
      }
      if (minTklInt !== undefined && minTklInt !== 0) {
        query = query.gte('"Tkl+Int"', minTklInt);
      }
      if (maxTklInt !== undefined && maxTklInt !== 181) {
        query = query.lte('"Tkl+Int"', maxTklInt);
      }
      if (minTklPct !== undefined && minTklPct !== 0) {
        query = query.gte('"Tkl%"', minTklPct);
      }
      if (maxTklPct !== undefined && maxTklPct !== 100) {
        query = query.lte('"Tkl%"', maxTklPct);
      }
      if (minInt !== undefined && minInt !== 0) {
        query = query.gte("Int", minInt);
      }
      if (maxInt !== undefined && maxInt !== 72) {
        query = query.lte("Int", maxInt);
      }
      if (minBlocks !== undefined && minBlocks !== 0) {
        query = query.gte("Blocks", minBlocks);
      }
      if (maxBlocks !== undefined && maxBlocks !== 75) {
        query = query.lte("Blocks", maxBlocks);
      }
      if (minClr !== undefined && minClr !== 0) {
        query = query.gte("Clr", minClr);
      }
      if (maxClr !== undefined && maxClr !== 249) {
        query = query.lte("Clr", maxClr);
      }
      if (minErr !== undefined && minErr !== 0) {
        query = query.gte("Err", minErr);
      }
      if (maxErr !== undefined && maxErr !== 10) {
        query = query.lte("Err", maxErr);
      }
      if (minLost !== undefined && minLost !== 0) {
        query = query.gte("Lost", minLost);
      }
      if (maxLost !== undefined && maxLost !== 63) {
        query = query.lte("Lost", maxLost);
      }
      if (minWon !== undefined && minWon !== 0) {
        query = query.gte("Won", minWon);
      }
      if (maxWon !== undefined && maxWon !== 164) {
        query = query.lte("Won", maxWon);
      }
      if (minWonPct !== undefined && minWonPct !== 0) {
        query = query.gte('"Won%"', minWonPct);
      }
      if (maxWonPct !== undefined && maxWonPct !== 100) {
        query = query.lte('"Won%"', maxWonPct);
      }
      if (minFld !== undefined && minFld !== 0) {
        query = query.gte("Fld", minFld);
      }
      if (maxFld !== undefined && maxFld !== 18) {
        query = query.lte("Fld", maxFld);
      }
      if (minFls !== undefined && minFls !== 0) {
        query = query.gte("Fls", minFls);
      }
      if (maxFls !== undefined && maxFls !== 83) {
        query = query.lte("Fls", maxFls);
      }
      if (minCrdY !== undefined && minCrdY !== 0) {
        query = query.gte("CrdY", minCrdY);
      }
      if (maxCrdY !== undefined && maxCrdY !== 15) {
        query = query.lte("CrdY", maxCrdY);
      }
      if (minCrdR !== undefined && minCrdR !== 0) {
        query = query.gte("CrdR", minCrdR);
      }
      if (maxCrdR !== undefined && maxCrdR !== 3) {
        query = query.lte("CrdR", maxCrdR);
      }
      if (min2CrdY !== undefined && min2CrdY !== 0) {
        query = query.gte('"2CrdY"', min2CrdY);
      }
      if (max2CrdY !== undefined && max2CrdY !== 2) {
        query = query.lte('"2CrdY"', max2CrdY);
      }
      if (minPKwon !== undefined && minPKwon !== 0) {
        query = query.gte("PKwon", minPKwon);
      }
      if (maxPKwon !== undefined && maxPKwon !== 5) {
        query = query.lte("PKwon", maxPKwon);
      }
      if (minPKcon !== undefined && minPKcon !== 0) {
        query = query.gte("PKcon", minPKcon);
      }
      if (maxPKcon !== undefined && maxPKcon !== 4) {
        query = query.lte("PKcon", maxPKcon);
      }

      if (minCS !== undefined && minCS !== 0) {
        query = query.gte("CS", minCS);
      }
      if (maxCS !== undefined && maxCS !== 16) {
        query = query.lte("CS", maxCS);
      }
      if (minCSPct !== undefined && minCSPct !== 0) {
        query = query.gte('"CS%"', minCSPct);
      }
      if (maxCSPct !== undefined && maxCSPct !== 200) {
        query = query.lte('"CS%"', maxCSPct);
      }
      if (minSaves !== undefined && minSaves !== 0) {
        query = query.gte("Saves", minSaves);
      }
      if (maxSaves !== undefined && maxSaves !== 150) {
        query = query.lte("Saves", maxSaves);
      }
      if (minSavePct !== undefined && minSavePct !== 0) {
        query = query.gte('"Save%"', minSavePct);
      }
      if (maxSavePct !== undefined && maxSavePct !== 100) {
        query = query.lte('"Save%"', maxSavePct);
      }
      if (minGA !== undefined && minGA !== 0) {
        query = query.gte("GA", minGA);
      }
      if (maxGA !== undefined && maxGA !== 77) {
        query = query.lte("GA", maxGA);
      }
      if (minGA90 !== undefined && minGA90 !== 0) {
        query = query.gte("GA90", minGA90);
      }
      if (maxGA90 !== undefined && maxGA90 !== 4.58) {
        query = query.lte("GA90", maxGA90);
      }
      if (minSoTA !== undefined && minSoTA !== 0) {
        query = query.gte("SoTA", minSoTA);
      }
      if (maxSoTA !== undefined && maxSoTA !== 209) {
        query = query.lte("SoTA", maxSoTA);
      }
      if (minPSxG !== undefined && minPSxG !== 0) {
        query = query.gte("PSxG", minPSxG);
      }
      if (maxPSxG !== undefined && maxPSxG !== 73.5) {
        query = query.lte("PSxG", maxPSxG);
      }
      if (minPSxGPlusMinus !== undefined && minPSxGPlusMinus !== 0) {
        query = query.gte('"PSxG+/-"', minPSxGPlusMinus);
      }
      if (maxPSxGPlusMinus !== undefined && maxPSxGPlusMinus !== 14.6) {
        query = query.lte('"PSxG+/-"', maxPSxGPlusMinus);
      }
      if (minPKA !== undefined && minPKA !== 0) {
        query = query.gte("PKA", minPKA);
      }
      if (maxPKA !== undefined && maxPKA !== 13) {
        query = query.lte("PKA", maxPKA);
      }
      if (minPKsv !== undefined && minPKsv !== 0) {
        query = query.gte("PKsv", minPKsv);
      }
      if (maxPKsv !== undefined && maxPKsv !== 4) {
        query = query.lte("PKsv", maxPKsv);
      }
      if (minAvgDist !== undefined && minAvgDist !== 2) {
        query = query.gte("AvgDist", minAvgDist);
      }
      if (maxAvgDist !== undefined && maxAvgDist !== 28) {
        query = query.lte("AvgDist", maxAvgDist);
      }
      if (minAvgLen !== undefined && minAvgLen !== 6) {
        query = query.gte("AvgLen", minAvgLen);
      }
      if (maxAvgLen !== undefined && maxAvgLen !== 56.3) {
        query = query.lte("AvgLen", maxAvgLen);
      }
      if (minLaunchPct !== undefined && minLaunchPct !== 0) {
        query = query.gte('"Launch%"', minLaunchPct);
      }
      if (maxLaunchPct !== undefined && maxLaunchPct !== 92.3) {
        query = query.lte('"Launch%"', maxLaunchPct);
      }

      if (minMP !== undefined && minMP !== 1) {
        query = query.gte("MP", minMP);
      }
      if (maxMP !== undefined && maxMP !== 38) {
        query = query.lte("MP", maxMP);
      }
      if (minMin !== undefined && minMin !== 1) {
        query = query.gte("Min", minMin);
      }
      if (maxMin !== undefined && maxMin !== 3420) {
        query = query.lte("Min", maxMin);
      }
      if (minMinPct !== undefined && minMinPct !== 0) {
        query = query.gte('"Min%"', minMinPct);
      }
      if (maxMinPct !== undefined && maxMinPct !== 100) {
        query = query.lte('"Min%"', maxMinPct);
      }
      if (minStarts !== undefined && minStarts !== 0) {
        query = query.gte("Starts", minStarts);
      }
      if (maxStarts !== undefined && maxStarts !== 38) {
        query = query.lte("Starts", maxStarts);
      }
      if (minIn !== undefined && minIn !== 0) {
        query = query.gte("Subs", minIn);
      }
      if (maxIn !== undefined && maxIn !== 29) {
        query = query.lte("Subs", maxIn);
      }
      if (minMnPerMP !== undefined && minMnPerMP !== 1) {
        query = query.gte('"Mn/MP"', minMnPerMP);
      }
      if (maxMnPerMP !== undefined && maxMnPerMP !== 90) {
        query = query.lte('"Mn/MP"', maxMnPerMP);
      }
      if (minMnPerStart !== undefined && minMnPerStart !== 9) {
        query = query.gte('"Mn/Start"', minMnPerStart);
      }
      if (maxMnPerStart !== undefined && maxMnPerStart !== 90) {
        query = query.lte('"Mn/Start"', maxMnPerStart);
      }
      if (minMnPerSub !== undefined && minMnPerSub !== 1) {
        query = query.gte('"Mn/Sub"', minMnPerSub);
      }
      if (maxMnPerSub !== undefined && maxMnPerSub !== 76) {
        query = query.lte('"Mn/Sub"', maxMnPerSub);
      }
      if (minUnSub !== undefined && minUnSub !== 0) {
        query = query.gte("unSub", minUnSub);
      }
      if (maxUnSub !== undefined && maxUnSub !== 37) {
        query = query.lte("unSub", maxUnSub);
      }

      if (minPPM !== undefined && minPPM !== 0) {
        query = query.gte("PPM", minPPM);
      }
      if (maxPPM !== undefined && maxPPM !== 3) {
        query = query.lte("PPM", maxPPM);
      }
      if (minRec !== undefined && minRec !== 0) {
        query = query.gte("Rec", minRec);
      }
      if (maxRec !== undefined && maxRec !== 3047) {
        query = query.lte("Rec", maxRec);
      }
      if (minRecov !== undefined && minRecov !== 0) {
        query = query.gte("Recov", minRecov);
      }
      if (maxRecov !== undefined && maxRecov !== 254) {
        query = query.lte("Recov", maxRecov);
      }
      if (minTouches !== undefined && minTouches !== 0) {
        query = query.gte("Touches", minTouches);
      }
      if (maxTouches !== undefined && maxTouches !== 3867) {
        query = query.lte("Touches", maxTouches);
      }
      if (minFK !== undefined && minFK !== 0) {
        query = query.gte("FK", minFK);
      }
      if (maxFK !== undefined && maxFK !== 20) {
        query = query.lte("FK", maxFK);
      }
      if (minCK !== undefined && minCK !== 0) {
        query = query.gte("CK", minCK);
      }
      if (maxCK !== undefined && maxCK !== 140) {
        query = query.lte("CK", maxCK);
      }
      if (minTI !== undefined && minTI !== 0) {
        query = query.gte("TI", minTI);
      }
      if (maxTI !== undefined && maxTI !== 399) {
        query = query.lte("TI", maxTI);
      }
      if (minLive !== undefined && minLive !== 0) {
        query = query.gte("Live", minLive);
      }
      if (maxLive !== undefined && maxLive !== 3354) {
        query = query.lte("Live", maxLive);
      }
      if (minDead !== undefined && minDead !== 0) {
        query = query.gte("Dead", minDead);
      }
      if (maxDead !== undefined && maxDead !== 462) {
        query = query.lte("Dead", maxDead);
      }

      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to);

      const { data, error, count } = await query;
      if (error) {
        setPlayers(null);
        return;
      }
      setPlayers(data || []);
      setTotal(count || 0);

      // query = query.range(from, from + batchSize - 1);
      // const { data, error, count } = await query;

      // console.log(`Batch ${batchNumber} results:`, {
      //   recordsReceived: data?.length || 0,
      //   error: error?.message,
      //   totalMatchingRecords: count,
      // });

      // if (error) {
      //   console.error("Query error:", error);
      //   setPlayers(null);
      //   return;
      // }

      // if (data && data.length > 0) {
      //   allPlayers = allPlayers.concat(data);
      //   from += batchSize;
      //   batchNumber++;

      //   // Stop if we got fewer records than requested
      //   if (data.length < batchSize) {
      //     fetchMore = false;
      //   }
      // } else {
      //   fetchMore = false;
      // }
      // }
      // console.log(`Final result: ${allPlayers.length} players fetched`);
      // setPlayers(allPlayers);
    }
    fetchPlayers();
  }, [
    page,
    hydrated,
    searchValue,
    minYear,
    maxYear,
    minAge,
    maxAge,
    nationality,
    club,
    position,
    competition,
    minCarries,
    maxCarries,
    minPrgC,
    maxPrgC,
    minPrgDist,
    maxPrgDist,
    minPrgR,
    maxPrgR,
    minMis,
    maxMis,
    minDis,
    maxDis,
    minSucc,
    maxSucc,
    minSuccPct,
    maxSuccPct,
    minAtt3rd,
    maxAtt3rd,
    minAttPen,
    maxAttPen,
    minSh,
    maxSh,
    minSoT,
    maxSoT,
    minSoTPct,
    maxSoTPct,
    minSh90,
    maxSh90,
    minSoT90,
    maxSoT90,
    minGls,
    maxGls,
    minGlsMinusPK,
    maxGlsMinusPK,
    minGlsMinusxG,
    maxGlsMinusxG,
    minGlsPerSh,
    maxGlsPerSh,
    minGlsPerSoT,
    maxGlsPerSoT,
    minGplusA,
    maxGplusA,
    minGplusAminusPK,
    maxGplusAminusPK,
    minOG,
    maxOG,
    minxG,
    maxxG,
    minnpxG,
    maxnpxG,
    minAst,
    maxAst,
    minxA,
    maxxA,
    minxAG,
    maxxAG,
    minKP,
    maxKP,
    minSCA,
    maxSCA,
    minSCA90,
    maxSCA90,
    minGCA,
    maxGCA,
    minGCA90,
    maxGCA90,
    minCmp,
    maxCmp,
    minCmpPct,
    maxCmpPct,
    minAtt,
    maxAtt,
    minTB,
    maxTB,
    minPPA,
    maxPPA,
    minCrs,
    maxCrs,
    minCrsPA,
    maxCrsPA,
    minSw,
    maxSw,
    minTO,
    maxTO,
    minTkl,
    maxTkl,
    minTklW,
    maxTklW,
    minTklInt,
    maxTklInt,
    minTklPct,
    maxTklPct,
    minInt,
    maxInt,
    minBlocks,
    maxBlocks,
    minClr,
    maxClr,
    minErr,
    maxErr,
    minLost,
    maxLost,
    minWon,
    maxWon,
    minWonPct,
    maxWonPct,
    minFld,
    maxFld,
    minFls,
    maxFls,
    minCrdY,
    maxCrdY,
    minCrdR,
    maxCrdR,
    min2CrdY,
    max2CrdY,
    minPKwon,
    maxPKwon,
    minPKcon,
    maxPKcon,
    minCS,
    maxCS,
    minCSPct,
    maxCSPct,
    minSaves,
    maxSaves,
    minSavePct,
    maxSavePct,
    minGA,
    maxGA,
    minGA90,
    maxGA90,
    minSoTA,
    maxSoTA,
    minPSxG,
    maxPSxG,
    minPSxGPlusMinus,
    maxPSxGPlusMinus,
    minPKA,
    maxPKA,
    minPKsv,
    maxPKsv,
    minAvgDist,
    maxAvgDist,
    minAvgLen,
    maxAvgLen,
    minLaunchPct,
    maxLaunchPct,
    minMP,
    maxMP,
    minMin,
    maxMin,
    minMinPct,
    maxMinPct,
    minStarts,
    maxStarts,
    minIn,
    maxIn,
    minMnPerMP,
    maxMnPerMP,
    minMnPerStart,
    maxMnPerStart,
    minMnPerSub,
    maxMnPerSub,
    minUnSub,
    maxUnSub,
    minPPM,
    maxPPM,
    minRec,
    maxRec,
    minRecov,
    maxRecov,
    minTouches,
    maxTouches,
    minFK,
    maxFK,
    minCK,
    maxCK,
    minTI,
    maxTI,
    minLive,
    maxLive,
    minDead,
    maxDead,
  ]);

  console.log("player", players);

  return (
    // <SidebarProvider>
    //   <AppSidebar />
    //   <SidebarInset>
    //     <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
    //       <SidebarTrigger className="-ml-1 cursor-pointer" />
    //       {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
    //     </header>

    //     {players?.length
    //       ? players.map((player: Player) => (
    //           <Link to={`/player/${player.Rk}`} key={player.Rk}>
    //             {player.Player}
    //           </Link>
    //         ))
    //       : ""}
    //   </SidebarInset>
    // </SidebarProvider>

    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1 cursor-pointer" />
        </header>

        <main className="min-h-screen bg-background p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {uniquePlayers(players).map((player: Player) => (
                <Link to={`/player/${player.Rk}`} key={player.Rk}>
                  <PlayerCard player={player} />
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* {players?.length
          ? players.map((player: Player) => (
              <Link to={`/player/${player.Rk}`} key={player.Rk}>
                {player.Player}
              </Link>
            ))
          : ""} */}

        <Pagination className="my-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 1) setPage(page - 1);
                }}
                aria-disabled={page === 1}
              />
            </PaginationItem>
            {renderPageLinks()}
            {totalPages > 5 && page < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page < totalPages) setPage(page + 1);
                }}
                aria-disabled={page === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </SidebarInset>
    </SidebarProvider>
  );
}
