import React, { useState } from "react";
import "./carousel.css";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    images.length > 0 ? 0 : null
  );

  const onNext = () => {
    if (currentImageIndex !== null && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const onPrevious = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="carousel">
      {currentImageIndex !== null ? (
        <img
          src={images[currentImageIndex].src}
          alt="image"
          className="carousel-image"
        />
      ) : null}

      <div className="left-arrow">
        {currentImageIndex > 0 ? (
          <img
            src="/assests/left.png"
            onClick={onPrevious}
            alt=""
            className="arrow"
          />
        ) : null}
      </div>

      <div className="btn">
        {images.map((_, ind) => {
          return (
            <div
              className="slide-btn"
              style={
                currentImageIndex === ind ? { backgroundColor: "black" } : {}
              }
              onClick={() => setCurrentImageIndex(ind)}
            ></div>
          );
        })}
      </div>

      <div className="right-arrow">
        {currentImageIndex < images.length - 1 ? (
          <img
            src="/assests/right.png"
            onClick={onNext}
            alt=""
            className="arrow"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Carousel;
