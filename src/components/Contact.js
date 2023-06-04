// src/components/Contact.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
      <Row>
        <Col xs={12} className="text-center">
          <h2>Contact Me</h2>
            <a href="https://www.linkedin.com/in/francisco-padilla-248b5069/">
                <Image src={process.env.PUBLIC_URL + '/assets/icons8-linkedin-50.png'} alt="LinkedIn Icon" />
            </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
