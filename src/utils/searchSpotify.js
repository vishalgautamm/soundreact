import axios from 'axios';

const searchSpotify = (searchItem) => new Promise((resolve, reject) => {
  axios.get(`https://api.spotify.com/v1/search?q=${searchItem}&type=track`)
    .then(({ data }) => resolve(data))
    .catch((error) => reject(error));
});

export default searchSpotify;