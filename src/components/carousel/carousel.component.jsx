import React, { useEffect } from "react";
import "./carousel.styles.scss";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import img from "./img/BOB_0192.JPG";
import img1 from "./img/BOB_0139.JPG";
import img2 from "./img/BOB_0046.JPG";
import img3 from "./img/BOB_0247.JPG";
import img4 from "./img/BOB_0127.JPG";
import img5 from "./img/BOB_0061.JPG";
import img6 from "./img/BOB_0078.JPG";

function MyCarousel() {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
      fullWidth: false,
      numVisible: 5,
      dist: -100,
    });
  });

  return (
    <div className="container">
      <div className="carousel">
        <a className="carousel-item" href="#one!">
          <img src={img} />
        </a>
        <a className="carousel-item" href="#two!">
          <img src={img1} />
        </a>
        <a className="carousel-item" href="#three!">
          <img src={img2} />
        </a>
        <a className="carousel-item" href="#four!">
          <img src={img3} />
        </a>
        <a className="carousel-item" href="#five!">
          <img src={img4} />
        </a>
        <a className="carousel-item" href="#six!">
          <img src={img5} id="img-5" />
        </a>
        <a className="carousel-item" href="#seven!">
          <img src={img6} id="img-6" />
        </a>
      </div>
    </div>
  );
}

export default MyCarousel;
