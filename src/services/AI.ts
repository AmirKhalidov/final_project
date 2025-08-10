import axios from "axios";

export async function getPlayerAnnotationFromAI(player: any) {
  const prompt = `Given the following football player stats, write a short summary of their strengths and weaknesses:\n${JSON.stringify(
    player,
    null,
    2
  )}`;
  const apiKey = "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"; // Store securely!

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      // model: "llama3-8b-8192", // or "mixtral-8x7b-32768", etc.
      model: "deepseek-r1-distill-llama-70b", // or "mixtral-8x7b-32768", etc.
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
