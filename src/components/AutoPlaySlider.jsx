import Slider from "react-slick";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kusters from '../asset/image/kusters.png';
import st from '../asset/image/st.png';
import mc from '../asset/image/mc.png';
import manish from '../asset/image/manish.png';
import shish from '../asset/image/shish.png';
import matrix from '../asset/image/matrix.png';
import aether from '../asset/image/aether.png';
import acetho from '../asset/image/acetho.png';
import zkt from '../asset/image/zkt.png';
import clients from '../asset/image/clients.png';
import conifer from '../asset/image/conifer.png';

const AutoPlaySlider = () => {
  const sliderRef = useRef(null);
  const images = [kusters, st, mc, manish, shish, matrix, aether, acetho, zkt, clients, conifer];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed to make it slower
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
  };

  const playSlider = () => {
    sliderRef.current.slickPlay();
  };

  const pauseSlider = () => {
    sliderRef.current.slickPause();
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="center-image">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlaySlider;
