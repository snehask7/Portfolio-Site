import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import acm from "../assets/projects/acm.gif";
import eng1 from "../assets/projects/eng1.gif";
import ers1 from "../assets/projects/ers1.gif";
import gn1 from "../assets/projects/gn1.gif";
import invente from "../assets/projects/invente.gif";
import swa1 from "../assets/projects/swa1.gif";
import "../styles/projects.css";

const Projects = () => {

    return (
        <Container>
            <div className="ProjectSection">
                <h1 className="projectheading">Projects</h1>
                <Container>
                    <Row>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" className="projectimg" src={eng1}></img>

                                <h4 className="projectname" >
                                    English Listening Test Application
                                </h4>
                                <p className="projectInfo">
                                    An application for listening and reading tests in my college's
                                    English lab using MERN Stack. Teachers can add tests, preview, add students and view results.
                                    Students can login and take the tests.
                                </p>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={swa1} className="projectimg" ></img>

                                <h4 className="projectname" >
                                    Temple Accounting Application
                                </h4>
                                <p className="projectInfo">
                                    Developed during my internship at Swaztik Solutions. Temple related data and accounting infor such as journals, contra, expenses can be added. Ledgers can be generated from the data.

                                </p>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={invente} className="projectimg" ></img>

                                <h4 className="projectname" >
                                    SSN Invente Website
                                </h4>
                                <p className="projectInfo">
                                    Developed an application for the annual technical symposium of my college. Participants can sign up and login to register for events. Over 2000 participants registered successfully through the site.

                                </p>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={acm} className="projectimg" ></img>

                                <h4 className="projectname" >
                                    SSN ACM Website
                                </h4>
                                <p className="projectInfo">
                                    Developed a website for the ACM student chapter of my college. The site contains details about events conducted, blog posts, slides from events, committee member details, and a contact page.

                                </p>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={gn1} className="projectimg" ></img>

                                <h4 className="projectname" >
                                    Game Nation
                                </h4>
                                <p className="projectInfo">
                                    Users can play tetris, a super fun tile matching puzzle game. Players can also add friends, and view the leaderboard. Profile avatars can be chosen, and players also have the choice of playing as a guest.

                                </p>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={ers1} className="projectimg" ></img>

                                <h4 className="projectname" >
                                    Recruitment System
                                </h4>
                                <p className="projectInfo">
                                    An application to facilitate the job hiring process for
                                    companies and applicant. Applicants can apply and the HR schedules interviews. The interviewer can view the upcoming interviews and submit feedback.
                                </p>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={swa1} className="projectimg" ></img>
                                <h4 className="projectname" >
                                    Donut Shop website
                                </h4>
                                <p className="projectInfo">
                                    Developed a website for the ACM student chapter of my college. The site contains details about events conducted, blog posts, slides from events, committee member details, and a contact page.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>{" "}
        </Container >
    );
};

export default Projects;
