interface StatWithProgressProps {
  label: string;
  value: number | string;
  maxValue?: number;
  isPercentage?: boolean;
}

export function StatWithProgress({
  label,
  value,
  maxValue = 100,
  isPercentage = false,
}: StatWithProgressProps) {
  const numericValue =
    typeof value === "string"
      ? Number.parseFloat(value.split("-")[1] || value)
      : value;
  const percentage = isPercentage
    ? numericValue
    : (numericValue / maxValue) * 100;

  return (
    <div className="py-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="font-semibold text-sm">
          {typeof value === "number" ? value.toLocaleString() : value}
          {isPercentage ? "%" : ""}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 relative overflow-hidden">
        <div
          className="h-2 rounded-full transition-all duration-700 ease-out relative animate-pulse shadow-lg"
          style={{
            width: `${Math.min(percentage, 100)}%`,
            background: "#15803d",
            boxShadow: "0 0 16px 2px #15803d66",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
