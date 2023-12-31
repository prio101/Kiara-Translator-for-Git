import axios from "axios";
import { secret, completionUrl, model } from "../index.js";

export const translate_content = async (req, res) => {
  // translate content with openai
  // return translated content
  // return error if req is none

  if (!req.body) {
    return res.status(400).send({
      message: "Request body can not be empty, it requires [:language, :message]"
    });
  }

  let language = req.body.data.lang;
  let message = req.body.data.message;
  console.log(`Translating ${message} to ${language}`)
  let requestData = {
    "messages": [{
      "role": "system",
      "content": `translate this to ${language} and write it on ${language}:
        ${message}`
    }],
    "model": model,
    "stop": "\n"
  };
  axios.post(completionUrl, requestData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${secret}`,
    },
  })
  .then(response => {
    let result = response.data.choices[0].message.content;
    res.status(200).json({ data: result,
                           message: "Translation success"
                         });
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: "Translation failed", error: error.message });
  });
}
