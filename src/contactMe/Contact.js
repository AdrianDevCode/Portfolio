import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 d-sm-inline-flex text-center">
                            <div id="map"></div>
                            <div id="form" action="https://formspree.io/adrianw.ct@gmail.com" method="POST" role="form">
                                <h3>Send me a message!</h3>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                        <textarea id="form_message" name="message" className="form-control" rows="4" required="required" data-error="Oops, need something in message"></textarea>
                                        <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="sendButton">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <strong>
                        <i className="fa fa-copyright" aria-hidden="true"></i> copyright 2017</strong>
                    </footer>
                </div>
            </section>

        )
    }
}

export default Contact;