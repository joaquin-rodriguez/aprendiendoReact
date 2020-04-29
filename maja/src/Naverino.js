import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap"

function Naverino() {
    return (
        <Navbar className="Naverino" bg="#ff5e6c" expand="lg">
            <Navbar.Brand href="/">
                <img className="miniLogo" src='https://pluspng.com/img-png/circle-png-circle-png-hd-1600.png' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Shop">Also Shop</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <NavDropdown title="Shop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Woman</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Doggos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="dark">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Naverino;