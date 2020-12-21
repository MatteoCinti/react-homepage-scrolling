import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./homepage-projects.styles.scss";
// import Firstview from "../../backfirst/backfirst.component";
// import Secondview from "../../backsecond/backsecond.component";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  handleScroll,
  handleArrowScroll,
} from "../../../utilities/handleScroll-function";

import icon1 from "../../../assets/image/29k.png";
import icon2 from "../../../assets/image/UNESCO.png";
import icon3 from "../../../assets/image/Group.png";
import underline from "../../../assets/image/Underline.png";

function HomepageProjects({ url }) {
  // const mainRef = useRef();
  // const firstViewRef = useRef();
  // const secondViewRef = useRef();
  // const thirdRef = useRef();
  // const subtitleRef = useRef();
  // const homepageRef = useRef();

  // function handleMouseOverUnesco(e) {
  //   ReactDOM.render(<Firstview />, mainRef.current);
  //   firstViewRef.current.classList.add("active-icon-first");
  //   secondViewRef.current.classList.add("deactive-icon");
  //   thirdRef.current.classList.add("deactive-icon");
  //   subtitleRef.current.classList.add("deactive-icon");
  // }

  // function handleMouseOverProjects(e) {
  //   ReactDOM.render(<Secondview />, mainRef.current);
  //   secondViewRef.current.classList.add("active-icon-second");
  //   firstViewRef.current.classList.add("deactive-icon");
  //   thirdRef.current.classList.add("deactive-icon");
  //   subtitleRef.current.classList.add("deactive-icon");
  // }

  // function outsideHover(e) {
  //   firstViewRef.current.classList.remove("active-icon-first", "deactive-icon");
  //   secondViewRef.current.classList.remove(
  //     "active-icon-second",
  //     "deactive-icon"
  //   );
  //   thirdRef.current.classList.remove("deactive-icon");
  //   subtitleRef.current.classList.remove("deactive-icon");

  //   ReactDOM.unmountComponentAtNode(mainRef.current);
  // }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      // ref={homepageRef}
      className="homepage-projects"
    >
      <div
        // ref={mainRef}
        className="container-full"
        // onMouseOver={outsideHover}
      ></div>
      <div className="container-icon">
        <Link to="/projects/29k">
          <div
            // ref={firstViewRef}
            className="box-item pic1"
            // onMouseOver={handleMouseOverUnesco}
          >
            <img src={icon1} alt="" className="project-icon" />
          </div>
        </Link>
        <Link to="/projects/Langbro">
          <div
            // ref={secondViewRef}
            className="box-item pic2"
            // onMouseOver={handleMouseOverProjects}
          >
            <img src={icon2} alt="" className="project-icon" />
          </div>
        </Link>
        <Link to="/home/process">
          <div
            // ref={thirdRef}
            className="box-item pic3"
          >
            <img src={icon3} alt="" className="project-icon" />
          </div>
        </Link>
      </div>
      <div
        // ref={subtitleRef}
        className="subtitle"
      >
        <Link to="/home/about-us">
          Know more
          <img src={underline} alt=""></img>
        </Link>
      </div>
    </motion.div>
  );
}

export default HomepageProjects;
