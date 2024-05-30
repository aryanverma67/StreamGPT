import OpenAI from "openai";
import { OPEN_AI_SECRET_KEY } from "./constants";

// console.log('OpenAI Secret Key:', OPEN_AI_SECRET_KEY);  // Verify if the key is printed correctly

const openai = new OpenAI({
  apiKey: OPEN_AI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
