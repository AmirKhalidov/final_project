import type { FifaPlayerProfile } from "./FifaPlayerProfile";

export interface AIPortraitProps {
  annotation: string;
}

export interface PlayerImageProps {
  profileImage: string;
  playerName?: string;
  loading: boolean;
}

export interface StatGroupProps {
  title: string;
  stats: Array<{
    label: string;
    value: string | number | undefined | null;
    isPercentage?: boolean;
    maxValue?: number;
  }>;
  showProgress?: boolean;
}

export interface FifaCardProps {
  fifaProfile: FifaPlayerProfile | null | undefined;
  fifaProfileImage: string;
  loading: boolean;
}

export interface FifaStatsProps {
  fifaProfile: FifaPlayerProfile | null | undefined;
}

export interface PlayerRadarChartProps {
  fifaProfile: FifaPlayerProfile | null | undefined;
}