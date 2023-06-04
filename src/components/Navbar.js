import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
