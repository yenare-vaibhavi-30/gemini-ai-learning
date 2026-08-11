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

const history: {
  role: "user" | "model";
  text: string;
}[] = [];

async function chat() {
  rl.question("You: ", async (userInput) => {
    if (userInput.toLowerCase() === "exit") {
      console.log("Chat ended.");
      rl.close();
      return;
    }

    history.push({
      role: "user",
      text: userInput,
    });

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",

        contents: history.map((message) => ({
          role: message.role,
          parts: [{ text: message.text }],
        })),

        config: {
          systemInstruction: `
You are a friendly AI programming mentor.

The user is a beginner.

Always:
- Explain in simple English.
- Explain step by step.
- Give practical examples.
- Give code examples when useful.
          `,
        },
      });

      const aiResponse = response.text || "";

      console.log("AI:", aiResponse);

      history.push({
        role: "model",
        text: aiResponse,
      });

      chat();
    } catch (error) {
      console.error("Error:", error);
      rl.close();
    }
  });
}

chat();
