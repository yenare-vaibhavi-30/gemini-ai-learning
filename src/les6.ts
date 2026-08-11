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

rl.question("What do you want to ask AI? ", async (userInput) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: userInput,

      config: {
        systemInstruction: `
You are an expert programming teacher.

Your job is to teach programming concepts to beginners.

Rules:
- Use simple English.
- Explain step by step.
- Give practical examples.
- Give code examples when useful.
- Avoid unnecessary advanced terminology.
- If the question is related to programming, explain it clearly.
        `,
      },
    });

    console.log("\nAI Response:");
    console.log(response.text);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    rl.close();
  }
});