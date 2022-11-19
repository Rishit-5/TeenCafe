import React, {useState, useRef} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import db from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import "./SignUp.css"

const SignUp = () => {

    return (

        <div>
            <div className="contain">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd6TTsOhMUF5yu2mFlSQcmAMpFHYcJhoD4XRkSAtp0eyD37VA/viewform?embedded=true"
                    width="640" height="1261" frameBorder="0" marginHeight="0" marginWidth="0" className="forms">Loading…
                </iframe>
            </div>
        </div>



    )
}
export default SignUp;

