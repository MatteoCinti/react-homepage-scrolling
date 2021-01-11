import React from "react";
import { Link } from "react-router-dom";
import { projectData } from "../../../utilities/project-data";
import "./homepage-projects.styles.scss";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  handleScroll,
  handleArrowScroll,
} from "../../../utilities/handleScroll-function";

import icon1 from "../../../assets/image/29k.png";
import icon2 from "../../../assets/image/langbro.png";
import icon3 from "../../../assets/image/Group.png";
import underline from "../../../assets/image/Underline.png";

function HomepageProjects({ url }) {
  const project = projectData.map((project) => (
    <div key={project.id}>
      <Link to={`/projects/${project.id}`}></Link>
    </div>
  ));
  return (
    <motion.div exit={{ opacity: 0 }} className="homepage-projects">
      <div className="container-full"></div>
      <div className="container-icon">
        <Link to="/projects/1">
          <div className="box-item pic1">
            <img src={icon1} alt="" className="project-icon" />
          </div>
        </Link>
        <Link to="/projects/2">
          <div className="box-item pic2">
            <img src={icon2} alt="" className="project-icon" />
          </div>
        </Link>
        <Link to="/home/process">
          <div className="box-item pic3">
            <img src={icon3} alt="" className="project-icon" />
          </div>
        </Link>
      </div>
      <div className="subtitle">
        <Link to="/home/about-us">
          Know more
          <img src={underline} alt=""></img>
        </Link>
      </div>
    </motion.div>
  );
}

export default HomepageProjects;
