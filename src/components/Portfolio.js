import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import placeholder from "../Assets/img/placeholder.jpeg";
import flex from "../Assets/img/flex-appeal.png";
import read from "../Assets/img/readme.png";
import employee from "../Assets/img/employee.png";


export const Portfolio = () => {
    const projects = [
        {
            title: <a href='https://flex-appeal.herokuapp.com/'>Flex-Appeal</a>,
            description: "A handy workout app where you can create and store your own workout plans",
            imgUrl: flex,
        },
        {
            title: <a href='https://github.com/tjmomon92/README-Generator'>README Generator</a>,
            description: "A node.js application used to create professional README files",
            imgUrl: read,
        },
        {
            title: <a href='https://github.com/tjmomon92/Employee-Profile-Generator'>Employee Profile Generator</a>,
            description: "A node.js application used to dynamically create HTML for employee profiles based on user entry",
            imgUrl: employee,
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