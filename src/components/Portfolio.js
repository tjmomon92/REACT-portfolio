import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import placeholder from "../Assets/img/placeholder.jpeg"

export const Portfolio = () => {
    const projects = [
        {
            title: "placeholder 1",
            description: "placeholder 1",
            imgUrl: placeholder,
        },
        {
            title: "placeholder 2",
            description: "placeholder 2",
            imgUrl: placeholder,
        },
        {
            title: "placeholder 3",
            description: "placehelder 3",
            imgUrl: placeholder,
        },
        {
            title: "placeholder 4",
            description: "placeholder 4",
            imgUrl: placeholder,
        },
        {
            title: "placeholder 5",
            description: "placeholder 5",
            imgUrl: placeholder,
        },
        {
            title: "placeholder 6",
            description: "placeholder 6",
            imgUrl: placeholder,
        },
    ];

    return (
        <section className="project" id="portfolio">
          <Container>
            <Row>
              <Col size={12}>
                  <div className="animate__animated animate__fadeIn">
                    <h2>My Portfolio</h2>
                    <p>Check out what I have been working on</p>
                    {/* <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
                      {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item> */}
                        {/* Added multiple tabs for future use */}
                        {/* <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item> */}
                      {/* </Nav>
                      <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                        <Tab.Pane eventKey="first"> */}
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        {/* </Tab.Pane> */}
                        {/* panes for other tabs as mentioned above */}
                        {/* <Tab.Pane eventKey="second">
                          <p>Lorem ipsum</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Lorem ipsum</p>
                        </Tab.Pane> */}
                      {/* </Tab.Content>
                    </Tab.Container> */}
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
    )
}