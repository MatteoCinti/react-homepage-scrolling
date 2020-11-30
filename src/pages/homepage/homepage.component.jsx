import React from 'react'
import { Routes, Route } from 'react-router-dom';

import {HomepageFrame, HomepageAboutUs, HomepageContact, HomepageLanding, HomepageProcess, HomepageProjects} from '../../components/'

import routingData from '../../utilities/routing-data'

import './homepage.styles.scss'


const HomePage = () => (
    <div className="home-page">
        <Routes>
            <Route 
                exact path='/' 
                element={
                    <HomepageFrame url={routingData.landingPageUrls} section='landing'>
                        <HomepageLanding />
                    </HomepageFrame>
                } 
            />
            <Route 
                exact path='/home/about-us' 
                element={
                    <HomepageFrame url={routingData.aboutUsUrls} section='about'>
                        <HomepageAboutUs/>
                    </HomepageFrame>
                } 
            />
            <Route 
                exact path='/home/projects' 
                element={
                    <HomepageFrame url={routingData.projectsUrls} section='projects'>
                        <HomepageProjects/>
                    </HomepageFrame>
                } 
            />
            <Route 
                exact path='/home/process' 
                element={
                    <HomepageFrame url={routingData.processUrls} section='process'>
                        <HomepageProcess/>
                    </HomepageFrame>
                } 
            />
            <Route 
                exact path='/home/contact' 
                element={
                    <HomepageFrame url={routingData.contactUrls} section='contact'>
                        <HomepageContact/>
                    </HomepageFrame>
                } 
            />
        </Routes>   
    </div>
)

export default HomePage