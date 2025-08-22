import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/shadcn-io/spinner/index";
import type { FifaPlayerProfile } from "@/types/FifaPlayerProfile";

interface FifaCardProps {
  fifaProfile: FifaPlayerProfile | null | undefined;
  fifaProfileImage: string;
  loading: boolean;
}

export function FifaCard({
  fifaProfile,
  fifaProfileImage,
  loading,
}: FifaCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/20 hover:shadow-3xl hover:shadow-yellow-400/30 transition-all duration-500 bg-[#15803d]/10">
      <CardHeader>
        <CardTitle className="text-[#15803d]">
          FIFA Ultimate Team Card
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center">
          {loading ? (
            <div className="flex items-center justify-center w-48 h-64 bg-gray-100 dark:bg-gray-800 rounded">
              <Spinner className="w-8 h-8 text-blue-500" />
            </div>
          ) : (
            <img
              src={fifaProfileImage || "/src/assets/placeholder2.jpg"}
              alt={fifaProfile?.Name}
              className="object-cover rounded w-48 h-64"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
