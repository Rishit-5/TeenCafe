import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
export default function BootstrapNavbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="home">
                        <img
                            alt=""
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Logo_example.svg/1280px-Logo_example.svg.png"
                            width="178"
                            height="30"
                            className="d-inline-block align-bottom "
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}