import React, { Component } from 'react';
import './App.css';
import Navbar from './navBar/Navbar';
import Homepage from './homePage/Homepage';
import AboutMe from './aboutMe/AboutMe';
import Projects from './projects/Projects';
import Contact from './contactMe/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="particles-js"></div> 
        <Homepage /> 
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
