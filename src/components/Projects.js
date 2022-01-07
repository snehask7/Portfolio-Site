import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import acm from "../assets/projects/acm.gif";
import donut from "../assets/projects/donut.gif";
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
                                    English Test Application
                                </h4>
                                <p className="projectInfo">
                                    An application for listening and reading tests in my college's
                                    English lab using MERN Stack. Teachers can add tests, preview, add students and view results.
                                    Students can login and take the tests.
                                </p>
                                <Row>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >React</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >Express</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >Node</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >Mongodb</div></Col>
                                </Row>
                                <hr />
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
                                <Row>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >React</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >Express</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >Node</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >Mongodb</div></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={invente} className="projectimg" ></img>

                                <h4 className="projectname" >
                                    SSN Invente Website &nbsp;&nbsp;<a href="https://ssninvente.com/"><FaExternalLinkAlt color="#00adb5" /></a>&nbsp;&nbsp;<a href="https://github.com/snehask7/Invente6.0-Website"> <FaGithub color="#00adb5" /></a>
                                </h4>
                                <p className="projectInfo">
                                    Developed an application for the annual technical symposium of my college. Participants can sign up and login to register for events. Over 2000 participants registered successfully through the site.
                                </p>
                                <Row>
                                    <Col lg="6" md="6" sm="6" xs="6"><div class="tech" >NextJs</div></Col>
                                    <Col lg="6" md="6" sm="6" xs="6"><div class="tech" >Firebase</div></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={acm} className="projectimg" ></img>
                                <h4 className="projectname" >
                                    SSN ACM Website &nbsp;&nbsp;<a href="https://ssn.acm.org/"><FaExternalLinkAlt color="#00adb5" /></a> &nbsp;&nbsp; <a href="https://github.com/SSNACM/ACM_Website"><FaGithub color="#00adb5" /></a>
                                </h4>
                                <p className="projectInfo">
                                    Developed a website for the ACM student chapter of my college. The site contains details about events conducted, blog posts, slides from events, committee member details, and a contact page.
                                </p>
                                <Row>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >HTML</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >CSS</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >JS</div></Col>
                                </Row>
                            </div>

                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={gn1} className="projectimg" ></img>

                                <h4 className="projectname" >
                                    Game Nation &nbsp;&nbsp;<a href="https://game-nation.herokuapp.com/login"><FaExternalLinkAlt color="#00adb5" /></a> &nbsp;&nbsp; <a href="https://github.com/snehask7/Game-Website"><FaGithub color="#00adb5" /></a>
                                </h4>
                                <p className="projectInfo">
                                    Users can play tetris, a super fun tile matching puzzle game. Players can also add friends, and view the leaderboard. Profile avatars can be chosen, and players also have the choice of playing as a guest.

                                </p>
                                <Row>
                                    <Col lg="6" md="6" sm="6" xs="6"><div class="tech" >React</div></Col>
                                    <Col lg="6" md="6" sm="6" xs="6"><div class="tech" >Firebase</div></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={ers1} className="projectimg" ></img>

                                <h4 className="projectname" >
                                    Recruitment System &nbsp;&nbsp;<a href="https://github.com/snehask7/Employee-Recruitment-System"><FaGithub color="#00adb5" /></a>
                                </h4>
                                <p className="projectInfo">
                                    An application to facilitate the job hiring process for
                                    companies and applicant. Applicants can apply and the HR schedules interviews. The interviewer can view the upcoming interviews and submit feedback.
                                </p>
                                <Row>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >React</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >Express</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >Node</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >Mongodb</div></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <div className="projectCard">
                                <img alt="Project" src={donut} className="projectimg" ></img>
                                <h4 className="projectname" >
                                    Donut Shop website &nbsp;&nbsp;<a href="https://snehask7.github.io/Donut_Shop_Website/"><FaExternalLinkAlt color="#00adb5" /></a> &nbsp;&nbsp; <a href="https://github.com/snehask7/Donut_Shop_Website"><FaGithub color="#00adb5" /></a>
                                </h4>
                                <p className="projectInfo">
                                    Developed a website for a donut shop as a part of the SCVE Design Jam 2.0 contest. It is a static site and displays the menu and allows users to add items to their cart.
                                </p>
                                <Row>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >HTML</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >CSS</div></Col>
                                    <Col lg="4" md="4" sm="4" xs="6"><div class="tech" >JS</div></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>{" "}
        </Container >
    );
};

export default Projects;
