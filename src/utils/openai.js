import OpenAI from 'openai';
import { Open_Ai_Key } from './constants';

export const openai = new OpenAI({
  apiKey: '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', 
  dangerouslyAllowBrowser : true
});