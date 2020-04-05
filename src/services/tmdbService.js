const apiBaseUrl = "https://api.themoviedb.org/3/";
const imageBaseUrl = "https://image.tmdb.org/t/p/"
const apiKey = process.env.REACT_APP_TMDB_API_KEY

const buildThumbnailUrl = (path) => `${imageBaseUrl}w300${path}`

const buildBackdropUrl = (path) => `${imageBaseUrl}w780${path}`

const fetchGenres = async () => {
  let result = null;

  try {
    const url = `${apiBaseUrl}genre/movie/list?api_key=${apiKey}&language=en-US`    
    const response = await fetch(url);
    const data = await response.json()
    
    result = data.genres
  } catch (error) {
    console.error(error);    
  }

  return result;
}

const fetchMoviesForGenre = async (genre) => {
  let result = null;

  try {
    const url = `${apiBaseUrl}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`
    const response = await fetch(url);
    const data = await response.json()
    
    result = data.results;
  } catch (error) {
    console.error(error);    
  }

  return result;
}

export {
  buildThumbnailUrl,
  buildBackdropUrl,
  fetchGenres,
  fetchMoviesForGenre
}