import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Card } from "react-bootstrap"; 
import { signIn } from '../functions/auth'
import Homepage from "./Homepage";

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const history = useHistory()

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrMsg = () => {
    setEmailErr('');
    setPasswordErr('');
  }

  async function handleSubmit(e) {
    // preventing default submit
    e.preventDefault()
    
    // clear message
    clearErrMsg()

    // before handling a submit, disable the submit button
    // before the first submit result comes back
    setLoading(true)

    // call Sign in function
    const loginCase = await signIn(email, password)    

    setLoading(false)
    switch(loginCase)
    {
      // successful login, redirect to homepage
      case 1:
        history.push('home')
        return
  
      // incorrect email
      case 2:
        setEmail('')
        setEmailErr('Invalid Email')
        break;
    
      // incorrect password
      case 3:
        setPassword('')
        setPasswordErr('Invalid Password')
        break;
      
    }
  }

  return(
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">
            Sign In
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <p className="errorMsg" style={{color: "red"}}>{emailErr}</p>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="errorMsg" style={{color: "red"}}>{passwordErr}</p>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/create-account"> Sign Up </Link>
      </div>
    </>
  );
}
