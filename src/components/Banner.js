import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Header-img.png";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div >
                <span className="tagline">Welcome to My World!!!</span>
                <h1>Hey! I'm Kinshuk Maddineni </h1>
                  <p>"I am Kinshuk Maddineni, a passionate Computer Science and Engineering student at Vellore Institute of Technology – Andhra Pradesh. I thrive in environments that challenge me to grow and enjoy both independent and collaborative work. I believe in learning from mistakes and converting them into strengths. I'm driven by vision, character, and the desire to build meaningful solutions to real-world problems."</p>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
