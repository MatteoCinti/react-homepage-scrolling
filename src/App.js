import React from 'react';
import { Routes, Route } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
