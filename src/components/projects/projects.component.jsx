import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./projects.styles.scss";
import Firstview from "./backfirst.component";
import Secondview from "./backsecond.component";
import PageOnClick from "./pageOnClick.component";

import icon1 from "./image/29k.png";
import icon2 from "./image/UNESCO.png";
import icon3 from "./image/Group.png";
import underline from "./image/Underline.png";

function Projects() {
  const mainRef = useRef();
  const firstViewRef = useRef();
  const secondViewRef = useRef();
  const thirdRef = useRef();
  const subtitleRef = useRef();
  const homepageRef = useRef();

  function handleClick() {
    ReactDOM.render(<PageOnClick />, homepageRef.current);
    mainRef.current.classList.add("deactive-icon");
    firstViewRef.current.classList.add("deactive-icon");
  }

  function handleMouseOverUnesco(e) {
    ReactDOM.render(<Firstview />, mainRef.current);
    firstViewRef.current.classList.add("active-icon-first");
    secondViewRef.current.classList.add("deactive-icon");
    thirdRef.current.classList.add("deactive-icon");
    subtitleRef.current.classList.add("deactive-icon");
  }

  function handleMouseOverProjects(e) {
    ReactDOM.render(<Secondview />, mainRef.current);
    secondViewRef.current.classList.add("active-icon-second");
    firstViewRef.current.classList.add("deactive-icon");
    thirdRef.current.classList.add("deactive-icon");
    subtitleRef.current.classList.add("deactive-icon");
  }

  function outsideHover(e) {
    firstViewRef.current.classList.remove("active-icon-first", "deactive-icon");
    secondViewRef.current.classList.remove(
      "active-icon-second",
      "deactive-icon"
    );
    thirdRef.current.classList.remove("deactive-icon");
    subtitleRef.current.classList.remove("deactive-icon");

    ReactDOM.unmountComponentAtNode(mainRef.current);
  }

  return (
    <div ref={homepageRef} className="homepage-projects">
      <div
        ref={mainRef}
        className="container-full"
        onMouseOver={outsideHover}
      ></div>
      <div className="container-icon">
        <div
          ref={firstViewRef}
          className="box-item"
          onClick={handleClick}
          onMouseOver={handleMouseOverUnesco}
        >
          <img src={icon1} alt="" className="project-icon" />
        </div>
        <div
          ref={secondViewRef}
          className="box-item"
          onMouseOver={handleMouseOverProjects}
        >
          <img src={icon2} alt="" className="project-icon" />
        </div>
        <a href="https://test.dunderdog.net/home/process">
          <div ref={thirdRef} className="box-item">
            <img src={icon3} alt="" className="project-icon" />
          </div>
        </a>
      </div>
      <div ref={subtitleRef} className="subtitle">
        <a href="https://test.dunderdog.net/home/about-us">
          Know more
          <img src={underline} alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default Projects;
