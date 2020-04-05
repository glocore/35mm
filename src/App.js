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

  React.useEffect(() => {
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
            })),
          };

          backdropImagesToCommit = [
            ...backdropImagesToCommit,
            buildBackdropUrl(moviesList[Math.floor(Math.random() * moviesList.length)]["backdrop_path"]),
          ];

          debounced();
        });
      });

      await Promise.all(fetchMoviesPromiseList);
    };

    getGenres()
      .then(getMovies)
      .catch((error) => {
        console.error(error);
        setError("Something went wrong. Please try again.");
      });
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      {loadingPage ? (
        "loadingPage"
      ) : (
        <>
          <header>
            <Header backdropImages={backdropImages} />
          </header>
          {genres.map((genre, index) => (
            <div key={index} className={styles["thumbstrip-container"]}>
              <h2>{genre.name}</h2>
              {movies[genre.id] ? (
                <Thumbstrip movies={movies[genre.id]} />
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
