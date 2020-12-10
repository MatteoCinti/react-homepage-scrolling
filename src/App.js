import React from 'react';

import HomePage from "./pages/homepage/homepage.component"
import NavigationBar from './components/navigation-bar/navigation-bar.component'

import './App.scss';
import './utilities/variables-&-fonts.scss'



function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
    </div>
  );
}

export default App;
