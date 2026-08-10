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
          You are a helpful AI assistant.
          Answer the user's question in simple and clear language. 
          User Quetion:
          ${userInput}
          `;

          const response = await ai.models.generateContent({
               model: "gemini-2.5-flash",
               contents: prompt,
          });

          console.log("\nAI Response: ");
          console.log(response.text);
     }catch (error) {
          console.error("Error: ", error);
     }finally {
          rl.close();
     }
});