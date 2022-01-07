import emailjs from 'emailjs-com';
import React from 'react';
import { Container } from "react-bootstrap";
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import "../styles/contact.css";

const Contact = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        //toastId.current = toast("Sending Message!");
        emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, e.target, process.env.REACT_APP_USERID)
            .then(result => {
                //toast.dismiss(toastId.current);
                alert('Message Sent 😃')
            },
                error => {
                    //toast.dismiss(toastId.current);
                    alert('Message Sent 😃')
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
                            <form onSubmit={onSubmit} >
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
