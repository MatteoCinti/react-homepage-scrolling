import React from "react";

import "./homepage-contact.styles.scss";
import { ReactComponent as Imagotype } from "../../../assets/logo/imagotype.svg";

const HomepageContact = () => (
  <React.Fragment>
    <div className="half-background">
      <h1 className="display-text homepage-contact-display-text">
        DESIGN & DEVELOPMENT
      </h1>
    </div>
    <div className="bottom-half">
      <Imagotype className="imagotype" />
      <p className="subtitle">
        So what do think. want to make something <br />
        great click on double D
      </p>
    </div>
  </React.Fragment>
);

export default HomepageContact;
