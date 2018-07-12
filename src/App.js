import React, { Component } from 'react';
import './App.css';
import Navbar from './navBar/Navbar';
import Homepage from './homePage/Homepage';
import AboutMe from './aboutMe/AboutMe';
import Projects from './projects/Projects';
import Contact from './contactMe/Contact';
import MapContainer from './contactMe/GoogleMap';
import CustomParticles from './particles/Particles';

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
        <Contact  />
      </div>
    );
  }
}

export default App;
