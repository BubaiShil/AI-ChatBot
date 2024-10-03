import React from 'react'
import {OpenAI} from 'openai'


const baseURL = "https://api.aimlapi.com/v1";
const apiKey = process.env.REACT_APP_API_KEY;
const systemPrompt = "you are an assitant be freindly, short and factful";
// const userPrompt = "Tell me about San Francisco";

const api = new OpenAI({
  apiKey,
  baseURL,
  dangerouslyAllowBrowser: true
});

const main = async (ask) => {
  const completion = await api.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: ask,
      },
    ],
    temperature: 0.7,   // ranges in between 0 to 1
    max_tokens: 256,    // word limit of the response
  });

  const response = completion.choices[0].message.content;

//   console.log("User:", ask);
//   console.log("AI:", response);

  return response;
};

export default main;