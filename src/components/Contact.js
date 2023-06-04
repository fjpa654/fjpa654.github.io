// src/components/Contact.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '../assets/icons8-linkedin-50.png';

const Contact = () => {
  return (
    <Container >
      <Row>
        <Col xs={12} className="text-center">
            <a href="https://www.linkedin.com/in/francisco-padilla-248b5069/">
                <Image src={process.env.PUBLIC_URL + LinkedInIcon} alt="LinkedIn Icon" />
            </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
