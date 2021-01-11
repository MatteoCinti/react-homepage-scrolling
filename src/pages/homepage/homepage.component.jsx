import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { projectData } from "../../utilities/project-data";

import { AnimatePresence } from "framer-motion";

import {
  HomepageFrame,
  HomepageAboutUs,
  HomepageContact,
  HomepageLanding,
  HomepageProcess,
  HomepageProjects,
} from "../../components/";
import TwentyNinePage from "../../components/29Kpage/29kpage.component";
import LangbroPage from "../../components/allprojectspage/projectspage.component";

import {
  ScrollContextProvider,
  ScrollContext,
} from "../../utilities/scrollContext";
import routingData from "../../utilities/routing-data";
import "./homepage.styles.scss";
import ProjectsPage from "../../components/allprojectspage/projectspage.component";
import ProjectsList from "../../components/projectlists/projectlists.component";

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
            path="/home/process"
            element={
              <HomepageFrame url={routingData.processUrls} section="process">
                <HomepageProcess key={4} scrollDirection={scrollDirection} />
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
          <Route exact path="/projects/:serviceId" element={<ProjectsPage />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/contact" element={<HomepageContact />} />
          <Route path="/about" element={<HomepageContact />} />
        </Routes>
      </div>
    </ScrollContextProvider>
  );
};

export default HomePage;
