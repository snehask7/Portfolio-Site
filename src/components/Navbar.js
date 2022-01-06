import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 40) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="#home">
                    <Nav.Item style={{ fontWeight: '900', color: "#00adb5" }}>
                        <b>Sneha Sriram</b>
                    </Nav.Item>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item >
                            {/* <Nav.Link
                  as={Link}
                  to="about"
                  onClick={() => updateExpanded(false)}
                > */}
                            <a href="#about">
                                <b>About</b>
                            </a>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                        <Nav.Item>
                            {/* <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              > */}
                            <a href="#skill">
                                <b>Skills</b>
                            </a>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                        <Nav.Item>
                            {/* <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              > */}
                            <a href="#projects">
                                <b>Projects</b>
                            </a>
                            {/* </Nav.Link> */}
                        </Nav.Item>


                        <Nav.Item>
                            {/* <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              > */}
                            <b>Contact</b>
                            {/* </Nav.Link> */}
                        </Nav.Item>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;