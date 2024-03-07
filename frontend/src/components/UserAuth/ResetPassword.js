import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import  Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  

function ResetPassword() {
  
  const [newPassword,setNewPassword] = useState()
  const [confirmPassword,setConfirmPassword] = useState()
  const navigate = useNavigate()
  const {id,token} = useParams()

  // const axe = Axios()
  const forgotHandler = (e) =>{
    e.preventDefault()
    Axios.post(`${process.env.REACT_APP_SERVER_API}/userCredentials/resetPassword/${id}/${token}`,{newPassword, confirmPassword })
    .then(res=>{console.log(res)
      if(res.data === 'success'){
        toast.success("Password Reset Successfully",{
          onClose:() =>{
            navigate('/login')
          }
        }) 
      } else if( res.data === "Invalid"){
          toast.error("Password Not Match")
      }
    })
    .catch(err => console.log(`${err}`))
  }
  return (
    <div>
      <Container>
        <ToastContainer/>
      <h1 className="display-4 text-center">Reset Password</h1>
        <Form onSubmit={forgotHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your New Password : </Form.Label>
            <Form.Control type="text"  required  placeholder="Enter New Password" onChange={(e) => setNewPassword(e.target.value)}/>
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your Confirm Password : </Form.Label>
            <Form.Control type="text"  required  placeholder="Enter Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
          </Form.Group>


          <Button  className="mb-4" variant="primary" type="submit">
            Reset Password
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ResetPassword;
