import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import mainlogo from './assets/cafelogo.png';
import { Link } from "react-router-dom";

export default function BootstrapNavbar() {
    return (
        <div>
            <Navbar bg="transparent" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={mainlogo}
                            width="100"
                            height="100"
                            className="d-inline-block align-bottom"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="justify-content-end text-white">
                        <Nav.Link as= {Link} to="/signup" className="text-white"><b>SIGN UP</b></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
