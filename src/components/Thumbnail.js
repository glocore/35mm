import React from "react";
import styles from "./Thumbnail.module.css";
import {ReactComponent as AddIcon } from "../assets/add_icon.svg"

const Thumbnail = ({ imageUrl, title, overview, onClick }) => {
  return (
    <div
      className={styles.thumbnail}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={onClick}
    >
      <div className={styles["title"]}>
        <span>{title}</span>
      </div>
      <div className={styles.overview}>{overview}</div>
      <div className={styles.hoverlay}>
        <AddIcon/>
        <span>Add to favourites</span>
      </div>
    </div>
  );
};

export default Thumbnail;
