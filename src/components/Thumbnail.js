import React from "react";
import styles from "./Thumbnail.module.css";
import {ReactComponent as AddIcon } from "../assets/add_icon.svg"
import {ReactComponent as RemoveIcon } from "../assets/remove_icon.svg"

const Thumbnail = ({ imageUrl, title, isFavourite, onClick }) => {
  return (
    <div
      className={styles.thumbnail}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={onClick}
    >
      <div className={styles["title"]}>
        <span>{title}</span>
      </div>
      <div className={styles.hoverlay}>
        {isFavourite ? (
          <>
            <RemoveIcon/>
            <span>Remove from favourites</span>
          </>
        ) : (
          <>
            <AddIcon/>
            <span>Add to favourites</span>
          </>
        )}
        
      </div>
    </div>
  );
};

export default Thumbnail;
