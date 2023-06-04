// src/components/Contact.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '../assets/icons8-linkedin-50.png';
import GitHubIcon from '../assets/icons8-github-64.png';

const Contact = () => {
    return (
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={'auto'} className="mx-2">
            <a href="https://www.linkedin.com/in/francisco-padilla-248b5069/">
              <Image src={process.env.PUBLIC_URL + LinkedInIcon} alt="LinkedIn Icon" />
            </a>
          </Col>
          <Col xs={'auto'} className="mx-2">
            <a href="https://github.com/fjpa654?tab=repositories">
              <Image src={process.env.PUBLIC_URL + GitHubIcon} alt="GitHub Icon" />
            </a>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Contact;