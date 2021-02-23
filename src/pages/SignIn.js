import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Card } from "react-bootstrap"; 
import '../functions/auth'
import { signIn } from "../functions/auth";

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  function handleSubmit(e) {
    // preventing default submit
    e.preventDefault()
    
    // before handling a submit, disable the submit button
    // before the first submit result comes back
    setLoading(true)
    if (null)
    {
      // redirect to Homepage
      setLoading(false)
      return
    }

    // case of login fail
    else
    {
      clearInputs()
      console.log("test")
      setLoading(false)
    }

    // turn back on submit button
  }

  return(
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">
            Sign Up
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
