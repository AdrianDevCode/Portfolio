import React, { Component } from 'react';
import './App.css';
import Navbar from './navBar/Navbar';
import Homepage from './homePage/Homepage';
import AboutMe from './aboutMe/AboutMe';
import Projects from './projects/Projects';
import MapContainer from './map/GoogleMap';
import CustomParticles from './particles/Particles.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomParticles />
        <Navbar /> 
        <Homepage /> 
        <AboutMe />
        <Projects />
        <MapContainer />
      </div>
    );
  }
}

export default App;
