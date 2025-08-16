// import { AppSidebar } from "@/components/app-sidebar";
// import { Separator } from "@/components/ui/separator";
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import supabase from "@/services/supabase";
// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";

// export default function Home() {
//   const [players, setPlayers] = useState<[] | null>([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const searchValue = searchParams.get("search") || "";
//   const minYear = Number(searchParams.get("minYear")) || 1982;
//   const maxYear = Number(searchParams.get("maxYear")) || 2008;
//   const minAge = Number(searchParams.get("minAge")) || 16;
//   const maxAge = Number(searchParams.get("maxAge")) || 41;
//   const nationality = searchParams.get("nationality") || "";
//   const club = searchParams.get("club") || "";
//   const position = searchParams.get("position") || "";
//   const competition = searchParams.get("competition") || "";

//   function handleSearch(name: string) {
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       if (name) params.set("search", name);
//       else params.delete("search");
//       return params;
//     });
//   }

//   function handleYearRangeChange([min, max]: [number, number]) {
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       params.set("minYear", String(min));
//       params.set("maxYear", String(max));
//       return params;
//     });
//   }

//   function handleAgeRangeChange([min, max]: [number, number]) {
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       params.set("minAge", String(min));
//       params.set("maxAge", String(max));
//       return params;
//     });
//   }

//   function handleNationalityChange(value: string) {
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       if (value) params.set("nationality", value);
//       else params.delete("nationality");
//       return params;
//     });
//   }

//   function handleClubChange(value: string) {
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       if (value) params.set("club", value);
//       else params.delete("club");
//       return params;
//     });
//   }

//   function handlePositionChange(value: string) {
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       if (value) params.set("position", value);
//       else params.delete("position");
//       return params;
//     });
//   }

//   function handleCompetitionChange(value: string) {
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       if (value) params.set("competition", value);
//       else params.delete("competition");
//       return params;
//     });
//   }

//   // Fetch players when filters change
//   useEffect(() => {
//     async function fetchPlayers() {
//       let query = supabase.from("PlayersData").select("*");
//       if (searchValue) query = query.ilike("Player", `%${searchValue}%`);
//       if (minYear) query = query.gte("Born", minYear);
//       if (maxYear) query = query.lte("Born", maxYear);
//       if (minAge) query = query.gte("Age", minAge);
//       if (maxAge) query = query.lte("Age", maxAge);
//       if (nationality) query = query.ilike("Nation", `%${nationality}%`);
//       if (club) query = query.ilike("Squad", `%${club}%`);
//       if (position) query = query.eq("Pos", position);
//       if (competition) query = query.eq("Comp", competition);

//       const { data, error } = await query;
//       if (!error) setPlayers(data || []);
//       else setPlayers(null);
//     }
//     fetchPlayers();
//   }, [
//     searchValue,
//     minYear,
//     maxYear,
//     minAge,
//     maxAge,
//     nationality,
//     club,
//     position,
//     competition,
//   ]);

//   console.log("player", players);

//   return (
//     <SidebarProvider>
//       <AppSidebar
//         onSearch={handleSearch}
//         searchValue={searchValue}
//         onSearchValueChange={handleSearch}
//         yearRange={[minYear, maxYear]}
//         onYearRangeChange={handleYearRangeChange}
//         ageRange={[minAge, maxAge]}
//         onAgeRangeChange={handleAgeRangeChange}
//         nationality={nationality}
//         onNationalityChange={handleNationalityChange}
//         club={club}
//         onClubChange={handleClubChange}
//         position={position}
//         onPositionChange={handlePositionChange}
//         competition={competition}
//         onCompetitionChange={handleCompetitionChange}
//       />
//       <SidebarInset>
//         <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
//           <SidebarTrigger className="-ml-1 cursor-pointer" />
//           {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
//         </header>

//         {players?.length
//           ? players.map((player) => (
//               <Link to={`/player/${player.Rk}`} key={player.Rk}>
//                 {player.Player}
//               </Link>
//             ))
//           : ""}
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }


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
    searchValue,
    minYear,
    maxYear,
    minAge,
    maxAge,
    nationality,
    club,
    position,
    competition
  } = useFiltersStore();

  // Fetch players when filters change
  useEffect(() => {
    async function fetchPlayers() {
      let query = supabase.from("PlayersData").select("*");
      if (searchValue) query = query.ilike("Player", `%${searchValue}%`);
      if (minYear) query = query.gte("Born", minYear);
      if (maxYear) query = query.lte("Born", maxYear);
      if (minAge) query = query.gte("Age", minAge);
      if (maxAge) query = query.lte("Age", maxAge);
      if (nationality) query = query.ilike("Nation", `%${nationality}%`);
      if (club) query = query.ilike("Squad", `%${club}%`);
      if (position) query = query.eq("Pos", position);
      if (competition) query = query.eq("Comp", competition);

      const { data, error } = await query;
      if (!error) setPlayers(data || []);
      else setPlayers(null);
    }
    fetchPlayers();
  }, [
    searchValue,
    minYear,
    maxYear,
    minAge,
    maxAge,
    nationality,
    club,
    position,
    competition,
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