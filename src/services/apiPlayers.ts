import supabase from "./supabase";

export async function getPlayers() {
  const { data, error } = await supabase.from("PlayersData").select("*");

  if (error) {
    console.error(error);
    throw new Error("Players could not be loaded");
  }

  return data;
}

export async function getPlayerByRank(Rk: number) {
  const { data, error } = await supabase
    .from("PlayersData")
    .select("*")
    .eq("Rk", Rk)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Player could not be loaded");
  }

  return data;
}

export async function getPlayerFromFifa(Name: string) {
  const { data, error } = await supabase
    .from("FIFAMetrics")
    .select("*")
    .eq("Name", Name)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Player could not be loaded");
  }

  return data;
}

export function getFifaImageUrl(fifaProfile: any) {
  if (!fifaProfile || !fifaProfile.url) return "";
  const segments = fifaProfile.url.split("/");
  const imageId = segments[segments.length - 1];
  return `https://ratings-images-prod.pulse.ea.com/FC25/full/player-shields/en/${imageId}.png?width=265`;
}