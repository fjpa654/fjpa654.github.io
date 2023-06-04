import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ABOUT_IMAGE_URL } from '../assets/images_urls';  // Modify this path to the actual path of your images_urls.js file
import { ABOUT_ME_TEXT } from '../data/about_me_text';

const About = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className="d-lg-flex justify-content-center align-items-center">
          {/* Use the imported URL for your image */}
          <img src={ABOUT_IMAGE_URL} alt="Your name" className="img-fluid" />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className="d-lg-flex justify-content-center align-items-center">
          <div>
            <h2>I'm Francisco</h2>
            <p>{ABOUT_ME_TEXT}</p>
          </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default About;
