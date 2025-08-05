import supabase from "./supabase";

export async function getPlayers() {
  const { data, error } = await supabase.from("PlayersData").select("*");

  if (error) {
    console.error(error);
    throw new Error("Players could not be loaded");
  }

  return data;
}

export async function getPlayerByRk(Rk: string | number) {
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
