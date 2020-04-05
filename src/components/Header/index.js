import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Header.module.css";

const Header = ({ backdropImages }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {backdropImages?.map((image, index) => (
          <div key={index}>
            <div className={styles.slide} style={{ backgroundImage: `url(${image})` }} />
          </div>
        ))}
      </Slider>
      <div className={styles.overlay}>
        <h1>35 MM</h1>
      </div>
    </div>
  );
};

export default Header;
