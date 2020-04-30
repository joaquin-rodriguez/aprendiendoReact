import React from 'react';
import Images from "./Images";
import LeftHome from './LeftHome';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

function Home() {
    return (
        <div className="HomeBackground">
            <Jumbotron className="jimbo">
                <h1>Do you like chunky boys?</h1>
                <p>
                    In this site you will find all kinds of chunky boys, from extra chunkers to skinny chunks and all inbetweeen!
                </p>
                <p>
                    <Button variant="dark">Learn more</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col md='auto'><LeftHome /></Col>
                    <Col><Images /></Col>
                </Row>
            </Container>
        </div>

    )
}
export default Home;