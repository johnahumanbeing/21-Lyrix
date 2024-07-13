import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: `https://genius-song-lyrics1.p.rapidapi.com/songs/${req.query.id}/lyrics`,
    headers: {
      "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  };

  try {
    console.log(`Fetching lyrics for song ID: ${req.query.id}`); // Add this line
    let response = await axios(options);
    console.log(response.data); // Add this line
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response.data); // Add this line
    res.status(500).json(error.response.data);
  }
}
