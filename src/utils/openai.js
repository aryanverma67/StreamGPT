// src/utils/openai.ts
import OpenAI from "openai";
import { OPEN_AI_SECRET_KEY } from "./constants";


const openai = new OpenAI({
  apiKey: OPEN_AI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
