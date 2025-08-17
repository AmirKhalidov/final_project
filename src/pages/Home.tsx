import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import supabase from "@/services/supabase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFiltersStore } from "@/stores/useFiltersStore";
import { useFilterSync } from "@/hooks/useFilterSync";

export default function Home() {
  const [players, setPlayers] = useState<[] | null>([]);

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
    minAtt,
    maxAtt,
    minSucc,
    maxSucc,
    minSuccPct,
    maxSuccPct,
    minAtt3rd,
    maxAtt3rd,
    minAttPen,
    maxAttPen,
  } = useFiltersStore();

  // Fetch players when filters change
  useEffect(() => {
    if (!hydrated) return;
    async function fetchPlayers() {
      console.log("Starting fetch...");

      // First, let's check the total count without any filters
      const { count: totalCount } = await supabase
        .from("PlayersData")
        .select("*", { count: "exact", head: true });

      console.log("Total records in database:", totalCount);

      let allPlayers: any[] = [];
      let from = 0;
      const batchSize = 1000;
      let fetchMore = true;
      let batchNumber = 1;

      while (fetchMore) {
        console.log(
          `Fetching batch ${batchNumber} (records ${from} to ${
            from + batchSize - 1
          })`
        );

        let query = supabase.from("PlayersData").select("*");

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
        
        if (minAtt !== 0) query = query.gte("Att", minAtt);
        if (maxAtt !== 3652) query = query.lte("Att", maxAtt);
        
        if (minSucc !== 0) query = query.gte("Succ", minSucc);
        if (maxSucc !== 161) query = query.lte("Succ", maxSucc);
        
        if (minSuccPct !== 0) query = query.gte('"Succ%"', minSuccPct);
        if (maxSuccPct !== 100) query = query.lte('"Succ%"', maxSuccPct);
        
        if (minAtt3rd !== 0) query = query.gte("Att 3rd", minAtt3rd);
        if (maxAtt3rd !== 27) query = query.lte("Att 3rd", maxAtt3rd);
        
        if (minAttPen !== 0) query = query.gte("Att Pen", minAttPen);
        if (maxAttPen !== 356) query = query.lte("Att Pen", maxAttPen);

   

        query = query.range(from, from + batchSize - 1);
        const { data, error, count } = await query;

        console.log(`Batch ${batchNumber} results:`, {
          recordsReceived: data?.length || 0,
          error: error?.message,
          totalMatchingRecords: count,
        });

        if (error) {
          console.error("Query error:", error);
          setPlayers(null);
          return;
        }

        if (data && data.length > 0) {
          allPlayers = allPlayers.concat(data);
          from += batchSize;
          batchNumber++;

          // Stop if we got fewer records than requested
          if (data.length < batchSize) {
            fetchMore = false;
          }
        } else {
          fetchMore = false;
        }
      }
      console.log(`Final result: ${allPlayers.length} players fetched`);
      setPlayers(allPlayers);
    }
    fetchPlayers();
  }, [
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
    minAtt,
    maxAtt,
    minSucc,
    maxSucc,
    minSuccPct,
    maxSuccPct,
    minAtt3rd,
    maxAtt3rd,
    minAttPen,
    maxAttPen,
  ]);

  console.log("player", players);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1 cursor-pointer" />
          {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
        </header>

        {players?.length
          ? players.map((player) => (
              <Link to={`/player/${player.Rk}`} key={player.Rk}>
                {player.Player}
              </Link>
            ))
          : ""}
      </SidebarInset>
    </SidebarProvider>
  );
}
