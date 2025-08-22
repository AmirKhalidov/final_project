import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/shadcn-io/spinner/index";
import type { PlayerImageProps } from "@/types/PlayerDetailTypes";

export function PlayerImage({
  profileImage,
  playerName,
  loading,
}: PlayerImageProps) {
  return (
    <Card className="overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 bg-[#15803d]/10">
      <CardContent className="p-0">
        <div className="flex justify-center">
          <div className="relative aspect-[3/4] max-w-md w-full">
            {loading ? (
              <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Spinner className="w-8 h-8 text-blue-500" />
              </div>
            ) : (
              <img
                src={profileImage || "/src/assets/placeholder.jpg"}
                alt={playerName}
                className="object-cover rounded-lg transition-transform duration-500 hover:scale-105 w-full h-full"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
