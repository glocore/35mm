import React from "react";
import { debounce } from "lodash-es";
import Header from "components/Header";
import Thumbstrip from "components/Thumbstrip";
import styles from "./App.module.css";
import {
  buildBackdropUrl,
  buildThumbnailUrl,
  fetchGenres,
  fetchMoviesForGenre,
} from "services/tmdbService";

function App() {
  const [loadingPage, setLoadingPage] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [genres, setGenres] = React.useState(null);
  const [movies, setMovies] = React.useState({});
  const [backdropImages, setBackdropImages] = React.useState([]);
  const [favouritesList, setFavouritesList] = React.useState([]);
  const [favouritesMap, setFavouritesMap] = React.useState({});

  const getGenres = async () => {
    const data = await fetchGenres();
    setGenres(data);
    setLoadingPage(false);

    return data;
  };

  const getMovies = async (genresList) => {
    let moviesToCommit = {};
    let backdropImagesToCommit = [];
    const debounced = debounce(() => {
      setMovies({
        ...movies,
        ...moviesToCommit,
      });

      setBackdropImages([...backdropImagesToCommit]);
    }, 1000);

    const fetchMoviesPromiseList = genresList.map((genre) => {
      fetchMoviesForGenre(genre.id).then((moviesList) => {
        moviesToCommit = {
          ...moviesToCommit,
          [genre.id]: moviesList.map((movie) => ({
            thumbnail: buildThumbnailUrl(movie["backdrop_path"]),
            title: movie["title"],
            id: movie["id"],
            genreId: genre.id,
            isFavourite: !!favouritesMap[movie["id"]],
          })),
        };

        backdropImagesToCommit = [
          ...backdropImagesToCommit,
          buildBackdropUrl(
            moviesList[Math.floor(Math.random() * moviesList.length)][
              "backdrop_path"
            ]
          ),
        ];

        debounced();
      });
    });

    await Promise.all(fetchMoviesPromiseList);
  };

  const updateFavourites = (movie) => {
    const { genreId, id } = movie
    const updatedMovieList = movies[genreId]
    const index = updatedMovieList.findIndex(item => item.id === id)

    const isFavourite = updatedMovieList[index].isFavourite
    updatedMovieList[index].isFavourite = !isFavourite

    
    setMovies({
      ...movies,
      [genreId]: updatedMovieList
    })

    if(isFavourite) {
      setFavouritesList(favouritesList.filter(value => value.id !== id))
    } else {
      setFavouritesList([...favouritesList, movie])
    }

    setFavouritesMap({
      ...favouritesMap,
      [id]: !isFavourite
    })
  };

  React.useEffect(() => {
    getGenres()
      .then(getMovies)
      .catch((error) => {
        console.error(error);
        setError("Something went wrong. Please try again.");
      });
  }, []);

  if (error) return <div>{error}</div>;

  console.log(favouritesList)
  console.log(favouritesMap)

  return (
    <div>
      {loadingPage ? (
        "loadingPage"
      ) : (
        <>
          <header>
            <Header backdropImages={backdropImages} />
          </header>
          <div className={styles["thumbstrip-container"]}>
            <h2>Favourites</h2>
            {favouritesList.length ? (
              <Thumbstrip
                movies={favouritesList}
                onThumbnailClick={updateFavourites}
              />
            ) : (
              "Nothing here. Click on a movie to add to favourites."
            )}
          </div>
          {genres.map((genre, index) => (
            <div key={index} className={styles["thumbstrip-container"]}>
              <h2>{genre.name}</h2>
              {movies[genre.id] ? (
                <Thumbstrip
                  movies={movies[genre.id]}
                  onThumbnailClick={updateFavourites}
                />
              ) : (
                "loading"
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
