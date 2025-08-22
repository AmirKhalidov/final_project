import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatWithProgress } from "./StatWithProgress";
import type { StatGroupProps } from "@/types/PlayerDetailTypes";

export function StatGroup({
  title,
  stats,
  showProgress = false,
}: StatGroupProps) {
  return (
    <Card className="mb-4 border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group bg-[#15803d]/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg group-hover:text-primary/90 transition-colors duration-300 text-[#15803d]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {stats.map((stat, index) =>
          showProgress ? (
            <StatWithProgress
              key={index}
              label={stat.label}
              value={stat.value ?? ""}
              maxValue={stat.maxValue}
              isPercentage={stat.isPercentage}
            />
          ) : (
            <div key={index} className="flex justify-between items-center py-1">
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
              <span className="font-semibold text-sm">
                {typeof stat.value === "number"
                  ? stat.value.toLocaleString()
                  : stat.value}
                {stat.isPercentage ? "%" : ""}
              </span>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
}
