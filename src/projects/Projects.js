import React, { Component } from 'react';
import './Projects.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Projects extends Component {
   
    render() {
        const videoButton = link => {
            let width = window.innerWidth;
                Swal({
                    title: "Check out the preview of the app below",
                    html: `<iframe width="${width - 100}" height="315" src="${link}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
                    confirmButtonText: "Back to Portfolio",
                    width: `${width}px`
                })
            
        }
        return (
            <section id="projects" className="container-fluid text-xs-center">
                <div className="row">
                    <div className="col-12 text-center sm-auto">
                        <div className="card">
                            <a href="https://guild-wars-2-card-game.herokuapp.com/" className="card-link"><img className="card-img-top" src="./img/gw2CardGame.png" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">Guild Wars Card Game</h4>
                                <p className="card-text">
                                    Full Stack card game fusing triple Triad game mechanics with guild wars 2 game look. Collect all 64 cards!
                                </p>    
                                <button onClick={() => {videoButton("https://www.youtube.com/embed/VYOjWnS4cMY")}} className="btn btn-lg btn-block hvr-grow hvr-bounce-to-left">Show Video</button>
                                <FontAwesomeIcon className="icons" icon={['fab', 'react']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={['fab', 'html5']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={['fab', 'css3']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={'database'} size="2x" />
                                <FontAwesomeIcon className="icons" icon={['fab', 'node']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={'code'} size="2x" />
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://chilangosproj.herokuapp.com/" className="card-link"><img className="card-img-top" src="./img/chilangos.png" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">Chilangos</h4>
                                <p className="card-text">
                                    Full Stack trivia game that tests your knowledge of the mexican slang. Try to get the highest score!
                                </p>
                                <button onClick={() => {videoButton("https://www.youtube.com/embed/VYOjWnS4cMY")}} className="btn btn-lg btn-block hvr-grow hvr-bounce-to-right">Show Video</button>
                                <FontAwesomeIcon className="icons" icon={['fab', 'html5']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={['fab', 'css3']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={'database'} size="2x" />
                                <FontAwesomeIcon className="icons" icon={['fab', 'node']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={'code'} size="2x" />
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://tagged.netlify.com/" className="card-link"><img className="card-img-top" src="./img/tagged.png" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">Tagged</h4>
                                <p className="card-text">
                                    Full Stack messaging app using license plates to talk to the other drivers on the road.                               
                                </p>
                                <button onClick={() => {videoButton("https://www.youtube.com/embed/VYOjWnS4cMY")}} className="btn btn-lg btn-block hvr-grow hvr-bounce-to-left">Show Video</button>
                                <FontAwesomeIcon className="icons" icon={['fab', 'html5']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={['fab', 'css3']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={'database'} size="2x" />
                            </div>
                        </div>
                        <div className="card">
                            <a href="https://sceneit.netlify.com/" className="card-link"><img className="card-img-top" src="./img/sceneIt.png" alt="" /></a>
                            <div className="card-body">
                                <h4 className="card-title">SceneIt</h4>
                                <p className="card-text">
                                    A simple app that searches movie database and shows pertinent information on the movie. User can create watchlist by adding any movies shown
                                </p>
                                <button onClick={() => {videoButton("https://www.youtube.com/embed/VYOjWnS4cMY")}} className="btn btn-lg btn-block hvr-grow hvr-bounce-to-right">Show Video</button>
                                <FontAwesomeIcon className="icons" icon={['fab', 'html5']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={['fab', 'css3']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={['fab', 'git']} size="2x" />
                                <FontAwesomeIcon className="icons" icon={['fab', 'js']} size="2x" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;