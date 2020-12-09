import React from "react";

import "./homepage-contact.styles.scss";
import { ReactComponent as Imagotype } from "../../../assets/logo/imagotype.svg";

const HomepageContact = () => (
  <React.Fragment>
    <div className="top-half-background">
      <h1 className="display-text sliding-text sliding-text-start">
        DESIGN & DEVELOPMENT
      </h1>
      <h1 className="display-text sliding-text sliding-text-2">
        DESIGN & DEVELOPMENT
      </h1>
      <h1 className="display-text sliding-text sliding-text-3">
        DESIGN & DEVELOPMENT
      </h1>
    </div>
    <div className="bottom-half-background">
      <Imagotype className="imagotype" />
      <p className="subtitle">
        So what do think. want to make something <br />
        great click on double D
      </p>
    </div>
  </React.Fragment>
);

export default HomepageContact;
