import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FifaStatsProps } from "@/types/PlayerDetailTypes";

export function FifaStats({ fifaProfile }: FifaStatsProps) {
  if (!fifaProfile?.Name) {
    return (
      <Card className="bg-[#15803d]/10">
        <CardHeader>
          <CardTitle className="text-[#15803d]">FIFA Stats</CardTitle>
          <h2>No Data Found...</h2>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="bg-[#15803d]/10">
      <CardHeader>
        <CardTitle className="text-[#15803d]">FIFA Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-muted-foreground">
              PACE
            </h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Acceleration</span>
                <span className="font-semibold">
                  {fifaProfile?.Acceleration}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Sprint Speed</span>
                <span className="font-semibold">
                  {fifaProfile?.["Sprint Speed"]}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-muted-foreground">
              SHOOTING
            </h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Positioning</span>
                <span className="font-semibold">
                  {fifaProfile?.Positioning}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Finishing</span>
                <span className="font-semibold">{fifaProfile?.Finishing}</span>
              </div>
              <div className="flex justify-between">
                <span>Shot Power</span>
                <span className="font-semibold">
                  {fifaProfile?.["Shot Power"]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Long Shots</span>
                <span className="font-semibold">
                  {fifaProfile?.["Long Shots"]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Volleys</span>
                <span className="font-semibold">{fifaProfile?.Volleys}</span>
              </div>
              <div className="flex justify-between">
                <span>Penalties</span>
                <span className="font-semibold">{fifaProfile?.Penalties}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-muted-foreground">
              PASSING
            </h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Vision</span>
                <span className="font-semibold">{fifaProfile?.Vision}</span>
              </div>
              <div className="flex justify-between">
                <span>Crossing</span>
                <span className="font-semibold">{fifaProfile?.Crossing}</span>
              </div>
              <div className="flex justify-between">
                <span>Free Kick Accuracy</span>
                <span className="font-semibold">
                  {fifaProfile?.["Free Kick Accuracy"]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Short Passing</span>
                <span className="font-semibold">
                  {fifaProfile?.["Short Passing"]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Long Passing</span>
                <span className="font-semibold">
                  {fifaProfile?.["Long Passing"]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Curve</span>
                <span className="font-semibold">{fifaProfile?.Curve}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-muted-foreground">
              DRIBBLING
            </h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Agility</span>
                <span className="font-semibold">{fifaProfile?.Agility}</span>
              </div>
              <div className="flex justify-between">
                <span>Balance</span>
                <span className="font-semibold">{fifaProfile?.Balance}</span>
              </div>
              <div className="flex justify-between">
                <span>Reactions</span>
                <span className="font-semibold">{fifaProfile?.Reactions}</span>
              </div>
              <div className="flex justify-between">
                <span>Ball Control</span>
                <span className="font-semibold">
                  {fifaProfile?.["Ball Control"]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Composure</span>
                <span className="font-semibold">{fifaProfile?.Composure}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-muted-foreground">
              DEFENDING
            </h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Interceptions</span>
                <span className="font-semibold">
                  {fifaProfile?.Interceptions}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Heading Accuracy</span>
                <span className="font-semibold">
                  {fifaProfile?.["Heading Accuracy"]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Def Awareness</span>
                <span className="font-semibold">
                  {fifaProfile?.["Def Awareness"]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Standing Tackle</span>
                <span className="font-semibold">
                  {fifaProfile?.["Standing Tackle"]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Sliding Tackle</span>
                <span className="font-semibold">
                  {fifaProfile?.["Sliding Tackle"]}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-muted-foreground">
              PHYSICAL
            </h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Jumping</span>
                <span className="font-semibold">{fifaProfile?.Jumping}</span>
              </div>
              <div className="flex justify-between">
                <span>Stamina</span>
                <span className="font-semibold">{fifaProfile?.Stamina}</span>
              </div>
              <div className="flex justify-between">
                <span>Strength</span>
                <span className="font-semibold">{fifaProfile?.Strength}</span>
              </div>
              <div className="flex justify-between">
                <span>Aggression</span>
                <span className="font-semibold">{fifaProfile?.Aggression}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <h4 className="font-semibold text-sm text-muted-foreground mb-3">
            PLAYER INFO
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span>Weak Foot</span>
              <span className="font-semibold">
                {fifaProfile?.["Weak foot"]}⭐
              </span>
            </div>
            <div className="flex justify-between">
              <span>Skill Moves</span>
              <span className="font-semibold">
                {fifaProfile?.["Skill moves"]}⭐
              </span>
            </div>
            <div className="flex justify-between">
              <span>Preferred Foot</span>
              <span className="font-semibold">
                {fifaProfile?.["Preferred foot"]}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Height</span>
              <span className="font-semibold">{fifaProfile?.Height}</span>
            </div>
            <div className="flex justify-between">
              <span>Weight</span>
              <span className="font-semibold">{fifaProfile?.Weight}</span>
            </div>
            <div className="flex justify-between">
              <span>Alt. Positions</span>
              <span className="font-semibold">
                {fifaProfile?.["Alternative positions"]}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
