import React from "react";
import { projectData } from "../../utilities/project-data";
import { Link } from "react-router-dom";
import "./projectlists.styles.scss";

function ProjectsList() {
  const projects = projectData.map((project) => (
    <div key={project.id}>
      <Link to={`/projects/${project.id}`}>
        <img src={project.identifyphoto}></img>
      </Link>
    </div>
  ));

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
        <div className="p-list-button"></div>
      </div>
      <div className="p-list-images">{projects}</div>
    </div>
  );
}

export default ProjectsList;
