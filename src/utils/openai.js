import { GoogleGenAI } from '@google/genai';
import { OPEN_AI_KEY } from './constant';

// Initialize Gemini client
const openai = new GoogleGenAI({apiKey: OPEN_AI_KEY});

export default openai;
