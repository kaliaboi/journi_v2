import { initialMessages, openai } from "../../../lib/utils/openai";

export default async function handler(req, res) {
  console.log("hello from openai endpoint");
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [...initialMessages, { role: "user", content: "I am sad" }],
  });
  console.log(completion.data.choices[0].message.content);
  res
    .status(200)
    .json({ response: completion.data.choices[0].message.content });
}
