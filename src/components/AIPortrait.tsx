import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AIPortraitProps } from "@/types/PlayerDetailTypes";

export function AIPortrait({ annotation }: AIPortraitProps) {
  return (
    <Card className="bg-[#15803d]/10">
      <CardHeader>
        <CardTitle className="text-[#15803d]">AI Portrait</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm max-w-none">
          {annotation.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="mb-4 text-gray-800 leading-relaxed font-semibold"
            >
              {para}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
