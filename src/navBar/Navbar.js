import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
            <section id="navBar" className="sticky-top">
                <nav className="navbar navbar-toggleable-md bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#myBar">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </button>
                    <a href="#homePage" className="navbar-brand">Adrian Wiszniewski</a>
                    <div className="collapse navbar-collapse" id="myBar">
                        <ul className="navbar-nav">
                            <li><a data-target="#myBar" className="nav-link toggleMobile" href="#aboutMe"><h5>About Me</h5><span className="sr-only"></span></a></li>
                            <li><a data-target="#myBar" className="nav-link toggleMobile" href="#projects"><h5>Projects</h5><span className="sr-only"></span></a></li>
                            <li><a data-target="#myBar" className="nav-link toggleMobile" href="#contact"><h5>Contact</h5><span className="sr-only"></span></a></li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li><a data-content="Resume" rel="popover" data-placement="bottom" data-target="#myBar" className="nav-link navIcons popOver" href="./resume.pdf"><i className="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i><span className="hideText"> Resume</span><span className="sr-only"></span></a></li>
                            <li><a data-content="LinkedIn" rel="popover" data-placement="bottom" data-target="#myBar" className="nav-link navIcons popOver" href="https://linkedin.com/in/adriandevcode"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i><span className="hideText"> LinkedIn</span><span className="sr-only"></span></a></li>
                            <li><a data-content="GitHub" rel="popover" data-placement="bottom" data-target="#myBar" className="nav-link navIcons popOver" href="https://github.com/AdrianDevCode"><i className="fa fa-github fa-2x" aria-hidden="true"></i><span className="hideText"> GitHub</span><span className="sr-only"></span></a></li>
                        </ul>

                    </div>
                </nav>
            </section>
        );
    }
}

export default Navbar;