import axios from "axios";

export default async function handler(req, res) {
  const apiKey = process.env.HB_API_KEY;

  try {
    const response = await axios.post(
      "https://engine.hyperbeam.com/v0/vm",
      {},
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
