import React, { useEffect, useRef } from "react";
import "./carousel.styles.scss";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import img from "./img/BOB_0192.JPG";
import img1 from "./img/BOB_0139.JPG";
import img2 from "./img/BOB_0046.JPG";
import img3 from "./img/BOB_0061.JPG";
import img4 from "./img/BOB_0127.JPG";
import img5 from "./img/BOB_0078.JPG";
import img6 from "./img/BOB_0247.JPG";
import subtile1 from "./img/Ideas.png";
import subtitle2 from "./img/Experiences.png";

function MyCarousel() {
  const subtitleRef = useRef(null);

  useEffect(() => {
    var trigger = true;
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
      numVisible: 5,
    });

    var instance = M.Carousel.getInstance(elems[0]);
    let autoplay = setInterval(() => {
      instance.next();
      trigger = !trigger;
      let subtitleImg = trigger ? subtile1 : subtitle2;
      subtitleRef.current.src = subtitleImg;
    }, 4000);

    return () => {
      clearInterval(autoplay);
      instance.destroy();
    };
  });

  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel-item">
          <a href="#one!">
            <img className="carousel-img" src={img} alt="" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#two!">
            <img className="carousel-img" src={img1} alt="" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#three!">
            <img className="carousel-img" src={img2} alt="" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#four!">
            <img className="carousel-img" src={img3} alt="" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#five!">
            <img className="carousel-img" src={img4} alt="" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#six!">
            <img className="carousel-img" src={img5} alt="" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="#seven!">
            <img className="carousel-img" src={img6} alt="" />
          </a>
        </div>
      </div>
      <div>
        <img ref={subtitleRef} src={subtile1} alt="" />
      </div>
    </div>
  );
}

export default MyCarousel;
