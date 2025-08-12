export async function fetchWikipediaImage(playerName: string) {
  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      playerName
    )}`
  );
  const data = await response.json();
  return data.thumbnail?.source || null;
}

