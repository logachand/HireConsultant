import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import  Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
  


function Login() {
  
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()
  // const axe = Axios()
  const loginHandler = (e) =>{
    e.preventDefault()
    Axios.post('http://localhost:4000/login',{email,password})
    .then(res=>{console.log(res)
      if(res.data === 'success'){
        navigate('/')
      }
    })
    .catch(err => console.log(`${err}`))
  }

 const funLogic = () => {
  navigate('/main')
 }

  return (
    <div>
      <Container>
      <h1 className="display-4 text-center">Login User</h1>
        <Form onSubmit={loginHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  required  placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Have Fun Just Click me" onClick={funLogic} />
          </Form.Group>
          <Button  className="mb-4" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <Link to = "/forgotPassword">Forgot Password</Link>
        <GoogleLogin    
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        /> 
      
      </Container>
      {/* <Button href="/signup">Register</Button> */}
     
    </div>
  );
}

export default Login;
