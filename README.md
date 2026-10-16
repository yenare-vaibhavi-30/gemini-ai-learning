# Gemini AI Learning with Node.js and TypeScript 🤖

A hands-on learning repository exploring Generative AI using Node.js, TypeScript, and the Google Gemini API.

This repository contains small experiments and lessons to understand how applications can send prompts to a language model and use its generated responses.

## 🚀 Objectives

- Understand the basics of LLM-powered applications
- Connect a TypeScript application to the Google Gemini API
- Send prompts and process generated text responses
- Practice asynchronous JavaScript/TypeScript code
- Learn how to manage API keys securely using environment variables

## 🛠️ Tech Stack

- Node.js
- TypeScript
- Google Gen AI SDK (`@google/genai`)
- dotenv
- tsx

## 📂 Project Structure

```text
gemini-ai-learning/
├── src/
│   ├── index.ts
│   ├── les3.ts
│   ├── les4.ts
│   ├── les5.ts
│   ├── les6.ts
│   └── Chat HistoryMemory.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── .gitignore
```

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/yenare-vaibhavi-30/gemini-ai-learning.git
cd gemini-ai-learning
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API key

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_api_key_here
```

Get an API key through the Google AI developer platform. Never commit your real API key to GitHub.

### 4. Run the application

The default start script runs `src/index.ts`:

```bash
npm start
```

Individual lesson files may need to be run separately depending on their code and configuration.

## 🔐 Security

- Store API keys in environment variables.
- Do not hardcode secrets in source files.
- Keep `.env` excluded through `.gitignore`.
- Never upload real API keys or credentials.

## 🌱 Learning Status

This is a learning repository. Features and experiments are added as I explore Generative AI and improve my TypeScript skills.

## 🔜 Future Improvements

- Add clear documentation for each lesson
- Improve error handling and API configuration
- Make the model identifier configurable
- Add reusable prompt and response handling
- Explore conversation history and context management

---

Built as part of my ongoing Generative AI learning journey.
