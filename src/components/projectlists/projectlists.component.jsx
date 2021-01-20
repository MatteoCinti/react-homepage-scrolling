import React from "react";
import { projectData } from "../../utilities/project-data";
import { Link } from "react-router-dom";
import "./projectlists.styles.scss";
import Button from "../buttons/link-button/link-button.component";

function ProjectsList() {
  const projects = projectData.map((project) => (
    <Link to={`/projects/${project.id}`}>
      <div key={project.id} className="p-list-identifyimg">
        <div className="container">
          <img src={project.identifyphoto}></img>
          <div className="wrapper">
            <div className="text">
              <p>{project.name}</p>
              <p>{project.year}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));

  let odd = [];
  let even = [];

  for (let i = 0; i < projects.length; i++) {
    if (i % 2 === 0) {
      even.push(projects[i]);
    } else {
      odd.push(projects[i]);
    }
  }

  return (
    <div className="projectlists">
      <div className="p-list-texts">
        <div className="p-list-title">Work</div>
        <div className="p-list-description">
          Making a business from an idea requires creativity, sensitivity, and
          expertise in innovation. We spend time to understand your business
          model, business goals, and user need to make informed decisions. Our
          aim is to deliver world-class solutions to our client's growth.
        </div>
        <div className="p-list-question">Have a project?</div>
        <div className="p-list-button">
          <Button section="Let 's talk" />
        </div>
      </div>
      <div className="p-list-image-col-1">{even}</div>
      <div className="p-list-image-col-2">{odd}</div>
      <div className="top-gradient"></div>
      <div className="bottom-gradient"></div>
    </div>
  );
}

export default ProjectsList;
