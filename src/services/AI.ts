import type { Player } from "@/types/Player";
import axios from "axios";

export async function getPlayerAnnotationFromAI(player: Player) {
  const prompt = `You are a professional football scout writing a player profile.
Below are this player's statistics (distances in metres):\n${JSON.stringify(
    player,
    null,
    2
  )}, Please write a scouting report in natural language that includes:

Write the report in 3–4 natural paragraphs (general overview, strengths, weaknesses, summary).

Important formatting:

Put two line breaks (\n\n) between each paragraph.

Do not use bullet points or numbering.

Do not add extra formatting like markdown.

The output should look like plain text with clear paragraph separations using \n\n.`;

  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ API key is not configured");
  }

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "meta-llama/llama-4-maverick-17b-128e-instruct",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 512,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  return response.data.choices[0].message.content.trim();
}
