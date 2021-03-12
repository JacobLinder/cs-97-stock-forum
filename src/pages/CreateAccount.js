import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Form, Card } from "react-bootstrap"; 
import { Button } from '@material-ui/core'
import { createAccount } from '../functions/auth'
import Homepage from "./Homepage";

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [loading, setLoading] = useState(false)
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [passwordCErr, setPasswordCErr] = useState("")
  const history = useHistory()

  const clearErrMsg = () => {
    setEmailErr('');
    setPasswordErr('');
    setPasswordCErr('');
  }

  async function handleSubmit(e) {
    // preventing default submit
    e.preventDefault()
    
    // clear message
    clearErrMsg()

    // before handling a submit, disable the submit button
    // before the first submit result comes back

    if (password !== passwordConfirm)
    {
      setPasswordCErr("Passwords do not match each other")
      setPasswordConfirm('')
      return
    }

    setLoading(true)

    const signUpCase = await createAccount(userName, email, password)

    console.log(signUpCase);

    setLoading(false)
    switch(signUpCase)
    {
      // successful login, redirect to homepage
      case 1:
        history.push('home')
        return
  
      // invalid email, no user found
      case 2:
        setEmail('')
        setEmailErr('Invalid Email')
        break;

      case 3:
        setPassword('')
        setPasswordErr('Password is too weak, must be more than 6 digits')
        break;

      case 4:
        setEmail('')
        setPassword('')
        setEmailErr('Unexpected error creating account')
        break;
    }
  }

  return(
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">
            Sign Up
          </h2>
          <Form onSubmit={handleSubmit}>
          <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
              />
              <p className="errorMsg" style={{color: "red"}}>{emailErr}</p>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <Form.Group id="passwordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              <p className="errorMsg" style={{color: "red"}}>{passwordCErr}</p>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Have an account already? <Link to="/sign-in"> Sign In </Link>
      </div>
    </>
  );
}
