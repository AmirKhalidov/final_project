import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  getFifaImageUrl,
  getPlayerByRank,
  getPlayerFromFifa,
} from "@/services/apiPlayers";
import { getPlayerAnnotationFromAI } from "@/services/AI";
import { fetchWikipediaImage } from "@/services/profileDetails";
import type { Player } from "@/types/Player";
import type { FifaPlayerProfile } from "@/types/FifaPlayerProfile";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { PlayerImage } from "@/components/PlayerImage";
import { FifaCard } from "@/components/FifaCard";
import { FifaStats } from "@/components/FifaStats";
import { AIPortrait } from "@/components/AIPortrait";
import { PlayerRadarChart } from "@/components/PlayerRadarChart";
import { StatGroup } from "@/components/StatGroup";
import {
  getPersonalStats,
  getDribblingStats,
  getShootingStats,
  getGoalScoringStats,
  getAssistsStats,
  getPassingStats,
  getDefendingStats,
  getPlayingTimeStats,
  getOtherStats,
  getGoalkeepingStats,
} from "@/utils/playerStats";

export default function PlayerDetail() {
  const { rk } = useParams<{ rk: string }>();
  const [player, setPlayer] = useState<Player | null>(null);
  const [annotation, setAnnotation] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");
  const [fifaProfile, setFifaProfile] = useState<FifaPlayerProfile | null>();
  const [fifaProfileImage, setFifaProfileImage] = useState<string>("");
  const [profileImageLoading, setProfileImageLoading] = useState<boolean>(true);
  const [fifaImageLoading, setFifaImageLoading] = useState<boolean>(true);

  useEffect(() => {
    getPlayerByRank(Number(rk)).then(setPlayer);
  }, [rk]);

  useEffect(() => {
    if (player) {
      setProfileImageLoading(true);
      setFifaImageLoading(true);

      getPlayerAnnotationFromAI(player).then(setAnnotation);

      fetchWikipediaImage(player?.Player)
        .then((image) => {
          setProfileImage(image);
          setProfileImageLoading(false);
        })
        .catch(() => {
          setProfileImageLoading(false);
        });

      getPlayerFromFifa(player?.Player)
        .then((profile) => {
          setFifaProfile(profile);
        })
        .catch(() => {
          setFifaProfile(null);
          setFifaImageLoading(false);
        });
    }
  }, [player]);

  useEffect(() => {
    if (fifaProfile && Object.keys(fifaProfile).length > 0) {
      const imageUrl = getFifaImageUrl(fifaProfile);
      setFifaProfileImage(imageUrl);
      setFifaImageLoading(false);
    } else if (
      fifaProfile === null ||
      (fifaProfile && Object.keys(fifaProfile).length === 0)
    ) {
      setFifaImageLoading(false);
    }
  }, [fifaProfile]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [rk]);

  return (
    <>
      <header className="bg-background sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <Header />
      </header>

      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          {/* Player Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text animate-pulse text-[#15803d]">
              {player?.Player}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-xl text-muted-foreground">
                {player?.Pos}
              </span>
              <span className="text-xl text-muted-foreground">•</span>
              <span className="text-xl text-muted-foreground">
                {player?.Squad}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6 p-6 bg-background rounded-lg border border-primary/10 shadow-xl shadow-primary/5 backdrop-blur-sm">
              <PlayerImage
                profileImage={profileImage}
                playerName={player?.Player}
                loading={profileImageLoading}
              />

              <StatGroup title="Personal" stats={getPersonalStats(player)} />
              <StatGroup
                title="Dribbling & Carrying"
                stats={getDribblingStats(player)}
                showProgress
              />
              <StatGroup
                title="Shooting"
                stats={getShootingStats(player)}
                showProgress
              />
              <StatGroup
                title="Goals & Scoring"
                stats={getGoalScoringStats(player)}
                showProgress
              />
              <StatGroup
                title="Assists & Creation"
                stats={getAssistsStats(player)}
                showProgress
              />
              <StatGroup
                title="Passing"
                stats={getPassingStats(player)}
                showProgress
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6 p-6 bg-background rounded-lg border border-primary/10 shadow-xl shadow-primary/5 backdrop-blur-sm">
              <FifaCard
                fifaProfile={fifaProfile}
                fifaProfileImage={fifaProfileImage}
                loading={fifaImageLoading}
              />

              <FifaStats fifaProfile={fifaProfile} />
              <AIPortrait annotation={annotation} />
              <PlayerRadarChart fifaProfile={fifaProfile} />

              <StatGroup
                title="Defending"
                stats={getDefendingStats(player)}
                showProgress
              />
              <StatGroup
                title="Playing Time"
                stats={getPlayingTimeStats(player)}
                showProgress
              />
              <StatGroup
                title="Other"
                stats={getOtherStats(player)}
                showProgress
              />

              {player?.Pos === "GK" && (
                <StatGroup
                  title="Goalkeeping"
                  stats={getGoalkeepingStats(player)}
                  showProgress
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
