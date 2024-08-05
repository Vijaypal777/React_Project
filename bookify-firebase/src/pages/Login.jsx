import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {  useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import { useState } from "react";
import { useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firbase = useFirebase();
  const navigate=useNavigate();
  useEffect(()=>{
    if(firbase.isLoggedIn){
        //navigate
        navigate("/");

    }
  },[firbase, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login in a user...");
    const result = await firbase.signinUserWithEmailAndPassword(
      email,
      password
    );
    console.log("successfully", result);
  };



  return (
    <div className="container mt-5 ">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>

        <h2 className="mt-5 mb-5">OR</h2>

        <Button onClick={firbase.signInWithGoogle}>Sigin With Google</Button>
      </Form>
    </div>
  );
}

export default Login;
