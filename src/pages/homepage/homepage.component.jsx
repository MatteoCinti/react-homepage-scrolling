import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import {
  HomepageFrame,
  HomepageAboutUs,
  HomepageContact,
  HomepageLanding,
  HomepageProjects,
} from "../../components/";

import {
  ScrollContextProvider,
  ScrollContext,
} from "../../utilities/scrollContext";
import routingData from "../../utilities/routing-data";
import "./homepage.styles.scss";


const HomePage = () => {
  const { scrollDirection } = useContext(ScrollContext);

  return (
    <ScrollContextProvider>
      <div className="home-page">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomepageFrame
                url={routingData.landingPageUrls}
                section="landing"
              >
                <HomepageLanding key={1} scrollDirection={scrollDirection} />
              </HomepageFrame>
            }
          />
          <Route
            exact
            path="/home/about-us"
            element={
              <HomepageFrame url={routingData.aboutUsUrls} section="about">
                <HomepageAboutUs key={2} scrollDirection={scrollDirection} />
              </HomepageFrame>
            }
          />
          <Route
            exact
            path="/home/projects"
            element={
              <HomepageFrame url={routingData.projectsUrls} section="projects">
                <HomepageProjects key={3} scrollDirection={scrollDirection} />
              </HomepageFrame>
            }
          />
          <Route
            exact
            path="/home/contact"
            element={
              <HomepageFrame url={routingData.contactUrls} section="contact">
                <HomepageContact key={5} scrollDirection={scrollDirection} />
              </HomepageFrame>
            }
          />
        </Routes>
      </div>
    </ScrollContextProvider>
  );
};

export default HomePage;
