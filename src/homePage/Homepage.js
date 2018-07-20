import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import FontAwesome from "react-fontawesome";
import './Homepage.css';

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
                <div className="mx-auto downArrow">
                    <Scrollchor id="downArrowBtn" to="#aboutMe" className="arrow-bounce" aria-hidden="true"><FontAwesome name="angle-double-down" size="5x" /></Scrollchor>
                </div>
            </section>
        );
    }
}

export default Homepage;