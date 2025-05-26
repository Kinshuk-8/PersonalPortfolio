import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "E-Bidding",
      description: "A bidding website",
      imgUrl: projImg2,
    },
    {
      title: "Medico",
      description: "Smart Health Card",
      imgUrl: projImg1,
    },
    {
      title: "Medweb",
      description: "A Medical Website",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <h2>Projects</h2>
                <p>
                  Here are some of the projects I’ve built—from real-time auction systems to healthcare platforms—
                  each focused on solving real problems with responsive design, robust functionality, and modern web technologies.
                </p>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
