import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <section id="aboutMe" className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <div className="card">
                            <img src="./img/self.jpeg" className="card-img-top" alt="self" />
                            <div className="card-body">
                            <h4 className="card-title">About Me</h4>
                            <p className="card-text">
                                An IT professional turned Programmer. I've always enjoyed building and creating technology. In the past ten years, I have built hardware and supported the software. Since then, my thirst for knowledge encouraged me into building exciting projects.<br/>
                                As a FullStack Developer, I'm excited to learn new, creative and more efficient technologies to improve and create web technologies.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <blockquote className="blockquote">
                        <p className="mb-3 quotes">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <p className="blockquote-footer">Some name</p>
                        </blockquote>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 text">
                                    <h3>Front End Skills</h3>
                                    <ul>  
                                        <li><FontAwesomeIcon icon={['fab', 'react']} size="2x" /><span className="icons"> React</span></li>
                                        <li><FontAwesomeIcon icon={['fab', 'html5']} size="2x" /><span className="icons"> Html 5 </span></li>
                                        <li><FontAwesomeIcon icon={['fab', 'css3']} size="2x" /><span className="icons"> Css 3</span></li>
                                        <li><FontAwesomeIcon icon={['fab', 'js']} size="2x" /><span className="icons"> JQuery</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 text">
                                    <h3>Back End Skills</h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={['fab', 'node']} size="2x" /><span className="icons"> NodeJS</span></li>
                                        <li><FontAwesomeIcon icon={'code'} size="2x" /><span className="icons"> ExpressJS</span></li>
                                        <li><FontAwesomeIcon icon={'database'} size="2x" /><span className="icons"> Postgres SQL</span></li>
                                        <li><FontAwesomeIcon icon={['fab', 'git']} size="2x" /><span className="icons"> GIT</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;