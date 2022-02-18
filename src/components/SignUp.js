import React, {useState, useRef} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"
import { useAuth } from "../contexts/AuthContext" 


const SignUp = () => {

    const passwordRef = useRef()
    const passwordConfirmRef = useRef() 
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(passwordRef.current.value) /* wrap it in signup() for firebase auth ++ <AuthProvider></AuthProvider> in return value below*/
          history.push("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }


      
    return (
            <div>
            <br />
            <br />
            <br />
            
            <h1 className="mb-3">Sign Up</h1>
            <Form className="mt-30 w-50 mx-auto" onSubmit={handleSubmit}>
            {error && <Alert varient="danger">{error}</Alert>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Phone Number" required/> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <br />
            <br />
        </div>
        

    )
}
export default SignUp;

