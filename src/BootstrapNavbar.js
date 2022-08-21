import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import mainlogo from './assets/cafelogo.png';
import inverselogo from './assets/inverselogo.png'
import { Link } from "react-router-dom";
import "./navbar.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GoogleLogin } from 'react-google-login';
import {gapi} from 'gapi-script'

export default function BootstrapNavbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const clientId = "78141841134-fg6mcun8h6kqjfothgljr1hqa1u9igup.apps.googleusercontent.com";

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    }, [])

    const LogIn = () => {
        console.log("ehundnhed")
    }

    const onSuccess = (res) => {
        console.log("CURRENT USER", res.profileObj )
    }

    const onFailure = (res) => {
        console.log("FAILED: ", res)
    }

    return (
        <nav className="navigation">
            <a href="/">
                <img src = {mainlogo} className="logo"

                     width = {100}
                     height = {100}
                     alt="logo"/></a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                {/* icon from Heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/events">Events</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/signup">Sign Up</a>
                    </li>
                    <li>
                        <a href="#" onClick={handleShow} >Log In</a>
                    </li>
                </ul>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Log In</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className = "modalbody">
                        <GoogleLogin clientId={clientId}
                                     buttonText="Login"
                                     onSuccess={onSuccess}
                                     onFailure={onFailure}
                                     cookiePolicy={'single_host_origin'}
                                     isSignedIn={true}
                                     />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>
        </nav>
    );
}
