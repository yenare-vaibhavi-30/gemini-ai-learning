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
    const prompt = `
          You are an expert programming teacher.

The user is a beginner.

Explain the user's question in simple English.

Requirements:
- Explain step by step.
- Give a real-world example.
- Give a simple code example when appropriate.
- Avoid unnecessary advanced concepts.

User Question:
${userInput}

Output Format:
1. Definition
2. Explanation
3. Real-world Example
4. Code Example
5. Summary
          `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    console.log("\nAI Response: ");
    console.log(response.text);
  } catch (error) {
    console.error("Error: ", error);
  } finally {
    rl.close();
  }
});
