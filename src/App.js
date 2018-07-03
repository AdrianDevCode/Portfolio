import React, { Component } from 'react';
import './App.css';
import Navbar from './navBar/Navbar';
import Homepage from './homePage/Homepage';
import AboutMe from './aboutMe/AboutMe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="particles-js"></div> 
        <Homepage /> 
        <AboutMe />
      </div>
    );
  }
}

export default App;
