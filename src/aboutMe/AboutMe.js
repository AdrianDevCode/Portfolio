import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <section id="aboutMe" className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <div className="card">
                            <img className="card-img-top" src="../img/self.jpeg" alt="" />
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
                        <div className="container-fluid text-sm-center">
                            <div className="row">
                                <div className="col-lg-6 text">
                                    <h3>Front End Skills</h3>
                                    <p>
                                        <i className="icon-css3 fa-2x"> Css 3</i><br/>
                                        <i className="icon-html5 fa-2x"> Html 5</i><br/>
                                        <i className="icon-javascript fa-2x"> JavaScript</i> <br/>
                                        <i className="icon-jquery fa-2x"> JQuery</i><br/>
                                        <i className="icon-bootstrap fa-2x"> BootStrap</i><br/>
                                    </p>
                                </div>
                                <div className="col-lg-6 text">
                                    <h3>Back End Skills</h3>
                                    <p>
                                        <i className="icon-python fa-2x"> Python</i><br/>
                                        <i className="icon-nodejs fa-2x"> NodeJS</i><br/>
                                        <i className="icon-mongodb fa-2x"> MongoDB</i> <br/>
                                    </p>
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