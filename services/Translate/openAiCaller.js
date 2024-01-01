import axios from "axios";

// Class to call OpenAI API to translate content
// param:
//   - language
//   - message
// return:
//   - translated content

class OpenAiCaller {
  constructor() {
    this.baseUrl = process.env.BASE_URL || "http://localhost:3000";
  }

  async translateContent(language, message) {
    let reqData = {
      data: {
        language: language,
        message: message
      }
    }

    return await axios.post(`${this.baseUrl}/api/translate`, reqData);
  }
}

export default OpenAiCaller;
