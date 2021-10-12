/*In this component, we will explore the react-bootstrap package, which is an npm package that will allow us to create components that
will render bootstrap-enabled HTML. In order to use this package, we must open a terminal and run 'npm install react-bootstrap'. 
After that step, we will simply import the specific omponents that we want to use in each file.*/

import React from 'react'
import './Bootstrap.css'
//Below we add the imports to access the components we want to use from react-bootstrap package
import {Container, Row, Col, Carousel, Accordion, Card, Button } from 'react-bootstrap';
//import images for the carousel to use
import image from '../../images/background.jpg'
import image2 from '../../images/background2.jpg'
import image3 from '../../images/background3.jpg'

import Logout from '../Auth/Logout';
import { useAuth } from '../../contexts/AuthContext';

export default function Bootstrap(){
    const {currentUser} = useAuth();
    return(
        <section className="bootstrap">
            <main>
            {/* Below we use the carousel component, along with its child components to render specific code to the browser to create
            a functioning carousel. We will also add minor styling changes in Bootstrap.css to make it look how we want for our UI*/}
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={image} alt="First slide"/>
                    <Carousel.Caption>
                    <h3>Welcome to Bootstrap</h3>
                    <p>npm install react-bootstrap</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image2} alt="Second slide"/>
                    <Carousel.Caption>
                    <h3>Each Carousel.Item is another slide</h3>
                    <p>npm install react-bootstrap</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image3} alt="Third slide"/>
                    <Carousel.Caption>
                    <h3>Just using components</h3>
                    <p>npm install react-bootstrap</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>          
              <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Step 1 : Install the Package
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>npm install react-bootstrap</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Step 2 : Import the Components you are using
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <a href="https://react-bootstrap.github.io" target="_blank" rel="noreferrer">Visit react-bootstrap docs</a>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Step 3: Call to the components.
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            Using the code example from their documentation, call to the components as needed to implement the Bootstrap
                            functionality in your UI.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
              </Accordion>
              {/** Create Col components that will allows us to customize the layout for our app */}
              <Row className="text-center">
                <Col md={3} className="alert alert-primary">
                    <h4>col-md-3 <hr/> will take up 3 of 12 columns in the grid </h4>
                </Col>
                <Col md={6} className="alert alert-danger">
                    <h4>col-md-6 <hr/> will take up 6 of 12 columns in the grid </h4>
                </Col>
                <Col md={3} className="alert alert-primary">
                    <h4>col-md-3 <hr/> will take up 3 of 12 columns in the grid </h4>
                </Col>
              </Row>
              <Row className="text-center">
                <Col md={6} className="alert alert-warning">
                    This will take up half of the parents width.
                </Col>
                <Col md={6} className="alert alert-primary">
                    This will take up half of the parents width.
                </Col>        
              </Row>
            </Container>
            </main>
            {currentUser &&
                <Logout />
            }
        </section>
    )
}