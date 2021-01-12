import React from "react";
import "./projectspage.styles.scss";
import { useParams } from "react-router-dom";
import { projectData } from "../../utilities/project-data";

import chef from "../../assets/image/chef.png";
import icondd from "../../assets/image/visitweb.png";

function ProjectsPage(props) {
  const { serviceId } = useParams();
  const thisService = projectData.find((service) => service.id === serviceId);

  {
    console.log(`serviceId: ${serviceId}`);
  }
  {
    console.log(`This Service: ${thisService}`);
  }
  return (
    <div className="langbro-page">
      <div className="lbpage-wrapper">
        <div className="lbpage-texts">
          <div className="lbpage-header">{thisService.title}</div>
          <div className="lbpage-text1">{thisService.description}</div>
          <div className="lbpage-text2">{thisService.text}</div>
        </div>
        <div className="lbpage-images">
          <div className="lbpage-image">
            <img src={thisService.image} alt="" />
          </div>
          <div className="lbpage-icon">
            <img src={thisService.icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
