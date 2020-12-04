require("dotenv").config();

const axios = require("axios");

const GHIPHY_API_BASE_URL = "http://api.giphy.com/v1/gifs";
const SEARCH_KEY_WORD = "fox";

axios
  .get(
    `${GHIPHY_API_BASE_URL}/search?api_key=${process.env.GHIPHY_API_KEY}&q=${SEARCH_KEY_WORD}`
  )
  .then((res) => {
    const gifs = res.data.data;
    gifs.map((gif) => {
      console.log(gif.images.downsized.url);
    });
  });
