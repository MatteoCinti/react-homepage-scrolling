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

function MyCarousel() {
  var trigger = 0;
  const subtitleRef = useRef();

  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {
      numVisible: 5,
    });

    var instance = M.Carousel.getInstance(elems[0]);
    let autoplay = setInterval(() => {
      instance.next();
      selectText();
    }, 4000);

    return () => {
      clearInterval(autoplay);
      instance.destroy();
    };
  });

  function selectText() {
    if (trigger === 0) {
      subtitleRef.current.textContent = "experiences";
      trigger++;
      return;
    } else if (trigger === 1) {
      subtitleRef.current.textContent = "designs";
      trigger++;
      return;
    } else if (trigger === 2) {
      subtitleRef.current.textContent = "ideas";
      trigger = 0;
      return;
    }
  }

  return (
    <div className="carousel-gallery">
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
      </div>
      <br />
      <br />
      <div>
        <div className="subtitle-text">
          <span className="ideas-main">We are the creators behind great </span>
          <span ref={subtitleRef} className="ideas-text">
            ideas
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyCarousel;
