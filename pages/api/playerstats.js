import axios from "axios";

export default async function handler(req, res) {
  const {
    name,
    accountType = "epic",
    timeWindow = "lifetime",
    image = "none",
  } = req.query;

  const API_ENDPOINT = `https://fortnite-api.com/v2/stats/br/v2?name=${name}&accountType=${accountType}&timeWindow=${timeWindow}&image=${image}`;
  const headers = {
    Authorization: "89e0abb9-96bd-4a7e-bf11-5bda8df21b1c",
  };

  try {
    const response = await axios.get(API_ENDPOINT, {
      params: {
        name,
        accountType,
        timeWindow,
        image,
      },
      headers,
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data from Fortnite API" });
  }
}
