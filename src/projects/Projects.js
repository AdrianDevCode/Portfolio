import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <section id="projects" className="container-fluid text-xs-center">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="card">
                            <a href="https://codepen.io/AdrianDevCode/full/dXGWZd" className="card-link"><img className="card-img-top" src="./img/quoteMachine.png" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">Quote Machine</h4>
                                <p className="card-text">
                                    A simple web app that pulls random quotes from a list file with an option to post it on your twitter.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://adriandevcode.github.io/WikiPages/" className="card-link"><img className="card-img-top" src="./img/wikiPages.png" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">Wiki Pages</h4>
                                <p className="card-text">
                                    Search app for Wikipedia. Simple and clutter free design to search Wikipedia articles.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://codepen.io/AdrianDevCode/full/dXGWZd" className="card-link"><img className="card-img-top" src="./img/wallPic.jpg" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">project 3</h4>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, necessitatibus!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum assumenda a minus aliquid iure quo accusamus debitis, laudantium odio atque.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://codepen.io/AdrianDevCode/full/dXGWZd" className="card-link"><img className="card-img-top" src="./img/wallPic.jpg" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">project 4</h4>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, necessitatibus!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum assumenda a minus aliquid iure quo accusamus debitis, laudantium odio atque.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://codepen.io/AdrianDevCode/full/dXGWZd" className="card-link"><img className="card-img-top" src="./img/wallPic.jpg" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">project 5</h4>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, necessitatibus!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum assumenda a minus aliquid iure quo accusamus debitis, laudantium odio atque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;