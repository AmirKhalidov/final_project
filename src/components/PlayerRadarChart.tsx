import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FifaPlayerProfile } from "@/types/FifaPlayerProfile";

interface PlayerRadarChartProps {
  fifaProfile: FifaPlayerProfile | null | undefined;
}

export function PlayerRadarChart({ fifaProfile }: PlayerRadarChartProps) {
  if (!fifaProfile?.Name) {
    return (
      <Card className="border-2 border-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 bg-[#15803d]/10">
        <CardHeader>
          <CardTitle className="text-[#15803d]">
            Player Characteristics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>No data...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 bg-[#15803d]/10">
      <CardHeader>
        <CardTitle className="text-[#15803d]">Player Characteristics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-120 flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>

            {/* Grid circles */}
            {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, index) => (
              <polygon
                key={index}
                points={[
                  [200 + 100 * scale, 200],
                  [200 + 50 * scale, 200 - 86.6 * scale],
                  [200 - 50 * scale, 200 - 86.6 * scale],
                  [200 - 100 * scale, 200],
                  [200 - 50 * scale, 200 + 86.6 * scale],
                  [200 + 50 * scale, 200 + 86.6 * scale],
                ]
                  .map(([x, y]) => `${x},${y}`)
                  .join(" ")}
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="1"
              />
            ))}

            {/* Grid lines */}
            {[
              [200, 200, 300, 200],
              [200, 200, 250, 113.4],
              [200, 200, 150, 113.4],
              [200, 200, 100, 200],
              [200, 200, 150, 286.6],
              [200, 200, 250, 286.6],
            ].map(([x1, y1, x2, y2], index) => (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(var(--muted))"
                strokeWidth="1"
              />
            ))}

            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Player stats polygon */}
            <polygon
              points={[
                [200 + (fifaProfile?.SHO / 100) * 100, 200],
                [
                  200 + (fifaProfile?.PAC / 100) * 50,
                  200 - (fifaProfile?.PAC / 100) * 86.6,
                ],
                [
                  200 - (fifaProfile?.PAS / 100) * 50,
                  200 - (fifaProfile?.PAS / 100) * 86.6,
                ],
                [200 - (fifaProfile?.DEF / 100) * 100, 200],
                [
                  200 - (fifaProfile?.PHY / 100) * 50,
                  200 + (fifaProfile?.PHY / 100) * 86.6,
                ],
                [
                  200 + (fifaProfile?.DRI / 100) * 50,
                  200 + (fifaProfile?.DRI / 100) * 86.6,
                ],
              ]
                .map(([x, y]) => `${x},${y}`)
                .join(" ")}
              fill="hsl(var(--primary))"
              fillOpacity="0.4"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              filter="url(#glow)"
              className="animate-pulse"
            />

            {/* Data points */}
            {[
              {
                x: 200 + (fifaProfile?.SHO / 100) * 100,
                y: 200,
                label: "Shooting",
                value: fifaProfile?.SHO,
              },
              {
                x: 200 + (fifaProfile?.PAC / 100) * 50,
                y: 200 - (fifaProfile?.PAC / 100) * 86.6,
                label: "Pace",
                value: fifaProfile?.PAC,
              },
              {
                x: 200 - (fifaProfile?.PAS / 100) * 50,
                y: 200 - (fifaProfile?.PAS / 100) * 86.6,
                label: "Passing",
                value: fifaProfile?.PAS,
              },
              {
                x: 200 - (fifaProfile?.DEF / 100) * 100,
                y: 200,
                label: "Defending",
                value: fifaProfile?.DEF,
              },
              {
                x: 200 - (fifaProfile?.PHY / 100) * 50,
                y: 200 + (fifaProfile?.PHY / 100) * 86.6,
                label: "Physical",
                value: fifaProfile?.PHY,
              },
              {
                x: 200 + (fifaProfile?.DRI / 100) * 50,
                y: 200 + (fifaProfile?.DRI / 100) * 86.6,
                label: "Dribbling",
                value: fifaProfile?.DRI,
              },
            ].map((point, index) => (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r="6"
                fill="hsl(var(--primary))"
                stroke="white"
                strokeWidth="3"
                filter="url(#glow)"
                className="animate-pulse"
              />
            ))}

            {/* Labels */}
            <text
              x="320"
              y="205"
              textAnchor="start"
              className="fill-foreground text-sm font-semibold"
            >
              Shooting ({fifaProfile?.SHO})
            </text>
            <text
              x="270"
              y="100"
              textAnchor="start"
              className="fill-foreground text-sm font-semibold"
            >
              Pace ({fifaProfile?.PAC})
            </text>
            <text
              x="130"
              y="100"
              textAnchor="end"
              className="fill-foreground text-sm font-semibold"
            >
              Passing ({fifaProfile?.PAS})
            </text>
            <text
              x="80"
              y="205"
              textAnchor="end"
              className="fill-foreground text-sm font-semibold"
            >
              Defending ({fifaProfile?.DEF})
            </text>
            <text
              x="130"
              y="310"
              textAnchor="end"
              className="fill-foreground text-sm font-semibold"
            >
              Physical ({fifaProfile?.PHY})
            </text>
            <text
              x="270"
              y="310"
              textAnchor="start"
              className="fill-foreground text-sm font-semibold"
            >
              Dribbling ({fifaProfile?.DRI})
            </text>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
