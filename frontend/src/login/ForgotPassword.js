import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import  Axios from "axios";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
  
  const [email,setEmail] = useState()
  const navigate = useNavigate()
  const forgotHandler = (e) =>{
    e.preventDefault()
    Axios.post(`${process.env.REACT_APP_SERVER_API}/userCredentials/forgotPassword`,{email})
    .then(res=> {
      if(res.data.message === "success"){
        console.log("Mail Sent" +  res.data.message);
        toast.success("Reset Link sent to your MailID",{
          onclose:() => {
            navigate('/login')
          }
        }) 
      }
    })
    .catch(err => console.log(`${err}`))
  }
  return (
    <div>
      <Container>
        <ToastContainer/>
      <h1 className="display-4 text-center">Forgot Password</h1>
        <Form onSubmit={forgotHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email"  required  placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Button  className="mb-4" variant="primary" type="submit">
            Reset Password
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ForgotPassword;
