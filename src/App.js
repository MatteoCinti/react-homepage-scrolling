import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<ProjectsLanding />} />
        <Route path='/' element={<AboutUsLanding />} />
      </Routes>
    </div>
  );
}

export default App;
