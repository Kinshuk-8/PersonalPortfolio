import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              <img src={contactImg} alt="Contact Us" />
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              <div>
                <h2>Get In Touch</h2>
                <div className="contact-links">
                  <a
                    href="mailto:kinshuk.maddineni@gmail.com"
                    className="contact-box"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope className="icon" /> Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kinshuk-maddineni-775b17313/"
                    className="contact-box"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="icon" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/Kinshuk-8"
                    className="contact-box"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon" /> GitHub
                  </a>
                </div>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
