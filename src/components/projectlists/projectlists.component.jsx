import React from "react";
import { projectData } from "../../utilities/project-data";
import { Link } from "react-router-dom";
import "./projectlists.styles.scss";
import Button from "../buttons/link-button/link-button.component";

function ProjectsList() {
  const projects = projectData.map((project) => (
    <div key={project.id} className="p-list-identifyimg">
      <Link to={`/projects/${project.id}`}>
        <img src={project.identifyphoto}></img>
      </Link>
    </div>
  ));

  // var halfwayPoint = Math.ceil(projects.length / 2);
  // var columnA = projects.splice(0, halfwayPoint);
  // var columnB = projects.splice(halfwayPoint, projects.length);

  console.log(projects.length);

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
      <div className="p-list-image-col-1">{projects}</div>
      {/* <div className="p-list-image-col-2">{columnB}</div> */}
    </div>
  );
}

export default ProjectsList;
