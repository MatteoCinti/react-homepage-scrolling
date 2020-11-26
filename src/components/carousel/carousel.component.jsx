import React, { useEffect } from "react";
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
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
      fullWidth: false,
      numVisible: 5,
      dist: -100,
    });

    // var instance = M.Carousel.getInstance(elems[0]);
    // setInterval(() => {
    //   instance.next();
    // }, 4000);
    // console.log(elems);
    // console.log(instances);
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
    </div>
  );
}

export default MyCarousel;
