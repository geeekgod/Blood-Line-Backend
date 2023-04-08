const axios = require('axios');

export const sendQuery = async (req: any, res: any) => {
  try {

    const { query } = req.body;

    const response = await axios.post(process.env.CHATBOT_URL + "/chatbot" as string, {
      question: query,
    })

    if (!response) throw { message: "Unable to send query" };

    return res.status(200).json({ response: response.data })

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = sendQuery;
