export async function fetchPlayerProfile(playerName: string) {
  try {
    const response = await fetch(`/api/player/alejandro garnacho`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function fetchWikipediaImage(playerName: string) {
  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      playerName
    )}`
  );
  const data = await response.json();
  return data.thumbnail?.source || null;
}

export async function fetchWikipediaBio(playerName: string) {
  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${encodeURIComponent(
      playerName
    )}`
  );
  const data = await response.json();
  // The infobox is usually in data.lead.sections[0].text as HTML
  const html = data.lead.sections[0].text;

  // Use regex to extract height and weight from the infobox HTML
  const heightMatch = html.match(/Height<\/th><td[^>]*>(.*?)<\/td>/);
  const weightMatch = html.match(/Weight<\/th><td[^>]*>(.*?)<\/td>/);

  const height = heightMatch ? heightMatch[1].replace(/<[^>]+>/g, "") : null;
  const weight = weightMatch ? weightMatch[1].replace(/<[^>]+>/g, "") : null;

  return { height, weight };
}
