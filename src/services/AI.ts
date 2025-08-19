import axios from "axios";

export async function getPlayerAnnotationFromAI(player: any) {
  const prompt = `You are a professional football scout writing a player profile.
Below are this player’s statistics:\n${JSON.stringify(
    player,
    null,
    2
  )}, Please write a scouting report in natural language that includes:

Overall impression of the player.

Strengths (based on highest stats).

Weaknesses (based on lowest stats).

Playing style and possible best role in a team.

Summary sentence about the type of player he is.

Keep it concise (150–200 words), written like a professional football scout or commentator. Do not list stats again—interpret them into football language. Divide the response into several paragraphs that start from the new line`;

  const apiKey = "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"; // Store securely!

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      // model: "llama3-8b-8192", // or "mixtral-8x7b-32768", etc.
      model: "meta-llama/llama-4-maverick-17b-128e-instruct", // or "mixtral-8x7b-32768", etc.
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
