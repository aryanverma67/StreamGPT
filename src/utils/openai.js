// src/utils/openai.ts
import OpenAI from "openai";
import { OPEN_AI_SECRET_KEY } from "./constants";

console.log("OPEN_AI_SECRET_KEY:", OPEN_AI_SECRET_KEY); // Debugging

const openai = new OpenAI({
  apiKey: OPEN_AI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
