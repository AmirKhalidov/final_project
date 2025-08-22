import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { useFavorites } from "@/contexts/FavoritesContext";
import { PlayerCard } from "@/components/PlayerCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const { favorites } = useFavorites();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <header className="bg-background sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <Header />
      </header>

      <main className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-[#15803d]">
              My Favorite Players
            </h1>
            <p className="text-muted-foreground text-lg">
              {favorites.length === 0
                ? "You haven't favorited any players yet. Start exploring and add players to your favorites!"
                : `You have ${favorites.length} favorite player${
                    favorites.length === 1 ? "" : "s"
                  }`}
            </p>
          </div>

          {favorites.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {favorites.map((player) => (
                <Link to={`/player/${player.Rk}`} key={player.Rk}>
                  <PlayerCard player={player} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">⭐</div>
              <h2 className="text-2xl font-semibold mb-4">No favorites yet</h2>
              <p className="text-muted-foreground mb-8">
                Discover amazing players and add them to your favorites to see
                them here.
              </p>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Exploring Players
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
