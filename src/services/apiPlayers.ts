import supabase from "./supabase";

export async function getPlayers() {
  let { data, error } = await supabase.from("PlayersData").select("*");

  if (error) {
    console.error(error);
    throw new Error("Players could not be loaded");
  }

  return data;
}
