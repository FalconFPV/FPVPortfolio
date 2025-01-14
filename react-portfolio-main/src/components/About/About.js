import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import Services from "./Services";
import OurFleet from "./OurFleet";

function About() {
  return (
     <Container fluid className="about-section">
        <Row className="about-row">
           {/* <Row className="img-about"></Row> */}
           <Row className="about">
              <Aboutcard />
              <div className="skill-section-container" id="skills" data-aos="fade-up" data-aos-duration="2000">
                 <Services />
              </div>
              <OurFleet />
           </Row>
        </Row>
     </Container>
  );
}

export default About;
