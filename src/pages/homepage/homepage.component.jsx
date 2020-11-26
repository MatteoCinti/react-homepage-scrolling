import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { HomeContactPage, HomeAboutUsPage, HomeLandingPage, HomeProcessPage, HomeProjectsPage } from './'
import routingData from '../../utilities/routing-data'

import './homepage.styles.scss'

const HomePage = () => (
    <div className="home-page">
        <Routes>
            <Route exact path='/' element={<HomeLandingPage url={routingData.landingPageUrls}/>} />
            <Route exact path='/home/about-us' element={<HomeAboutUsPage url={routingData.aboutUsUrls} />} />
            <Route exact path='/home/projects' element={<HomeProjectsPage url={routingData.projectsUrls}/>} />
            <Route exact path='/home/process' element={<HomeProcessPage url={routingData.processUrls}/>} />
            <Route exact path='/home/contact' element={<HomeContactPage url={routingData.contactUrls}/>} />
      </Routes>   
    </div>
)

export default HomePage