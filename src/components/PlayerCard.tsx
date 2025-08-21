import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import type { Player } from "@/types/Player";
import { fetchWikipediaImage } from "@/services/profileDetails";
import { getFifaImageUrl, getPlayerFromFifa } from "@/services/apiPlayers";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const { addToFavorites, removeFromFavorites, isFavorited } = useFavorites();
  const { user } = useAuth();
  const [profileImage, setProfileImage] = useState<string>("");
  const [fifaProfile, setFifaProfile] = useState<object>({});
  const [fifaProfileImage, setFifaProfileImage] = useState<string>("");
  const [showLoginTooltip, setShowLoginTooltip] = useState(false);

  const isPlayerFavorited = isFavorited(player.Rk);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      setShowLoginTooltip(true);
      setTimeout(() => setShowLoginTooltip(false), 3000);
      return;
    }

    if (isPlayerFavorited) {
      removeFromFavorites(player.Rk);
    } else {
      addToFavorites(player);
    }
  };

  useEffect(() => {
    fetchWikipediaImage(player?.Player).then(setProfileImage);
    getPlayerFromFifa(player?.Player).then(setFifaProfile);
    setFifaProfileImage(getFifaImageUrl(fifaProfile));
  }, [player, fifaProfile]);

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 hover:border-blue-200 dark:hover:border-blue-800">
      <CardHeader className="p-0">
        <div className="relative h-[235px] overflow-hidden">
          <img
            src={
              profileImage || fifaProfileImage || "/src/assets/placeholder.jpg"
            }
            alt={`${player.Player} - ${player.Squad}`}
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 right-3">
            {!user ? (
              <TooltipProvider>
                <Tooltip
                  open={showLoginTooltip}
                  onOpenChange={() => {}}
                  delayDuration={0}
                >
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={toggleFavorite}
                      onMouseEnter={() => {}}
                      onMouseLeave={() => {}}
                      className="h-8 w-8 p-0 cursor-pointer rounded-full backdrop-blur-sm transition-all duration-300 bg-white/90 hover:bg-white text-gray-700 hover:text-red-500"
                    >
                      <Heart className="h-4 w-4 transition-all duration-300" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="bg-gray-900 text-white"
                    onPointerDownOutside={() => setShowLoginTooltip(false)}
                  >
                    <p>Please log in to add players to favorites</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleFavorite}
                className={`h-8 w-8 p-0 cursor-pointer rounded-full backdrop-blur-sm transition-all duration-300 ${
                  isPlayerFavorited
                    ? "bg-red-500/90 hover:bg-red-600/90 text-white"
                    : "bg-white/90 hover:bg-white text-gray-700 hover:text-red-500"
                }`}
              >
                <Heart
                  className={`h-4 w-4 transition-all duration-300 ${
                    isPlayerFavorited ? "fill-current" : ""
                  }`}
                />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-5 py-0">
        <h3 className="font-bold text-xl mb-2 text-foreground truncate group-hover:text-blue-600 transition-colors duration-300">
          {player.Player}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 font-medium uppercase tracking-wide">
          {player.Pos}
        </p>
        <Badge
          variant="outline"
          className="text-xs font-semibold px-3 py-1 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
        >
          {player.Squad}
        </Badge>
      </CardContent>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
    </Card>
  );
}
