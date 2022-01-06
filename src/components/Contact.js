import React from 'react';
import { Container } from "react-bootstrap";
import "../styles/contact.css";
const Contact = () => {
    return (
        <Container >
            <div className="ContactSection">
                <h1 className="contactheading" >
                    Contact Me
                </h1>
                <Container>
                    <div class="contactForm ">
                        <p class="lightText ">Fill the form below to get in touch with me!</p>
                        <div class="form">
                            <input placeholder='Name' type="text" />
                            <input placeholder='Email' type="text" />
                            <textarea row="4" placeholder='Message' type="text" />
                            <a href="#" class="btn">Send Message</a>

                        </div>

                    </div>
                </Container>
            </div >
        </Container>
    );
};

export default Contact;
