import React, { Component } from 'react';
import './Homepage.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDoubleDown)

class Homepage extends Component {
    render() {
        return (
            <section id="homePage">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">

                    <h1>Adrian Wiszniewski</h1>
                    <h4>Web Developer</h4>
                    </div>
                </div>
                </div>
                <div className="mx-auto" style={{width: 60+"px"}}>
                <a id="downArrowBtn" href="#aboutMe" className="fa-5x arrow-bounce" aria-hidden="true"><FontAwesomeIcon icon="angle-double-down" /></a>
                </div>
            </section>
        );
    }
}

export default Homepage;