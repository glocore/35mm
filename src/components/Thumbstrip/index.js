import React from "react";
import Thumbnail from "components/Thumbnail";
import styles from "./Thumbstrip.module.css";

const Thumbstrip = ({ movies }) => {
  return (
    <div className={styles.slider}>
      {movies.map((movie, index) => (
        <div key={index} className={styles.slide}>
          <Thumbnail
            imageUrl={movie.thumbnail}
            title={movie.title}
            overview={movie.overview}
          />
        </div>
      ))}
    </div>
  )
}

export default Thumbstrip;