import "dotenv/config";
import readline from "readline";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a topic : ", async (userInput) => {
  const prompt = `Explain  ${userInput} in simple words for a beginner.
Give one real-world example.
Keep the answer easy to understand.`;
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  console.log("\n AI Response:\n");
  console.log(response.text);

  rl.close();
});
