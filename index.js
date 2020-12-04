const axios = require("axios");

const GHIPHY_API_KEY = "H6IpbQtY6thbhUnfLOk3KbkUMaXiWmm7";
const GHIPHY_API_BASE_URL = "http://api.giphy.com/v1/gifs";
const SEARCH_KEYWORD = "fox";

axios
  .get(
    `${GHIPHY_API_BASE_URL}/search?api_key=${GHIPHY_API_KEY}&q=${SEARCH_KEYWORD}`
  )
  .then((res) => {
    const gifs = res.data.data;
    gifs.map((gif) => {
      console.log(gif.images.downsized.url);
    });
  });
