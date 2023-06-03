import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-70YA5s0BAc5DeEWfIwsBonxp",
  apiKey: process.env.OPENAI_API_KEY,
});

export const initialMessages = [
  {
    role: "assistant",
    content: "Hi! how are you feeling?",
  },
];

export const openai = new OpenAIApi(configuration);
