import emailjs from 'emailjs-com';
import React from 'react';
import { Container } from "react-bootstrap";
import "../styles/contact.css";

const Contact = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, e.target, process.env.REACT_APP_USERID)
            .then(result => {
                alert('Message sent, Thank You!', result.text);
            },
                error => {
                    alert(error.text)
                })
    }
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
                            <form onSubmit={onSubmit}>
                                <input placeholder='Name' name="name" type="text" required autofill="off" />
                                <input placeholder='Phone' name="phone" type="number" />
                                <input placeholder='Email' name="email" type="text" required />
                                <textarea row="4" name="message" placeholder='Message' type="text" required />
                                <button class="btn" type="submit">Send Message</button>
                            </form>
                        </div>

                    </div>
                </Container>
            </div >
        </Container>
    );
};

export default Contact;
