const API_KEY = "ec44a33c2b9d400ff22361b2ac030bde";

const requests = {
  fetchNetflixOriginals: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchNetflixOriginals: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
