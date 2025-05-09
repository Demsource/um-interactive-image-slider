import {
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images, autoSlide, autoSlideInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Previous and Next Buttons Functionality
  const showPrevSlide = () => {
    setCurrentSlide((slide) => (slide === 0 ? images.length - 1 : slide - 1));
  };

  const showNextSlide = () => {
    setCurrentSlide((slide) => (slide === images.length - 1 ? 0 : slide + 1));
  };
  // ---------------------------------------------------------

  useEffect(() => {
    // Automatic Slideshow Functionality with cleanup
    if (!autoSlide) return;

    const slideInterval = setInterval(showNextSlide, autoSlideInterval);

    return () => clearInterval(slideInterval);
    // ---------------------------------------------------------
  }, []);

  useEffect(() => {
    // Left/Right keys press functionalities by Add/Cleanup event listener on Mount/Unmount
    const handleRightAndLeftArrowKeys = (e) => {
      if (e.key === "ArrowLeft") showPrevSlide();
      if (e.key === "ArrowRight") showNextSlide();
    };

    window.addEventListener("keydown", handleRightAndLeftArrowKeys);

    return () =>
      window.removeEventListener("keydown", handleRightAndLeftArrowKeys);
    // ---------------------------------------------------------
  }, []);

  return (
    <section aria-label="Interactive Image Slider" className="image-slider">
      <div className="images-wrapper">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Image ${i + 1}`}
            // Move each and every image simultaneously by the same amount
            style={{ transform: `translateX(${-100 * currentSlide}%)` }}
            // ---------------------------------------------------------
          />
        ))}
      </div>
      <button
        className="arrow-wrapper"
        style={{ left: "10px" }}
        onClick={showPrevSlide}
        aria-label="View Previous Image Slide"
      >
        <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
      </button>
      <button
        className="arrow-wrapper"
        style={{ right: "10px" }}
        onClick={showNextSlide}
        aria-label="View Next Image Slide"
      >
        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
      </button>
      <div className="dots">
        {images.map((_, i) => (
          <button
            key={i}
            className="dot-wrapper"
            onClick={() => setCurrentSlide(i)}
            aria-label={`View Image Slide ${i + 1}`}
          >
            {currentSlide === i ? (
              <>
                <FontAwesomeIcon icon={faCircle} style={{ scale: 1.3 }} />
                <span className="inner-dot"></span>
              </>
            ) : (
              <FontAwesomeIcon icon={faCircle} />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
