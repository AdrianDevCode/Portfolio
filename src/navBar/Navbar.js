import React, { Component } from 'react';
import "./Navbar.css";
import Scrollchor from 'react-scrollchor';

class Navbar extends Component {
    render() {
        
        return(
            <section id="navBar" className="sticky-top">
                <nav className="navbar navbar-toggleable-md">
                    <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#myBar">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </button>
                    <Scrollchor to="#homePage" className="navbar-brand">Adrian Wiszniewski</Scrollchor>
                    <div className="collapse navbar-collapse" id="myBar">
                        <ul className="navbar-nav">
                            <li><Scrollchor to="#aboutMe"  data-target="#myBar" className="nav-link toggleMobile navIcons"><span>About Me</span></Scrollchor></li>
                            <li><Scrollchor to="#projects" data-target="#myBar" className="nav-link toggleMobile navIcons"><span>Projects</span></Scrollchor></li>
                            <li><Scrollchor to="#contact"  data-target="#myBar" className="nav-link toggleMobile navIcons"><span>Contact</span></Scrollchor></li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li><a data-target="#myBar" className="nav-link navIcons" href="./resume.pdf"><span className="hideText"> Resume</span></a></li>
                            <li><a data-target="#myBar" className="nav-link navIcons" href="https://linkedin.com/in/adriandevcode"><span className="hideText"> LinkedIn</span></a></li>
                            <li><a data-target="#myBar" className="nav-link navIcons" href="https://github.com/AdrianDevCode"><span className="hideText"> GitHub</span></a></li>
                        </ul>

                    </div>
                </nav>
            </section>
        );
    }
}

export default Navbar;