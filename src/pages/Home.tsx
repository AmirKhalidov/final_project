import { AppSidebar } from "@/components/app-sidebar";
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
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFilterSync } from "@/hooks/useFilterSync";
import { usePlayersFetch } from "@/hooks/usePlayersFetch";
import type { Player } from "@/types/Player";
import { PlayerCard } from "@/components/PlayerCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Header } from "@/components/Header";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageSize = 25;
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { players, loading, error, totalPages } = usePlayersFetch(
    page,
    pageSize
  );

  useFilterSync();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const setPage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);
    if (newPage === 1) {
      newParams.delete("page");
    } else {
      newParams.set("page", newPage.toString());
    }
    setSearchParams(newParams);
  };

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

  const uniquePlayersData = uniquePlayers(players);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error loading players: {error}</p>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1 cursor-pointer" />
          <Header />
        </header>

        <main className="min-h-screen bg-background p-6">
          {page === 1 && <Hero />}
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Array.from({ length: pageSize }).map((_, i) => (
                  <div
                    key={i}
                    className="h-64 bg-gray-200 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            ) : uniquePlayersData.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 px-4">
                <div className="text-center max-w-md mx-auto">
                  <div className="mb-6">
                    <svg
                      className="mx-auto h-20 w-20 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    No Players Found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We couldn't find any players matching your current filters.
                    Try adjusting your search criteria or clearing some filters.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      💡 <span className="font-medium">Tip:</span> Try
                      broadening your age range or position filters
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      🔍 <span className="font-medium">Or:</span> Clear all
                      filters to see all available players
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {uniquePlayersData.map((player: Player) => (
                  <Link to={`/player/${player.Rk}`} key={player.Rk}>
                    <PlayerCard player={player} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>

        {!loading && uniquePlayersData.length > 0 && (
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
        )}

        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
