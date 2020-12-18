import React from "react";
import { Routes, Route } from "react-router-dom";
        
import { AnimatePresence } from 'framer-motion'

import {
  HomepageFrame,
  HomepageAboutUs,
  HomepageContact,
  HomepageLanding,
  HomepageProcess,
  HomepageProjects,
} from "../../components/";

import PageOnClick from "../../components/pageonclick/pageOnClick.component";

import routingData from "../../utilities/routing-data";

import "./homepage.styles.scss";


const HomePage = () => (
    <div className="home-page">
            <Routes>
                <Route 
                    exact path='/' 
                    element={
                        <HomepageFrame url={routingData.landingPageUrls} section='landing'>
                            <HomepageLanding key={1}/>
                        </HomepageFrame>
                    } 
                />
                <Route 
                    exact path='/home/about-us' 
                    element={
                        <HomepageFrame url={routingData.aboutUsUrls} section='about'>
                            <HomepageAboutUs key={2}/>
                        </HomepageFrame>
                    } 
                />
                <Route 
                    exact path='/home/projects' 
                    element={
                        <HomepageFrame url={routingData.projectsUrls} section='projects'>
                            <HomepageProjects key={3}/>
                        </HomepageFrame>
                    } 
                />
                <Route 
                    exact path='/home/process' 
                    element={
                        <HomepageFrame url={routingData.processUrls} section='process'>
                            <HomepageProcess key={4}/>
                        </HomepageFrame>
                    } 
                />
                <Route 
                    exact path='/home/contact' 
                    element={
                        <HomepageFrame url={routingData.contactUrls} section='contact'>
                            <HomepageContact key={5}/>
                        </HomepageFrame>
                    } 
                />
                <Route exact path="/projects/29K" element={<PageOnClick />} />
                <Route path='/work' element={<HomepageContact /> } />
                <Route path='/contact' element={ <HomepageContact /> } />
                <Route path='/about' element={ <HomepageContact /> } />
            </Routes>   
    </div>
)
export default HomePage;
