import { default as React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AboutImage from "../assets/about.svg";
import "../styles/about.css";
import resume from './resume.pdf';
const About = () => {

    return (
        <Container className="AboutSection">

            <Container>
                <h1 className="aboutheading"> About</h1>
                <Row >
                    <Col md="6" sm="12" style={{ textAlign: "center" }}> <img alt="avatar" className="ProfilePic" width="500" src={AboutImage}></img>
                        <Row className="resumebox" style={{ textAlign: 'center' }}>
                            <ul >
                                <li><a href="https://github.com/snehask7"><FaGithub /></a></li>
                                <li><a href="https://www.linkedin.com/in/sneha-sriram-/"><FaLinkedinIn /></a></li>
                                <li><a href={resume} target="_blank"><FaFileAlt /></a></li>
                            </ul>
                        </Row>
                    </Col>
                    <Col ><div className="aboutInfo"><p >
                        My name is Sneha and I'm a final year Computer Science student at SSN College of Engineering, Chennai. I am passionate towards designing and developing software applications. I love exploring new technologies and working on projects.
                    </p><br />

                    </div>
                    </Col>
                </Row>

            </Container >
            <div className="resumeboxmobile" style={{ textAlign: 'center' }}>
                <ul>
                    <li ><FaGithub /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FaFileAlt /></li>
                </ul>
            </div>
        </Container >
    );
};

export default About;
