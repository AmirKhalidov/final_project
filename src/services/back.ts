import express from "express";
import fetch from "node-fetch";
const app = express();

const BING_API_KEY = "YOUR_BING_API_KEY";

app.get("/api/player-image/:name", async (req, res) => {
  const playerName = req.params.name;
  const url = `https://api.bing.microsoft.com/v7.0/images/search?q=${encodeURIComponent(
    playerName
  )}&count=1`;
  try {
    const response = await fetch(url, {
      headers: { "Ocp-Apim-Subscription-Key": BING_API_KEY },
    });
    const data = await response.json();
    const imageUrl = data.value?.[0]?.contentUrl || null;
    res.json({ imageUrl });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch image" });
  }
});

app.listen(3001, () => console.log("Proxy running on port 3001"));
